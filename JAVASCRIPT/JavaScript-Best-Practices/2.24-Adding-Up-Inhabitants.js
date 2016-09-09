// Javacript Best Practices Level 2 Section 4
// 2.24 Adding Up Inhabitants
// http://campus.codeschool.com/courses/javascript-best-practices/level/2/section/4/adding-up-inhabitants

Array.prototype.killTheInsolent = function(){};
Array.prototype.countPopulace = function(){};
Array.prototype.countUndeadPopulace = function(){};
Array.prototype.insecticide = function(){};
Array.prototype.shadowProvider = function(){};

var invertedPeninsula = {
  inhabitants: ['Nipping Global Variable', 'Sneaky For-in', 'Bulging Blocking Script']
};

function populationGetter(){
  var population = invertedPeninsula.inhabitants;
  var list = "";
  console.time('Total completion time');

  for(var i = 0, ff = population.length; i < ff; i++){
    list += (population[i] + " ");
  }

  console.timeEnd('Total completion time');
  return list.trim();
}

populationGetter();