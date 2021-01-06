//Imported function
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

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assersion Passed: [${actual}] === [${expected}]`);
  } else {
    return console.log(`🛑🛑🛑 Assersion Failed: [${actual}] === [${expected}]`);;
  }
};

//current work
const countOnly = (allItems, itemsToCount) => {
  
  const result = {}
  // result.count = 0

  for (let item of allItems) {
    // if (item === itemsToCount[item]) {
    //   // result += 1
    //   // result.count ++
    // }
    if (itemsToCount[item]){
    if (result[item] !== undefined) {
      result[item] += 1
    } else {
      result[item] = 1
    }
  }
}
  console.log('result', result)
  return result;
}


//testing area
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const myObject = {
  "Jason": true, 
  "Karima": true, 
  "Fang": true, 
  "Agouhanna": false 
}
const result1 = countOnly(firstNames, myObject);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);