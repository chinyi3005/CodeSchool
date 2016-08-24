// JavaScript Road Trip Part 3 Level 4 Challenge 18
// Enumeration II
// http://javascript-roadtrip-part3.codeschool.com/levels/4/challenges/18


var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

function listGuns(guns) {
  for (var speargun in guns) {
  // modify the log message here
  console.log("Behold! " + speargun + "," + " with " + guns[speargun].heft + " heft!");
  }
}

listGuns(rockSpearguns);