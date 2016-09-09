// Javacript Best Practices Level 2 Section 3
// 2.15 Rampant Var
// http://campus.codeschool.com/courses/javascript-best-practices/level/2/section/3/rampant-var

var list = document.getElementById('population'),
inhabitants = ['Nipping Global Variable', 'Sneaky For-in', 'Bulging Blocking Script'],
fragment = document.createDocumentFragment();

for (var i = 0, x = inhabitants.length; i < x; i++) {
  var element = document.createElement('li');
  element.appendChild(document.createTextNode(inhabitants[i]));
  fragment.appendChild(element);
}

list.appendChild(fragment);