const service = ({ strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },
  letsGo() {
    return 'you are ready to go!';
  },
});

export default service;
