const mongoose = require("mongoose");
const customer = require("./models/customer");
const Customer = require("./models/customer");

//connect to db

const db = mongoose.connect("mongodb://localhost/customer-service-cli", { useNewUrlParser: true, useUnifiedTopology: true });

//Add customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info("New Customer Added");
    });
}

//Find customer
const findCustomer = (name) => {
    // Make case insensitive
    const search = new RegExp(name, 'i');
    Customer.find({ $or: [{ firstname: search }, { lastname: search }] })
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} matches`);
        });
}
//update
const updateCustomer = (_id, customer) => {
    Customer.updateOne({ _id }, customer)
        .then(customer => {
        console.info("Customer Updated")
    })
}
//remove
const removeCustomer = (_id) => {
    Customer.deleteOne({ _id })
        .then(customer => {
            console.info("Customer Removed")
        })
}
//list all
const listCustomers = () => {
    customer.find()
        .then(customers => {
            console.info(customers)
            console.info(`${customers.length} customers`)
        });
}
//Export all methods
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
}