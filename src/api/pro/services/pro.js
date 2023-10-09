'use strict';

/**
 * pro service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pro.pro');
