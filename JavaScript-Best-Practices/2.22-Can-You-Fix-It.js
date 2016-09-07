// Javacript Best Practices Level 2 Section 4
// 2.22 Can You Fix It? 
// http://campus.codeschool.com/courses/javascript-best-practices/level/2/section/4/can-you-fix-it

var array = ['Inverted Peninsula', ',', 
  'Inverted Peninsula', ', ', 'I', '—', 
  'P', '...', 'hmmm', '.'];
var internalThoughts = '';

console.time('Test');

internalThoughts = array.join(' ');

console.time('innerTest');
console.log(internalThoughts);
console.timeEnd('innerTest');

console.timeEnd('Test');