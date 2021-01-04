const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`✅✅✅ Assersion Passed: [${actual}] === [${expected}]`);
  } else {
    return console.log(`🛑🛑🛑 Assersion Failed: [${actual}] === [${expected}]`);;
  }
};

const head = (input) => {
  return input[0];
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");