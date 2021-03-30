#!/usr/bin/env node
const program = require('commander');
const { addCustomer, findCustomer, updateCustomer, removeCustomer, listCustomers } = require("./index");
const { prompt } = require("inquirer");
const { find } = require('./models/customer');

//Customer questions

const questions = [
    {
        type: "input",
        name: "firstname",
        message: "Customer first name"
    },
    {
        type: "input",
        name: "lastname",
        message: "Customer last name"
    },
    {
        type: "input",
        name: "phone",
        message: "Customer phone number"
    },
    {
        type: "input",
        name: "email",
        message: "Customer email address"
    },
]

program
    .version("1.0.0")
    .description("Client Management System");
// program
//     .command("add <firstname> <lastname> <phone> <email>")
//     .alias("a")
//     .description("Add a customer")
//     .action((firstname, lastname, phone, email) => {
//         addCustomer({ firstname, lastname, phone, email });

//     });
//add
program
    .command("add")
    .alias("a")
    .description("Add a customer")
    .action(() => {
        prompt(questions).then(answers => addCustomer(answers));
    })
//find
program
    .command("find <_name>")
    .alias("f")
    .description("find a customer")
    .action(answers => findCustomer(answers));
    
//update
program
    .command('update <_id>')
    .alias('u')
    .description('Update a customer')
    .action(_id => {
        prompt(questions).then(answers => updateCustomer(_id, answers));
    });
//remove
program
    .command("remove <_id>")
    .alias("r")
    .description("Remove a customer")
    .action(answers => removeCustomer(answers));
//list]]
program
    .command("list")
    .alias("l")
    .description("List a customer")
    .action(() => listCustomers());
program.parse(process.argv);