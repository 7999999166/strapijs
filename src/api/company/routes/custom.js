 module.exports = {
       routes: [
       {
        method: 'GET',
        path: '/pretransaction',
        handler: 'custom.pre', 
       },
       {
        method: 'GET',
        path: '/posttransaction',
        handler: 'custom.post', 
       },
      ],
    };