function sumValue(obj) {
  return obj.reduce((total, item) => {
    if (typeof item.revenue === "number") {
      return total + item.revenue;
    }
    return total;
  }, 0);
}

const orders = [
  { id: 1, revenue: 100 },
  { id: 2, revenue: 200 },
  { id: 3, revenue: 150 },
  { id: 4, revenue: 50 },
];

console.log(sumValue(orders));
