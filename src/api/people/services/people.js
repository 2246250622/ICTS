'use strict';

/**
 * people service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::people.people');
