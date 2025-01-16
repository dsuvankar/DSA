function makeUniqueArray(nums) {
  let seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    while (seen.has(nums[i])) {
      nums[i]++;
    }

    seen.add(nums[i]);
  }

  return nums;
}

// Example usage
const array = [3, 1, 2, 2, 4, 4];
const result = makeUniqueArray(array);
console.log(result); // Output: [3, 1, 2, 5, 4, 6] (or similar unique numbers)
