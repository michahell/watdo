/* global */

'use strict';

var $ = require('jquery');
var jQuery = $; // eslint-disable-line
window.jQuery = $; // Assure it's available globally.

var generator = {};

generator.config = {
  url: 'http://www.codenamegenerator.com/'
};

generator.generate = function () {
  return new Promise(function (resolve, reject) {
    $.get('https://crossorigin.me/' + generator.config.url, function (data) {
      // $('.result').html(data)
      console.log(data);
      resolve(data);
    });
  });
};

module.exports = generator;
