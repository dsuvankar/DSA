/*
Problem Statement:
Calculate the total price of all books in an array of book objects.
Each book object contains a title and price property.
*/

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

/*
Approach:
1. Initialize a total variable to 0
2. Iterate through each book object using forEach
3. Add each book's price to the total
4. Return the final sum

Time Complexity: O(n)
Space Complexity: O(1)
*/
