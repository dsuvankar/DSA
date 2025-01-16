function firstMissingPositive(nums) {
  const numSet = new Set(nums.filter((num) => num > 0));
  let missing = 1;

  while (numSet.has(missing)) {
    missing++;
  }

  return missing;
}

const array = [3, 4, -1, 1];
const result = firstMissingPositive(array);
console.log(result); // Output: 2
