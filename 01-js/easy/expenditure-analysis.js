/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryWiseTotal = transactions.reduce((acc,
    { category, price }) => {

    if (!acc[category])
      acc[category] = 0;

    acc[category] += price;
    return acc;
  }, {});

  return Object.entries(categoryWiseTotal).map(([category, totalSpent]) => ({
    category
    , totalSpent
  }))
}

// Example usage
const transaction = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656163200000, price: 20, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656249600000, price: 15, category: 'Entertainment', itemName: 'Movie Ticket' },
  { id: 4, timestamp: 1656336000000, price: 25, category: 'Food', itemName: 'Pasta' },
  { id: 5, timestamp: 1656422400000, price: 30, category: 'Entertainment', itemName: 'Concert Ticket' }
];

console.log(calculateTotalSpentByCategory(transaction));

module.exports = calculateTotalSpentByCategory;
