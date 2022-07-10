'use strict';

var moment = require('moment');

/**
 * Returns a div element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.navbar = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};