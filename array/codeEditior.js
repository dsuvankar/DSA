/**
 * Text Editor Operations
 *
 * Question:
 * Implement a text editor that processes a series of operations:
 * 1. Insert operation: Insert a character at a specified position
 * 2. Delete operation: Delete a character at a specified position
 *
 * Each operation is represented as [operationType, position, character]
 * - operationType: "insert" or "delete"
 * - position: index where to perform the operation
 * - character: the character to insert (for insert operations)
 *
 * Return the final text after processing all operations.
 */

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

/**
 * Approach:
 * 1. Initialize an empty string to store the text
 * 2. Process each operation sequentially:
 *    - For insert: Use string slicing to add character at position
 *    - For delete: Use string slicing to remove character at position
 * 3. Handle edge cases:
 *    - Invalid positions (negative or beyond text length)
 *    - Empty text
 *
 * Time Complexity: O(n * m), where:
 * - n is the number of operations
 * - m is the current length of text (for string slicing)
 *
 * Space Complexity: O(m), where m is the final length of the text
 */
