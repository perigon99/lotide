const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assersion Passed: [${actual}] === [${expected}]`);
  } else {
    return console.log(`🛑🛑🛑 Assersion Failed: [${actual}] === [${expected}]`);;
  }
};

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


eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2"]) // => false
