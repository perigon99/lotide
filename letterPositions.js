var assertArrayEqual = require('./lotide')
// var eqArrays = require('./lotide')


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


