const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assersion Passed: [${actual}] === [${expected}]`);
  } else {
    return console.log(`🛑🛑🛑 Assersion Failed: [${actual}] === [${expected}]`);
  }
};

const tail = (input) => {
  let triming = [];
  for (let i = 1; input.length > i; i++) {
    triming.push(input[i]);
  } return triming;
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"