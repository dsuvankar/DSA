/*
Problem Statement:
Filter an array of student objects to get names of students who received grade 'A'.

*/

function getNameWithGrade(arr) {
  return arr
    .filter((student) => student.grade === "A")
    .map((student) => student.name);
}

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" },
  { name: "Eve", grade: "A" },
  { name: "Frank", grade: "B" },
  { name: "Grace", grade: "A" },
  { name: "Heidi", grade: "C" },
];

console.log(getNameWithGrade(students));

/*
Approach:
1. Use filter to get students with grade 'A'
2. Use map to extract only the names
3. Return array of names

Time Complexity: O(n)
Space Complexity: O(n)
*/
