// JavaScript Road Trip Part 3 Level 4 Challenge 11
// Functions as Properties I
// http://javascript-roadtrip-part3.codeschool.com/levels/4/challenges/11

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},

	addRanger: function(name, skillz, station) {
		this.numRangers++;
		this["ranger" + this.numRangers] = {
			name: name,
			skillz: skillz,
			staion: station
		};
	}
};
