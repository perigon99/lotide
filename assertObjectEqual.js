const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  //console.log(actual, expected)
  return true;
};







const assertObjectsEqual = (object1, object2) => {
 const inspect = require('util').inspect;
  const keyOfObject1 = Object.keys(object1)
  const keyOfObject2 = Object.keys(object2)
  keyOfObject1.sort();
  keyOfObject2.sort(); 
  if (keyOfObject1.length !== keyOfObject2.length){
    return console.log(`🛑🛑🛑 Assersion Failed: [${keyOfObject1}] !== [${keyOfObject2}]`); 
  } 
    for (let i =0; i < keyOfObject1.length; i++){
      // console.log("first for")
      if (keyOfObject1[i] === keyOfObject2[i]) {
        // console.log("second if")
        if (!eqArrays(object1[keyOfObject1[i]], object2[keyOfObject2[i]])){
          return console.log(`🛑🛑🛑 Assersion Failed: [${keyOfObject1}] === [${keyOfObject2}]`);
        }  
      } 
    } 
    return console.log(`✅✅✅ Assersion Passed: [${inspect(object1)}] === [${inspect(object2)}]`);
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

// ✅✅✅ Assertion Passed: [object Object] === [object Object]
// 🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]