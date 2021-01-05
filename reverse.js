const tail = (input) => {
  let triming = [];
  for (let i = 2; input.length > i; i++) {
    triming.push(input[i]);
  } return triming;
};
// console.log(tail(process.argv))

const reverse = (input) => {  
  
  let result = []
  for (let i =0 ; i < input.length ; i ++){
    result.push(input[i])    
    
  }return console.log(result)
}
reverse(tail(process.argv))