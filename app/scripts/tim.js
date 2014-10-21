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
