'use strict';

/**
 * webinar service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::webinar.webinar');
