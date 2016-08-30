// JavaScript Road Trip Part 3 Level 5 Challenge 13
// Overriding Prototypal Methods I
// http://javascript-roadtrip-part3.codeschool.com/levels/5/challenges/13

Fencepost.prototype.valueOf = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};