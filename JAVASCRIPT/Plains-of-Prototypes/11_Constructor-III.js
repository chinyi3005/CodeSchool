// JavaScript Road Trip Part 3 Level 5 Challenge 11
// Constructor III
// http://javascript-roadtrip-part3.codeschool.com/levels/5/challenges/11

function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}

Fencepost.prototype = {
  sendRopeTo: function(connectedPost) {
  this.connectionsTo.push(connectedPost);
  },
  removeRope: function(removeTo) {
  var temp = [];
  for (var i = 0; i < this.connectionsTo.length; i++) {
    if (this.connectionsTo[i].postNum != removeTo) {
      temp.push(this.connectionsTo[i]);
    }
  }
  this.connectionsTo = temp;
  },
  movePost: function(x, y) {
  this.x = x;
  this.y = y;
  }
};