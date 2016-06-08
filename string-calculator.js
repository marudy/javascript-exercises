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
