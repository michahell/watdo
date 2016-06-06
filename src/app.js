var $ = require('jquery');
var jQuery = $; // eslint-disable-line
window.jQuery = $; // Assure it's available globally.

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
  $('#projectTechStack #frontendFramework')
    .html(techstack.frontendFramework.name)
    .attr('href', techstack.frontendFramework.url)
    .addClass(techstack.frontendFramework.color)
    .transition('fade in down');

  $('#projectTechStack #styleFramework')
    .html(techstack.styleFramework.name)
    .attr('href', techstack.styleFramework.url)
    .addClass(techstack.styleFramework.color)
    .transition('fade in down');

  $('#projectTechStack #moduleBundler')
    .html(techstack.moduleBundler.name)
    .attr('href', techstack.moduleBundler.url)
    .addClass(techstack.moduleBundler.color)
    .transition('fade in down');

  $('#projectTechStack #server')
    .html(techstack.server.name)
    .attr('href', techstack.server.url)
    .addClass(techstack.server.color)
    .transition('fade in down');

  $('#projectTechStack #database')
    .html(techstack.database.name)
    .attr('href', techstack.database.url)
    .addClass(techstack.database.color)
    .transition('fade in down');
};

$(document).ready(function () {
  // generate project on click
  $('#projectGenerator').click(function (event) {
    app.generateEverything();
  });

  // generate something on page load
  app.generateEverything();
});
