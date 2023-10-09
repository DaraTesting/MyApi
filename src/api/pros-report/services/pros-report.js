'use strict';

/**
 * pros-report service
 */

module.exports = {
    prosReport: async () => {
      try {
        // fetching the data
        // we dont really need contentSections for this example.
        // its kept here, just for your reference
        const entries = await strapi.entityService.findMany('api::pro.pro', {
            fields: ['name']
        });

        // reducing the data to a simple array
        let entriesReduced;
        if (entries && Array.isArray(entries)) {
          entriesReduced = entries.reduce((acc, item) => {
            acc = acc || [];
            console.log(acc);
            acc.push({
              name: item || '',
            });
            return acc;
          }, [])

          // returning the reduced data
          return entriesReduced;
        }
      } catch (err) {
        return err;
      }
    }
  }
