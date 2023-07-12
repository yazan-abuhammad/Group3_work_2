
function calculateAmountConsumed(age, amountPerDay) {
    let remainingYears = 100 - age;
    let amountConsumed = remainingYears * 365 * amountPerDay;
  
    console.log(" You will need " + amountConsumed + " cups of tea to last you until the ripe old age of 100 ");
  }
  var x = Number(prompt('age'))
  var y = Number(prompt('amountPerDay'))
  calculateAmountConsumed(x,y);
   