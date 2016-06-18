/*
 * Choose from below the version you prefer to use!
 *
 * USAGE TIP: If you want to supply as input argument an array, call the function using
 * the apply() method of any function object.
 * Invocation example: add.apply(null, [1, 2]);
 */

function add(input) {
  var sum = 0;

  if (input.indexOf(',') > -1) {
  	var numbers = input.split(',');

   	for (var i=0; i < numbers.length; i++) {
  		sum = sum + parseFloat(numbers[i]);
    }
    return sum;
  } else {
  	return input;
  }
}

// New version of add(input) function that utilizes array methodforEach()
function add(input) {
  var sum = 0;

  if (input.indexOf(',') > -1) {
  	var numbers = input.split(',');

   	numbers.forEach(function(currentValue, index, array) {
   	  sum += parseFloat(array[index]);
   	});
    return sum;
  } else {
  	return input;
  }
}
