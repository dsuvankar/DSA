/*
Problem Statement:
Given a staircase of n stairs, find all possible ways to climb the stairs if you can take 1, 2, or 3 steps at a time.
Print all possible paths to reach the top.
*/

function printStairPath(n, path) {
  if (n === 0) {
    console.log(path);
    return;
  }

  if (n < 0) {
    return;
  }

  printStairPath(n - 1, path + "1");
  printStairPath(n - 2, path + "2");
  printStairPath(n - 3, path + "3");
}

printStairPath(3, "");

/*
Approach:
1. Base Cases:
   - If n = 0, we've reached the destination, print the path
   - If n < 0, we've exceeded the stairs, return

2. Recursive Steps:
   - For each valid step (1, 2, or 3):
     * Make recursive call with (n - step)
     * Add the step to the current path

3. Time Complexity: O(3^n)
   Space Complexity: O(n) for recursion stack
*/
