/*
Problem Statement:
Group an array of objects by a specified key and return an object
where each key contains an array of matching objects.
*/

function groupByKey(array, key) {
  return array.reduce((acc, obj) => {
    const groupKey = obj[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(obj);
    return acc;
  }, {});
}

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
];

console.log(groupByKey(students, "grade"));

/*
Approach:
1. Use reduce to iterate through array
2. Create object key if it doesn't exist
3. Push current object to appropriate group
4. Return grouped object

Time Complexity: O(n)
Space Complexity: O(n)
*/
