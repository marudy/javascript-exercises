/*
 * Choose from below the version you prefer to use!
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

// New version of add() function that utilizes array methodforEach()
function add(input) {
  var sum = 0;
  
  if (input.indexOf(',') > -1) {
  	var numbers = input.split(',');
   
   	numbers.forEach(function(currentValue, index, array) {
   	  sum += parseFloat(array[index])
   	});
    return sum;
  } else {
  	return input;
  }
}
