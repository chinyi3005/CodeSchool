// Javacript Best Practices Level 2 Section 1
// 2.4 Cache Is King
// http://campus.codeschool.com/courses/javascript-best-practices/level/2/section/1/cache-is-king

var bitersBog = {
    critters: ['Nipping Global Variable', 
               'Sneaky For-in', 
               'Bulging Blocking Script']
};

populationGetter(bitersBog); 

function populationGetter(location) {
  var list = '';
  var numCritters = location.critters.length;
  for (var i = 0; i < numCritters; i++) {
    list += location.critters[i];
  }
  return list.trim();
}