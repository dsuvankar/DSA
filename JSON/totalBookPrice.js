function totalBookPrice(arr) {
  let total = 0;
  arr.forEach((item) => {
    total += item.price;
  });

  return total;
}

// Example usage:
const books1 = [
  { title: "Book 1", price: 10 },
  { title: "Book 2", price: 20 },
  { title: "Book 3", price: 30 },
];

const books2 = [
  { title: "Book A", price: 15 },
  { title: "Book B", price: 25 },
  { title: "Book C", price: 35 },
];

console.log(totalBookPrice(books1)); // Output: 60
console.log(totalBookPrice(books2)); // Output: 75
