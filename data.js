// Order
const orders = [
  { item: 'almonds', price: 12, quantity: 2 },
  { item: 'pecans', price: 20, quantity: 1 },
  { item: 'pecans', price: 20, quantity: 3 },
];

// Inventory
const inventories = [
  {  sku: 'almonds', description: 'product 1', instock: 120 },
  {  sku: 'bread', description: 'product 2', instock: 80 },
  {  sku: 'cashews', description: 'product 3', instock: 60 },
  {  sku: 'pecans', description: 'product 4', instock: 70 },
];

const users = [
  // Users
  { username: 'admin', password: 'MindX@2022' },
  { username: 'alice', password: 'MindX@2022' },
];

module.exports = { orders, inventories, users };
