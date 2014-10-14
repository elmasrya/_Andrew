console.log("Andrew El-Masry");
console.log(" "/*space*/);

/*This is the _.object function
The input type are arrays. The _.object takes arrays, and turns them into objects.


*/

var ironYard = ["Tim","Wendy","Richard", "Chelsea", "Emory", "Victoria", "John", "Joanna","Max"];
var age = ["30yrs", "25yrs", "24yrs", "23yrs", "22yrs", "31yrs", "29yrs", "35yrs", "27yrs"];
var wendy=[];

 wendy.object = function( ironYard, age) {
    if (ironYard == null) return {};
    var result = {};

    for (var i = 0, length = ironYard.length; i < length; i++) {
      if (age) {

        result[ironYard[i]] = age[i];
      }

/*This else statement declares that if age is null, zero or falsey, then it will return the first */

      else {
        result[ironYard[i][0]] = ironYard[i][1];
      }
    }
    return result;
  };

  var objectToArray= wendy.object(ironYard,age);

  console.log("This is parallel to the _.object method.");
  console.log("This method turns an array into an object");
  console.log(objectToArray);
  console.log(" "/*space*/);



/*.....................This is the _.first..........................*/

var n=5;

wendy.first = function(ironYard, n) {
    if (ironYard == null) return void 0;
    if (n == null) return ironYard[0];
    if (n < 0) return [];
    return Array.prototype.slice.call(ironYard,0, n);
  };
    console.log("This is parallel to the _.first method.");
    console.log("This method returns the first 'n' numbers in the array");
    console.log("In this case n=5, so it will return the first 5 strings");
    console.log(wendy.first(ironYard,n));
    console.log(" "/*space*/);

/*.....................This is the _.first..........................*/

var andrew = {}
var initailValue=0;
var endingValue=20;
var incriment=5;

andrew.range = function(initailValue, endingValue, incriment) {
    if (arguments.length <= 1) {
      endingValue = initailValue || 0;
      initailValue = 0;
    }
    incriment = incriment || 1;

    var length = Math.max(Math.ceil((endingValue - initailValue) / incriment), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, initailValue += incriment) {
      range[idx] = initailValue;
    }

    return range;
  };

console.log("This is parallel to the _.range method.");
console.log("In this case the range was from 0 to 20, incrimenting by 5");
console.log(andrew.range(initailValue,endingValue, incriment));
console.log(" "/*space*/);


/*.....................This is the _.size..........................*/

var intArray = [1,2,3,4,5];

andrew.size = function (arraySize) {
  return(arraySize.length);
};

var output=andrew.size(intArray);
console.log("This is parallel to the _.size method.");
console.log("This method returns the size of an array");
console.log(output);
