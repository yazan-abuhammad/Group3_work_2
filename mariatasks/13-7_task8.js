function middleOfArray(array) {
    // Get the length of the array
    let length = array.length;
  
    // Check if the length is even
    if (length % 2 === 0) {
      let middleIndex = length / 2;
      return [array[middleIndex - 1], array[middleIndex]];
    } else {
      let middleIndex = Math.floor(length / 2);
      return array[middleIndex];
    }
  }
 console.log(middleOfArray([1 , 2 ,3 ,5, 9]));