function sumItems(array) {
  // Sum all the numbers in the array
  let total = 0;
  for (let i = 0; i < array.length ; i++) {
    if(Array.isArray(array[i])){
      total += sumItems(array[i]);
    } else {
      total += array[i];
    }
  }
  return total;
}
module.exports = sumItems;