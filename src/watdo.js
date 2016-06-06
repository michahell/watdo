/* global */

'use strict';

var $ = require('jquery');
var jQuery = $; // eslint-disable-line
window.jQuery = $; // Assure it's available globally.

var bluebird = require('bluebird'); // eslint-disable-line

var generatorNameCodename = require('./generators/generator-name-codename.js'); // eslint-disable-line
var generatorNameFoswig = require('./generators/generator-name-foswig.js'); // eslint-disable-line
var generatorDescriptionUsthem = require('./generators/generator-description-usthem.js'); // eslint-disable-line
var generatorStackNames = require('./generators/generator-stack-names.js'); // eslint-disable-line

var watdo = {};

watdo.generate = function () {

  // return new Promise(function (resolve, reject) {
  //   generatorNameCodename.generate()
  //     .then(function (name) {
  //       resolve({
  //         // projectName: generatorNameCodename.generate(),
  //         projectName: generatorNameFoswig.generate(),
  //         projectDescription: generatorDescriptionUsthem.generate(),
  //         techStack: generatorStackNames.generate()
  //       })
  //     })
  //     .catch(reject)
  // })

  return {
    projectName: generatorNameFoswig.generate(),
    projectDescription: generatorDescriptionUsthem.generate() + '.',
    techStack: generatorStackNames.generate()
  };
};

module.exports = watdo;
