'use strict';

/**
 * Products.js controller
 *
 * @description: A set of functions called "actions" for managing `Products`.
 */

module.exports = {

  /**
   * Retrieve products records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.products.search(ctx.query);
    } else {
      return strapi.services.products.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a products record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.products.fetch(ctx.params);
  },

  /**
   * Count products records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.products.count(ctx.query, populate);
  },

  /**
   * Create a/an products record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.products.add(ctx.request.body);
  },

  /**
   * Update a/an products record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.products.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an products record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.products.remove(ctx.params);
  }
};
