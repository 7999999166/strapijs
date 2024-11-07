      const { createCoreController } = require('@strapi/strapi').factories;

      module.exports = createCoreController('api::company.company', ({ strapi }) =>  ({

       async pre(ctx) {

         var kio =   await strapi.documents('api::company.company').findFirst();
         ctx.body = kio;
 
      },

      async post(ctx){

      ctx.body = "i m not okey" ;

      }
      
      }));