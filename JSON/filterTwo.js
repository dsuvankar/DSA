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
