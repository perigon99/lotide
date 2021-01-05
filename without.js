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


const without = (list, elementToFilterOut) => {
  let result = [];
  for (let element in list) {
    if (!elementToFilterOut.includes(list[element])) {
      result.push(list[element])
    }
  }return console.log(result)
}
 


without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]