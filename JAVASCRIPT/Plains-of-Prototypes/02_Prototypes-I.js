// JavaScript Road Trip Part 3 Level 5 Challenge 2
// Prototypes I
// http://javascript-roadtrip-part3.codeschool.com/levels/5/challenges/2

Array.prototype.countCattle = function(kind) {
	var numKind = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].type == kind) {
    	numKind++;
    }
  }
  return numKind;
};