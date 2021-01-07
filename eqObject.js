// const eqArrays = (firstArray, secondArray) => {
// // console.log(firstArray, secondArray);
//   //Filtering of array on unevent length
// let check = true
//     if (firstArray.length != secondArray.length){
//       return false;
//     }
//     for (let i = 0; i < firstArray.length ; i++) {
//       if (firstArray[i] !== secondArray[i]) {
//         // console.log("true: ", firstArray[i], secondArray[i])
//         check = false;
//       } 
//     } 
//     if (check === false) {
//       return false;
//     } else {
//       return true
//     }
// }

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  console.log(actual, expected)
  return true;
};

const eqObjects = (object1, object2) => {
  // console.log("Function called")
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
    return console.log(`✅✅✅ Assersion Passed: [${keyOfObject1}] === [${keyOfObject2}]`);
}

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true


const cd = { c: "1", d: ["2", 3, 4] };
const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
const dc = { d: ["2", 3, 4], c: "1" };
eqObjects(cd, dc); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
// console.log(eqArrays(ab, ba))

