var $ = require('jquery');
var jQuery = $; // eslint-disable-line
window.jQuery = $; // Assure it's available globally.

// var semantic = require('semantic-ui')
// var semantic = require('./node_modules/semantic-ui/dist/components/semantic.js')

var Foswig = require('foswig');
var githubProjectNames = require('json!./javascript-dictionary.json');

var watdo = require('./watdo');

var config = {
  projectName: {
    minLength: 5,
    maxLength: 10,
    useExisting: false
  }
};

$(document).ready(function () {
  console.log('ready!');
  console.log('json: ', githubProjectNames);

  // foswig project name generator test

  // get the list of dictionary words
  // var data = JSON.parse(githubProjectNames)

  var chain = new Foswig(3);

  // load the words into the markov chain
  chain.addWordsToChain(githubProjectNames.words);

  // generate a new project name
  var projectName = chain.generateWord(
    config.projectName.minLength,
    config.projectName.maxLength,
    config.projectName.useExisting
  );

  console.log('suggested project name: ', projectName);

  $('#projectName').html(projectName);
});
