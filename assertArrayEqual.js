const eqArrays = (firstArray, secondArray) => {

  //Filtering of array on unevent length
    if (firstArray.length != secondArray.length){
      return false
    }
    for (let i = 0; i < firstArray.length ; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false
      } else {
        return true
      }
    } 
  }
 
const assertArrayEqual = (condition) => {
  condition === true ? console.log('PASS') : console.log('FAIL');
}

assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3])) // => true
assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 1])) // => false

assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2"])) // => false
