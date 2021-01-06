const raisinAlarm = (cookie) => {
//Check
let result = [];
let cointainRaisin = false
for( let i = 0; i < cookie.length; i++) {
  if (cookie[i] === "🍇") {    
      if (!cointainRaisin){
        result.push("Raisin Alert!")
        cointainRaisin = true;
        // return result
      // } else {
      //   result.push("All Good!")
       }     
  } 
} 
if (cointainRaisin === false){
    result.push("All Good!")
  }
return result
}


//must retrun All goo or Raisin alert 


console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));

