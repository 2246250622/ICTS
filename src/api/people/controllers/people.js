'use strict';

/**
 *  people controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::people.people');
