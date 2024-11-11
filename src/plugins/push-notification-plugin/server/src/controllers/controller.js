const controller = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('push-notification-plugin')
      .service('service')
      .getWelcomeMessage();
  },
  async sendToUser(ctx) {
    try {
      const { userId, title, body, data } = ctx.request.body;
      
      const result = await strapi
        .plugin('push-notification-plugin')
        .service('notification')
        .sendToUser(userId, title, body, data);

      ctx.body = result;
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async sendToMultipleUsers(ctx) {
    try {
      const { userIds, title, body, data } = ctx.request.body;
      
      const result = await strapi
        .plugin('push-notification-plugin')
        .service('notification')
        .sendToMultipleUsers(userIds, title, body, data);

      ctx.body = result;
    } catch (err) {
      ctx.throw(500, err);
    }
  }
});

export default controller;
