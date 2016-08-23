// JavaScript Road Trip Part 3 Level 4 Challenge 17
// Enumeration I
// http://javascript-roadtrip-part3.codeschool.com/levels/4/challenges/17


var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

// build listGuns
function listGuns(guns) {
	for (var speargun in guns) {
		console.log(speargun);
	}
}
// call listGuns and pass in rockSpearguns
listGuns(rockSpearguns);