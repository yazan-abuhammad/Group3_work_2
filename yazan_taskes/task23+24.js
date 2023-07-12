let count = 0;

function counter() {
  count++;
  return count;
}

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 


function resetCounter() {
  const currentCount = counter();
  const previousCount = currentCount() - 1;
  return `${previousCount} and the counter reset now`;
}




console.log(counter());
console.log(counter());  
console.log(counter()); 
console.log(resetCounter());  
console.log(increment());
console.log(increment()); 
console.log(resetCounter()); 
console.log(increment()); 







