/*
Problem Statement:
Find the highest salary from an array of employee objects.

Example:
Input: [{name: "John", salary: 60000}, {name: "Jane", salary: 75000}]
Output: 75000
*/

function filterMax(arr) {
  return arr.reduce(
    (max, curr) => (curr.salary > max.salary ? curr.salary : max.salary),
    arr[0]
  );
}

const employees = [
  { name: "John", salary: 60000 },
  { name: "Jane", salary: 75000 },
  { name: "Bob", salary: 50000 },
  { name: "Alice", salary: 80000 },
];

console.log(filterMax(employees));

/*
Approach:
1. Use reduce to compare salaries
2. Keep track of maximum salary
3. Return highest salary found

Time Complexity: O(n)
Space Complexity: O(1)
*/
