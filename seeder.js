const connectDB = require('./config/database');
const userModel = require('./models/userModel');
const orderModel = require('./models/orderModel');
const inventoryModel = require('./models/inventoryModel');
const { users, orders, inventories } = require('./data');


connectDB
const insertData = async () => {
    await userModel.insertMany(users)
    await orderModel.insertMany(orders);
    await inventoryModel.insertMany(inventories);
    console.log('Import success');
}; 

insertData() 
