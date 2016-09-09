// JavaScript Road Trip Part 3 Level 5 Challenge 4
// Prototypes III
// http://javascript-roadtrip-part3.codeschool.com/levels/5/challenges/4

Object.prototype.noCalvesYet = function() {
	if (this.type == "cow" && this.hadCalf == null) {
		return true;
	}
	else {
		return false;
	}
};

Array.prototype.countForBreeding = function() {
	var numToBreed = 0;
	for (var i = 0; i < this.length; i++) {
		if (this[i].noCalvesYet()) {
			numToBreed++;
		}
	}
	return numToBreed;
};