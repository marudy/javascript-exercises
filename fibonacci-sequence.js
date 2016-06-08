function fibonacci(n) {
  var fibo_1 = 0;
  var fibo_2 = 1;
  
  var previous_fibo = fibo_1;
  var current_fibo = 1;
  var next_fibo;
  
  if (n === 0) {
  	return fibo_1;
  } else if (n === 1) {
  	return fibo_2;
  } else {
	  do {
        next_fibo =  previous_fibo + current_fibo;      
        previous_fibo = current_fibo; 
        current_fibo = next_fibo;
        
        n = n-1;
      } 
    	while (n>1);

    return next_fibo;
  }
}
