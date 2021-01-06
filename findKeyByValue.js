var _ = require('./lotide');


const findKeyByValue = (object, value) => {
//It should scan the object and return the first key which contains the given value
let result = [];
for (let genre in object) {
  if (object[genre] === value){
    result.push(genre)
  }
}return result;
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

_.assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
_.assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);