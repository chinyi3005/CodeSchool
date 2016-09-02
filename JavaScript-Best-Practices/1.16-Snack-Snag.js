// Javacript Best Practices Level 1 Section 3
// 1.16 Snack Snag
// http://campus.codeschool.com/courses/javascript-best-practices/level/1/section/3/snack-snag

var strength = true;
var fear = false;
var pack = {
  food: [ 'carrot',
          'mystery meat',
          'apple',
          'crust of bread',
          'spicy dried sausage',
          'carrot',
          'wedge of sharp cheese',
          'jug of milk',
          'mystery meat',
          'carrot'
  ],
  addFood: function(foodItem) {
    this.food = this.food || [];
    this.food.push(foodItem);
  },
  enoughFood: function(amount) {
    return(this.food.length >= amount);
  }
};

var surviveThisTrial = strength && !fear && pack.enoughFood(10);

console.log(surviveThisTrial);