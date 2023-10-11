'use strict';

/**
 * provinces-report service
 */

module.exports = {
    pagesReport: async () => {
      try {
        // fetching the data
        // we dont really need contentSections for this example.
        // its kept here, just for your reference
        const entries = await strapi.entityService.findMany('api::province.province', {
          fields: ['id', 'name', 'price', 'image', 'comments'],
          populate:{
            image: {
            }
 
            // contentSections:{
            //   populate: '*'
            // }
          }

        });

        // reducing the data to a simple array
        let entriesReduced;
        if (entries && Array.isArray(entries)) {
          entriesReduced = entries.reduce((acc, item) => {
            acc = acc || [];
            console.log(acc);
            acc.push({
              id: item.id,
              name: item.name || '',
              price: item.price || '',
              image: item.price || '', 
              comments: item.comments || ''
              // image: 'http://10.0.2.2:1337' + item.image.formats.thumbnail.url || '',

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
