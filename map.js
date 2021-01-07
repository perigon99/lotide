var _ = require('./lotide');

const map = (array, callback) => {
  result = []
  for (let item of array) {
    result.push(callback(item))
  }
  return result;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const compare = _.eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ])
_.assertArrayEqual(compare)
