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
