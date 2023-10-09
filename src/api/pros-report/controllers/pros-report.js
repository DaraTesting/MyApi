'use strict';

/**
 * A set of functions called "actions" for `pros-report`
 */

// module.exports = {
//   // exampleAction: async (ctx, next) => {
//   //   try {
//   //     ctx.body = 'ok';
//   //   } catch (err) {
//   //     ctx.body = err;
//   //   }
//   // }
// };

module.exports = {
  async findAll(ctx, next) {
    try {
      // @ts-ignore
      const container = await strapi.service('api::pros-report.pros-report').prosReport();
      ctx.body = container;
    } catch (err) {
      ctx.badRequest('Pro report controller error', { moreDetails: err })
    }
  }
};
