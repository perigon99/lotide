var assertArrayEqual = require('./lotide')
// var eqArrays = require('./lotide')
const countLetters = (strinInput) => {
  const result = {};
  
  for (let letter of strinInput){
 
    if (result[letter] !== undefined) {
      result[letter] += 1
    } else {
       result[letter] = 1
    }      
  }
  return result
}



// const eqArrays = (firstArray, secondArray) => {
//   console.log(secondArray)
//   //Filtering of array on unevent length
//     if (firstArray.length != secondArray.length){
//       return false
//     }
//     for (let i = 0; i < firstArray.length ; i++) {
//       if (firstArray[i] !== secondArray[i]) {
//         return false
//       } else {
//         return true
//       }
//     } 
//   }
 
// const assertArrayEqual = (condition) => {
//   condition === true ? console.log('PASS') : console.log('FAIL');
// }





const letterPositions = (sentence) => {
  const result = {};
  for (let i = 0; i < sentence.length; i ++){
    if (result[sentence[i]] === undefined) {
      result[sentence[i]] = []
    }
    result[sentence[i]].push(i) 
  } 
  return result;
};


console.log(letterPositions('llllligthouse'))
assertArrayEqual.eqArrays(letterPositions("hello").e, [1]);


