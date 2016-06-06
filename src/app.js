var $ = require('jquery');
var jQuery = $; // eslint-disable-line
window.jQuery = $; // Assure it's available globally.

var _ = require('lodash');

// var semantic = require('semantic-ui')
// var semantic = require('./node_modules/semantic-ui/dist/components/semantic.js')

var watdo = require('./watdo');

var app = {};

app.generateEverything = function () {
  var generatedShit = watdo.generate();
  // supply generated project name
  $('#projectName').html(generatedShit.projectName);
  // supply generated project description
  $('#projectDescription').html(generatedShit.projectDescription);

  var techstack = generatedShit.techStack;

  // supply generated project tech stack
  _.each(['frontendFramework', 'styleFramework', 'moduleBundler', 'server', 'database'], function (stackItem) {
    $('#projectTechStack #' + stackItem)
      .html(techstack[stackItem].name)
      .attr('href', techstack[stackItem].url)
      .attr('target', '_blank')
      .addClass(techstack[stackItem].color)
      .transition('fade in down');
  });
};

$(document).ready(function () {
  // generate project on click
  $('#projectGenerator').click(function (event) {
    app.generateEverything();
  });

  // generate something on page load
  app.generateEverything();
});
