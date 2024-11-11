const admin = require('firebase-admin');

const notification = ({ strapi }) => ({
 async sendToUser(userId, title, body, data = {}) {
    try {
      const user = await strapi.db.query.findOne('plugin::users-permissions.user', userId, {
        fields: ['fcmToken']
      });

      if (!user?.fcmToken) {
        throw new Error('User FCM token not found');
      }

      const message = {
        notification: { title, body },
        data,
        token: user.fcmToken
      };

      const response = await admin.messaging().send(message);
      return { success: true, messageId: response };
    } catch (error) {
      console.error('Error sending notification:', error);
      return { success: false, error: error.message };
    }
  },

  async sendToMultipleUsers(userIds, title, body, data = {}) {
    try {
      const users = await strapi.db.query.findMany('plugin::users-permissions.user', {
        filters: { id: { $in: userIds } },
        fields: ['fcmToken']
      });

      const tokens = users
        .filter(user => user.fcmToken)
        .map(user => user.fcmToken);

      if (!tokens.length) {
        throw new Error('No valid FCM tokens found');
      }

      const message = {
        notification: { title, body },
        data,
        tokens
      };

      const response = await admin.messaging().sendMulticast(message);
      return {
        success: true,
        successCount: response.successCount,
        failureCount: response.failureCount,
        responses: response.responses
      };
    } catch (error) {
      console.error('Error sending multiple notifications:', error);
      return { success: false, error: error.message };
    }
  }
});

export default notification;