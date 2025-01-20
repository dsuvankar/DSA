function generateString(N, current = "", result = []) {
  if (!Number.isInteger(N) || N <= 0) {
    return [];
  }
  if (current.length === N) {
    result.push(current);
    return;
  }
  generateString(N, current + "0", result);

  if (current[current.length - 1] !== "1") {
    generateString(N, current + "1", result);
  }

  return result;
}

console.log(generateString(1));
