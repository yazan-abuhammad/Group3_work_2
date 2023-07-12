let count = 0;

function counter() {
  return ++count;
}

function resetCounter() {
  const previousCount = count;
  count = 0;
  return previousCount + " and the counter reset now";
}

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
console.log(resetCounter()); 
console.log(counter()); 
console.log(counter()); 
console.log(resetCounter()); 
console.log(counter()); 


