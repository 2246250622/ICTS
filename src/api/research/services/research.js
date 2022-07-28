'use strict';

/**
 * research service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::research.research');
