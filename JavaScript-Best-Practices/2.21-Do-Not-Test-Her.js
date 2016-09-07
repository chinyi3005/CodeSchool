// Javacript Best Practices Level 2 Section 4
// 2.21 Do Not Test Her
// http://campus.codeschool.com/courses/javascript-best-practices/level/2/section/4/do-not-test-her

var array = ['Inverted Peninsula', ',', 'Inverted Peninsula', ', ', 'I', '—', 'P', '...', 'hmmm', '.'];
var internalThoughts = '';
console.time('Total completion time');
internalThoughts = array.join(' ');
console.log(internalThoughts);
console.timeEnd('Total completion time');