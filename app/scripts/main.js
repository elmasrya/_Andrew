

/*.....................This is the _.object..........................*/
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


      else {
        result[ironYard[i][0]] = ironYard[i][3];
      }
    }
    return result;
  };

  var objectToArray= wendy.object(ironYard,age);

  console.log(objectToArray);



/*.....................This is the _.first..........................*/

var n=5;

wendy.first = function(ironYard, n) {
    if (ironYard == null) return void 0;
    if (n == null) return ironYard[0];
    if (n < 0) return [];
    return Array.prototype.slice.call(ironYard,0, n);
  };

  console.log(wendy.first(ironYard,n));
