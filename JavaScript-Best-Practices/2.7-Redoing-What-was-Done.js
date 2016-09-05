// Javacript Best Practices Level 2 Section 1
// 2.7 Redoing What was Done 
// http://campus.codeschool.com/courses/javascript-best-practices/level/2/section/1/redoing-what-was-done


// Create a new invertedPeninsula
var invertedPeninsula = new InvertedPeninsula();

// Log the name of each invertedPeninsula inhabitant
for (var i = 0, x = invertedPeninsula.inhabitants.length; i < x; i++) {
  console.log(invertedPeninsula.inhabitants[i].name);
}
