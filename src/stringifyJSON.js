// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't  so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	 var turnArgumentIntoString = function(input) {

	 	//case 1: 'null'
		if(input === null) {
		return 'null';
		}

		//case 2: 'string'
		else if (typeof input === 'string') {
		return "\"" + input + "\"";
		}

		//case 3: 'function', 'undefined'
		//These arguments are not appropriate arguments for stringifyJSON
		if (typeof input === 'function' || typeof input === undefined) {
		return undefined;
		}

		//case 4: 'number', 'boolean'
		//If either, native String() method will convert to string.
		else if (typeof input === 'number' || typeof input === 'boolean') {
		return String(input);
		}

		//case 5: 'Arrays'
		else if (Array.isArray(input)) {

			var outputFakeArray = '[';

			//for-loop passes through each of input's index
			//then puts each iteratee into outputFakeArray
			for (var i = 0; i < input.length; i++) {
				outputFakeArray += turnArgumentIntoString(input[i]);

				//adds a comma after passing an iteratee
				if (i < input.length - 1) {
					outputFakeArray += ',';
				};
			};
			outputFakeArray += ']';
			return outputFakeArray;
		}

		//case 6: Objects
		else if (typeof input === 'object' && !(Array.isArray(input))) {
			var outputFakeObject = '{';

			//Takes input object and returns an array with its properties
			var arrayify = Object.keys(input);

			//passes through each item in arrayified obj
			for (var i = 0; i < arrayify.length; i++) {

				//Again, these arguments are not appropriate for stringifyJSON
				if (input[arrayify[i]] === undefined || typeof input[arrayify[i]] === 'function') {
					continue;
				};

				// Concatinates input's properties, a ":", and key-values into outputFakeObject
				outputFakeObject += turnArgumentIntoString(arrayify[i]) + ':' + turnArgumentIntoString(input[arrayify[i]]);
				
				//adds a comma after passing an iteratee
				if (i < arrayify.length - 1) {
					outputFakeObject += ',';
				};
			};
			outputFakeObject += '}';
			return outputFakeObject;
		};
	};
	return turnArgumentIntoString(obj);
};
