// Javacript Best Practices Level 3 Section 2
// 3.13 Syntax Woes
// http://campus.codeschool.com/courses/javascript-best-practices/level/3/section/2/syntax-woes

function Bird(){}
function DatatypeBird(){}
function SyntaxBird(){}
DatatypeBird.prototype = Object.create(Bird.prototype);
SyntaxBird.prototype   = Object.create(Bird.prototype);

var TryCatchTaster = function() {} ;
TryCatchTaster.prototype = Object.create(SyntaxBird.prototype);

var NumberNommer = function(){};
NumberNommer.prototype = Object.create(DatatypeBird.prototype);