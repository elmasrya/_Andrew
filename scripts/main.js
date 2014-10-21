(function() {

	// Setup my Main Object
	var root = this;
	var tim = {};

	// Set `tim` as global
	root.tim = tim;
  



	// Function will return a new array
	// Take two parameters
	tim.map = function (arr, funct) {
		if ( Array.isArray(arr) ) {
			if (arr.length > 0) {
				var res = [], i;
				for (i = 0; i < arr.length; i++){
					res[i] = funct(arr[i]);
				}
				return res;
			}
			return [];
		} else {
			return console.log('This is not an array');
		}
	};

	// Get Current Time
	// From Underscorejs.org
	tim.now = function (arr) {
		return new Date().getTime();
	};

	// Greeting Function
	tim.greeting = function (message) {

		// Check for Time of Day
		var time = new Date(),
				initial_greeting = '',
				time_hours = time.getHours(),
				final_greeting;

		if (time_hours < 12) {
			initial_greeting = 'Good Morning';
		} else if (time_hours >= 12 && time_hours <= 17) {
			initial_greeting = 'Good Afternoon';
		} else if (time_hours > 17 && time_hours <= 24) {
			initial_greeting = 'Good Evening';
		}

		final_greeting = (message != null) ? initial_greeting + ', ' + message : initial_greeting;

		return final_greeting;
	};

	// Random Function
	// From Underscorejs.org
	tim.random = function (min, max) {
			if (max == null) {
				max = min;
				min = 0;
			}
	    return min + Math.floor(Math.random() * (max - min + 1));
	};

}());

var test1=["1","2","3","4"];
var test2=["5","6","7","8"];

(function() {

var root = this;
var andrew=[];
root.andrew = andrew;


 andrew.object = function( arr, contentOfList) {
    if (arr== null) {
      return {};
    };

    var result = {};

    for (var i = 0, length = arr.length; i < length; i++) {
      if (contentOfList) {

        result[arr[i]] = contentOfList[i];
      }


      else {
        result[arr[i][0]] = contentOfList[i][1];
      }
    }
    return result;
  };



andrew.first = function(arr, num) {
    var firstValue =arr[0];

    if (arr == null){
      return "This is not an array! Or the array is emply";
      }

    if (num === null,0){
      return "Must be a number greater than 0";
      }

    if (num < 0){
      return "Must be a number greater than 0";
      }

      return Array.prototype.slice.call(arr,0, num);
  };


andrew.last = function(arr, num) {

    if (arr == null){
      return "This is not an array! Or the array is emply";
      }

    if (num === null,0){
      return "Must be a number greater than 0";
      }

    if (num < 0){
      return "Must be a number greater than 0";
      }

      return Array.prototype.slice.call(arr, Math.max(arr.length - num, 0));
  };

andrew.addTim = function(arr) {

   var result =[];
   for (var i = 0, length = arr.length; i < length; i++) {
      result=arr + " " +"Tim is awesome";
      return result;
      }
      };

}());
