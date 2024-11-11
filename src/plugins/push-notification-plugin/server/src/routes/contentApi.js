export default [
  {
    method: 'GET',
    path: '/hello',
    handler: 'controller.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/send-to-user',
    handler: 'controller.sendToUser',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/send-to-multiple-users',
    handler: 'controller.sendToMultipleUsers',
    config: {
      policies: [],
    },
  }
];