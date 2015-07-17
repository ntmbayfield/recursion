// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:

//Preface:
//getElementsByClassName returns an array of objects containing
//all HTML elements which match the specified className.

//----------------

var getElementsByClassName = function(className) {
  var outputArray = [];
  var recurse = function(element) {

  	//Assigns a variable to the <u>child/children</u> of recurse function's (element) argument
  	var childrenOfElement = element.children;

  	//for-loop iterates over childrenOfElement
  	for (var i = 0; i < childrenOfElement.length; i++) {

  		//IF childrenOfElement's iteratees's class matches getElementsByClassName function's (className) argument,
  		//push iteratee into outputArray
  		if (childrenOfElement[i].classList.contains(className)) {
  			outputArray.push(childrenOfElement[i]);
  		}

  		//IF childrenOfElement <u>has</u> any children,
  		//apply recurse function to its children
  		if (childrenOfElement[i].children.length > 0) {
  			recurse(childrenOfElement[i]);
  		}
  	};
  };

  //Apply recurse function to the whole document
	recurse(document);

	//outputArray is now populated with all elements which match the specified className
	return outputArray;
};