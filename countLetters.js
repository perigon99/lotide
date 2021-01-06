// import assertEqual from './lotide';

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


console.log(countLetters("abbaghfghfghfghfghfhgh"))