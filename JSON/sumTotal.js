/*
Problem Statement:
Calculate the total revenue from an array of order objects.
Each order object contains an id and revenue property.

*/

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

/*
Approach:
1. Use reduce to iterate through the array
2. Check if revenue property is a number
3. Add valid revenue values to accumulator
4. Return final sum

Time Complexity: O(n)
Space Complexity: O(1)
*/
