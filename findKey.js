let _ = require('./lotide');


const findKey = (object, callback) => {
  const keys = Object.keys(object)
  for (let element of keys) {
    
    if (callback(object[element])) {
      return element
    }
  }
}


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
const result = findKey({   "Blue Hill":  1 ,   "Akaleri":   3 ,    }, x => x === 3);
console.log(result)
// let compare = _.eqArrays(results1, [ 1, 2, 5, 7, 2 ])
// _.assertArrayEqual(compare)

// compare = _.eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])
// _.assertArrayEqual(compare)