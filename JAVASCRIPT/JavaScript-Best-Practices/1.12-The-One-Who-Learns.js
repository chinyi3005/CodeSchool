// Javacript Best Practices Level 1 Section 2
// 1.12 The One Who Learns
// http://campus.codeschool.com/courses/javascript-best-practices/level/1/section/2/the-one-who-learns


var pocketStuff = ['Dragon Tooth', 'Adventure Diary', 'Silver Tiger Coin'];
var cluesToThePast = pocketStuff || [];
getMyIdentity(cluesToThePast);

function getMyIdentity(memories) {
  var identity = (memories.indexOf('Adventure Diary') >= 0) ? 'The One Who Learns' : undefined;
  return identity || 'unknown';
}