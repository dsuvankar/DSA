function filterCondition(data) {
  return data.filter((employee) => employee.salary >= 50000);
}

const employees = [
  { name: "John", salary: 60000 },
  { name: "Jane", salary: 40000 },
];

console.log(filterCondition(employees));
