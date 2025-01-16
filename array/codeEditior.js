function processOperations(operations) {
  let text = "";

  for (const operation of operations) {
    const [operationType, position, character] = operation;

    if (operationType === "insert") {
      // Insert the character at the specified position
      if (position >= 0 && position <= text.length) {
        text = text.slice(0, position) + character + text.slice(position);
      }
    } else if (operationType === "delete") {
      // Delete the character at the specified position
      if (position >= 0 && position < text.length) {
        text = text.slice(0, position) + text.slice(position + 1);
      }
    }
    // Skip invalid operations (e.g., out-of-bounds positions)
  }

  return text;
}

// Example 1
const input1 = [
  ["insert", 0, "h"],
  ["insert", 1, "i"],
  ["delete", 0, "_"],
];
console.log(processOperations(input1)); // Output: "i"

// Example 2
const input2 = [
  ["insert", 0, "a"],
  ["delete", 5, "_"],
  ["insert", 1, "b"],
  ["delete", 1, "_"],
];
console.log(processOperations(input2)); // Output: "a"
