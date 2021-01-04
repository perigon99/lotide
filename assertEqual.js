const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log("✅✅✅ Assersion Passed: [" + actual + "] === [" + expected + "]");
  } else {
    return console.log("🛑🛑🛑 Assersion Failed: [" + actual + "] !== [" + expected + "]");
  }
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, -1);
