/*
Problem Statement:
In a family tree, each person has two children. The first child is assigned gender based on specific rules:
- If parent is Male: Left child is Male, Right child is Female
- If parent is Female: Left child is Female, Right child is Male
Given the level n and position k, determine the gender of the person.
*/

function getGender(n, k) {
  if (n == 1 || k == 1) {
    return "Male";
  }

  const parentK = k + 1 / 2;
  const parentGender = getGender(n - 1, parentK);

  const isLeft = k % 2 === 1;

  return parentGender === "Male"
    ? isLeft
      ? "Male"
      : "Female"
    : isLeft
    ? "Female"
    : "Male";
}

console.log(getGender(3, 4));

/*
Approach:
1. Base Cases:
   - For n=1 or k=1, return "Male" (root is always male)

2. Recursive Steps:
   - Find parent's position using k/2 (rounded up)
   - Get parent's gender recursively
   - Determine if current position is left or right child
   - Apply gender rules based on parent's gender

3. Time Complexity: O(n)
   Space Complexity: O(n) for recursion stack
*/
//https://www.naukri.com/code360/problems/family-structure_981243?utm_source=youtube&utm_medium=affiliate&utm_campaign=parikh_youtube&leftPanelTabValue=PROBLEM
