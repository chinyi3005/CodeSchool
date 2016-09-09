// Javacript Best Practices Level 3 Section 1
// 3.7 Counting Birds
// http://campus.codeschool.com/courses/javascript-best-practices/level/3/section/1/counting-birds

function Bird(){}
function DatatypeBird(){}
function SyntaxBird(){}
DatatypeBird.prototype = Object.create(Bird.prototype);
SyntaxBird.prototype   = Object.create(Bird.prototype);

var TryCatchTaster = function(){},
    SwitchSnagger  = function(){},
    TernaryTracker = function(){};

TryCatchTaster.prototype = Object.create(SyntaxBird.prototype);
SwitchSnagger.prototype  = Object.create(SyntaxBird.prototype);
TernaryTracker.prototype = Object.create(SyntaxBird.prototype);

var NumberNommer = function(){};
NumberNommer.prototype = Object.create(DatatypeBird.prototype);

var aTryCatchTaster = new TryCatchTaster();
var aSwitchSnagger  = new SwitchSnagger();
var aTernaryTracker = new TernaryTracker();
var aNumberNommer   = new NumberNommer();

var duneInhabitants = [aNumberNommer, aTryCatchTaster, 
                       aSwitchSnagger, aTernaryTracker];

var count = 0;
for(var i = 0; i < duneInhabitants.length; i++) {
  if (duneInhabitants[i] instanceof SyntaxBird) {
    count++;
  }
}
