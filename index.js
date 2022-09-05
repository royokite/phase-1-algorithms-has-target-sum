function hasTargetSum(array, target) {
  // Write your algorithm here
  // Check if two numbers in an array add up to some target number
  //add each element in the array to all the other elements
  // return true if a pair exists that adds up to the target value
  // return false otherwise
  for(let i = 0; i < array.length; i++) {
    for(let j = (i + 1); j < array.length; j++) {
      if(array[i] + array[j] === target) {
        return true;
      }
    }
  } return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n²)
*/

/* 
  Add your pseudocode here
  for loop for each element and the remaining to find a valid pair
  if a pair exists
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  loop through the array
  add each index value with all the rest until the sum matches the target
  return true if the pair exists
  return false otherwise
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
