/* global */

'use strict';

var $ = require('jquery');
var jQuery = $; // eslint-disable-line
window.jQuery = $; // Assure it's available globally.

var Foswig = require('foswig');
var githubProjectNames = require('json!./sources-foswig-github.json');

var generator = {};

generator.config = {
  projectName: {
    minLength: 5,
    maxLength: 10,
    useExisting: false
  }
};

generator.chain = new Foswig(3);

generator.generate = function () {
  // load the words into the markov chain
  generator.chain.addWordsToChain(githubProjectNames.words);

  // generate a new project name
  var projectName = generator.chain.generateWord(
    generator.config.projectName.minLength,
    generator.config.projectName.maxLength,
    generator.config.projectName.useExisting
  );

  return projectName;
};

module.exports = generator;
