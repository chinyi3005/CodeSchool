// JavaScript Road Trip Part 3 Level 5 Challenge 9
// Constructor I
// http://javascript-roadtrip-part3.codeschool.com/levels/5/challenges/9

function Fencepost (x, y, postNum) {
	this.x = x;
	this.y = y;
	this.postNum = postNum;
	this.connectionsTo = [];
	this.sendRopeTo = function(connectedPost) {
		this.connectionsTo.push(connectedPost);
	};
}