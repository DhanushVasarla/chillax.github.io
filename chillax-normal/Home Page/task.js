function isPositive(number) {
    return number > 0;
  }
  
  function isNegative(number) {
    return number < 0;
  }
  
  function isZero(number) {
    return number === 0;
  }
  
  let number = 10;
  
  if (isPositive(number)) {
    console.log("The number is positive.");
  } else if (isNegative(number)) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
  