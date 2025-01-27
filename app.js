// Log to console
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});

console.error('This is some error');
// console.clear();
console.warn('This is a warning');
console.time('Hello');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
console.timeEnd('Hello');
/*
  multi
  line
  comments
*/

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
  greeting = 'Good evening!';
} else if (hourNow > 12){
  greeting = 'Good afternoon!';
} else if (hourNow > 0){
  greeting = 'Good Morning!';
} else {
  greeting = 'Welcome';
}

document.write('<h3>' + greeting + '</h3>');