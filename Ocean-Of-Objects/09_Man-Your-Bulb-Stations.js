// JavaScript Road Trip Part 3 Level 4 Challenge 9
// Man your Bulb Stations!
// http://javascript-roadtrip-part3.codeschool.com/levels/4/challenges/9

// I try to use 2 different way to challenge myself.

// ********** Solution 1 ********** //
// concatenate the values straight to the list  //
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  // loop through the rangers and append to list
  // the result will like this
  // list = list + name + ", man the" + superblinder

  for (var i = 1; i <= location.numRangers; i++) {
    list += location["ranger" + i].name + ", man the " + location.weaponBulbs[location["ranger" + i].station - 1][0] + "!\n";
  }

  alert(list);
}

dontPanic(lighthouseRock);


// ********** Solution 2 ********** //
// with extra variables //
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  // loop through the rangers and append to list
  // the result will like this
  // list = list + name + ", man the" + superblinder

  for (var i = 1; i <= location.numRangers; i++) {
    var ranger = location["ranger" + i];
    var name = ranger.name;
    var superblinder = location.weaponBulbs[ranger.station - 1][0];
    list += name + ", man the " + superblinder + "!\n";
  }

  alert(list);
}

dontPanic(lighthouseRock);
