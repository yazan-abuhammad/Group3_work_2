function firstOfArray(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
      return arr[0];
    } else {
      return undefined; // Return undefined if the array is empty or not an array
    }
  }
console.log(firstOfArray([1, 4, 5])); // Output: 1
console.log(firstOfArray(["t", "u", "g", "x"])); // Output: "t"
  