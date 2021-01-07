let _ = require('./lotide');

const takeUntil = function(array, callback) {
  result =[];
  for (let item of array) {    
    if (!callback(item)){
      result.push(item)    
    } else {
      return result
    }
  } 
  return result
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

let compare = _.eqArrays(results1, [ 1, 2, 5, 7, 2 ])
_.assertArrayEqual(compare)

compare = _.eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])
_.assertArrayEqual(compare)