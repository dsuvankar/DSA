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
