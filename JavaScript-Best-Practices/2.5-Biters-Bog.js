// Javacript Best Practices Level 2 Section 1
// 2.5 Biters Bog
// http://campus.codeschool.com/courses/javascript-best-practices/level/2/section/1/biters-bog

var bitersBog = {
  critters: ['Nipping Global Variable', 
             'Sneaky For-in', 
             'Bulging Blocking Script']
};

populationGetter(bitersBog); 

function populationGetter(location) {
  var list = '';
  
  for (var i = 0, numCritters = location.critters.length; i < numCritters; i++) {
    list += location.critters[i];
  }
  return list.trim();
}