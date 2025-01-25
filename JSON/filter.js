/*
Problem Statement:
Filter an array of employee objects to get employees with salary >= 50000.
*/

function filterCondition(data) {
  return data.filter((employee) => employee.salary >= 50000);
}

const employees = [
  { name: "John", salary: 60000 },
  { name: "Jane", salary: 40000 },
];

console.log(filterCondition(employees));

/*
Approach:
1. Use filter method on array
2. Check each employee's salary against threshold
3. Return filtered array

Time Complexity: O(n)
Space Complexity: O(n)
*/
