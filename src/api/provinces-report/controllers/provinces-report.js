'use strict';

/**
 * A set of functions called "actions" for `provinces-report`
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
      const data = await strapi.service('api::provinces-report.provinces-report').pagesReport();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest('Page report controller error', { moreDetails: err })
    }
  }
};
