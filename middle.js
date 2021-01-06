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

const middle = (input) => {
  let center = []
  if(input.length %2 === 0 && input.length > 3){
    let centerIndex = input.length;
    centerIndex = (centerIndex / 2);
    center.push(input[centerIndex -1]);
    center.push(input[centerIndex]);
    return center;
  }
  if (input.length % 2 !== 0){
    let centerIndex = input.length;
    centerIndex = (centerIndex / 2) - 0.5;
    
    center.push(input[centerIndex]);
     return center;
  } else {
     return center;
  }
};

assertArrayEqual(eqArrays(middle([1, 2, 3]), [2])) // => [2]
assertArrayEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3])) 
assertArrayEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3])) 
assertArrayEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4])) 
assertArrayEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4])) 
