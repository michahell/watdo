/* global */

'use strict';

var $ = require('jquery');
var jQuery = $; // eslint-disable-line
window.jQuery = $; // Assure it's available globally.

var ideas = require('json!./sources-project-ideas.json');

var generator = {};

generator.ideas = ideas;
generator.currentThing = '';

generator.generate = function () {
  // Try to weight the banks evenly - one bank could be really short compared to two long ones, and it'd get undue attention with a straight split between banks
  // First, how many do we have in total
  var totalInBanks = 0;
  var tBL = [];
  var tBI = 0;
  var whichBank = 0;

  // Count them up, and note which bank has which highest integer
  $(generator.ideas).each(function (index, object) {
    totalInBanks = totalInBanks + object.length;
    tBL[tBI] = totalInBanks;
    tBI++;
  });

  // Choose a random number from the total

  var whichBankPreSelect = Math.floor(Math.random() * totalInBanks + 1);

  // Which bank contains that random number?

  // console.log(tBL)
  // console.log(whichBankPreSelect)

  $(tBL).each(function (index, object) {
    if (whichBankPreSelect <= object) {
      // console.log("IT'S BANK WITH " + object + ' IN, INDEX ' + index)
      whichBank = index;
      return false;
    }
  });

  var a = generator.ideas[whichBank];
  var output = [];
  var calculated = whichBank;
  var ret;

  for (var i in a) {
    ret = generator.one_of(a[i]);
    output.push(ret[0]);
    calculated = calculated + '_' + ret[1];
  }

  generator.currentThing = output.join(' ');
  return generator.currentThing;
};

generator.go = function () {
  $('#output').text(generator.generate());
  generator.avoidOrphan($('#output'));
};

generator.one_of = function (arr) {
  var which = Math.floor(Math.random() * arr.length);
  return [arr[which], which];
};

generator.avoidOrphan = function (el) {
  var str = $(el).html();

  var index = str.lastIndexOf(' ');
  if (index === -1) {
    return str;
  }
  $(el).html(str.substring(0, index) + '&nbsp;' + str.substring(index + 1));
};

module.exports = generator;
