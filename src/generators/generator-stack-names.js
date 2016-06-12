/* global */

'use strict';

var $ = require('jquery');
var jQuery = $; // eslint-disable-line
window.jQuery = $; // Assure it's available globally.

var _ = require('lodash');
var fp = require('lodash/fp');

var generator = {};
var techStackItems = {};

techStackItems.techStackTypeColors = [ // eslint-disable-line
  {
    type: 'moduleBundler',
    color: 'blue'
  },
  {
    type: 'styleFramework',
    color: 'green'
  },
  {
    type: 'frontendFramework',
    color: 'yellow'
  },
  {
    type: 'server',
    color: 'pink'
  },
  {
    type: 'database',
    color: 'violet'
  }
];

techStackItems.moduleBundler = [
  {
    name: 'ductape.io',
    type: 'moduleBundler',
    url: 'https://www.destroyallsoftware.com/images/talks/wat.preview.png'
  },
  {
    name: 'browserify',
    type: 'moduleBundler',
    url: 'http://browserify.org/'
  },
  {
    name: 'webPack',
    type: 'moduleBundler',
    url: 'https://webpack.github.io/'
  },
  {
    name: 'jspm.io',
    type: 'moduleBundler',
    url: 'http://jspm.io/'
  }
];

techStackItems.styleFramework = [
  {
    name: 'foundation',
    type: 'styleFramework',
    url: 'http://foundation.zurb.com/'
  },
  {
    name: 'bootstrap',
    type: 'styleFramework',
    url: 'http://getbootstrap.com/'
  },
  {
    name: 'skeleton',
    type: 'styleFramework',
    url: 'http://getskeleton.com/'
  }
];

techStackItems.frontendFramework = [
  {
    name: 'React',
    type: 'frontendFramework',
    url: 'https://facebook.github.io/react/'
  },
  {
    name: 'Angular',
    type: 'frontendFramework',
    url: 'https://angularjs.org/'
  },
  {
    name: 'Backbone',
    type: 'frontendFramework',
    url: 'http://backbonejs.org/'
  }
];

techStackItems.server = [
  {
    name: 'Node.js',
    type: 'server',
    url: 'https://nodejs.org/en/'
  },
  {
    name: 'PHP',
    type: 'server',
    url: 'http://php.net/'
  },
  {
    name: 'Python',
    type: 'server',
    url: 'https://www.python.org/'
  },
  {
    name: 'Scala',
    type: 'server',
    url: 'http://www.scala-lang.org/'
  },
  {
    name: 'GO',
    type: 'server',
    url: 'https://golang.org/'
  }
];

techStackItems.database = [
  {
    name: 'MongoDB',
    type: 'database',
    url: 'https://www.mongodb.com/'
  },
  {
    name: 'MySQL',
    type: 'database',
    url: 'https://www.mysql.com/'
  },
  {
    name: 'CouchDB',
    type: 'database',
    url: 'http://couchdb.apache.org/'
  },
  {
    name: 'Neo4J',
    type: 'database',
    url: 'http://neo4j.com/'
  }
];

generator.getRandomTechStack = function () {
  return {
    styleFramework: _.sample(techStackItems.styleFramework),
    frontendFramework: _.sample(techStackItems.frontendFramework),
    moduleBundler: _.sample(techStackItems.moduleBundler),
    server: _.sample(techStackItems.server),
    database: _.sample(techStackItems.database)
  };
};

generator.generate = function () {
  // generate random tech stack
  var pickedTechStack = generator.getRandomTechStack();

  // apply colors to tech stack items
  var coloredTechStack = _.map(pickedTechStack, function (stackItem) {
    var typeColorComboFound = _.find(techStackItems.techStackTypeColors, function (typeColorCombo) {
      return typeColorCombo.type === stackItem.type;
    });
    return _.assign(stackItem, {color: typeColorComboFound.color});
  });

  return pickedTechStack;
};

module.exports = generator;
