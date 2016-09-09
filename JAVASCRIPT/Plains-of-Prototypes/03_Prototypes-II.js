// JavaScript Road Trip Part 3 Level 5 Challenge 3
// Prototypes II
// http://javascript-roadtrip-part3.codeschool.com/levels/5/challenges/3

Array.prototype.countCattle = function(kind) {
  var numKind = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].type == kind) {
      numKind++;
    }
  }
  return numKind;
};

alert(canyonCows.countCattle("calf") + valleyCows.countCattle("bull") + forestCows.countCattle("cow"));