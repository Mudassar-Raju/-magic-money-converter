#! usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log("              " + chalk.bgBlue("<AI Currency Convertor>"));
const currency = {
    USD: 1, // Base Currency
    PKR: 277.5,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83,
    JPY: 151,
    TPY: 32,
    AED: 3.67,
    CNY: 7.23,
    AFN: 71.23
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "PKR", "EUR", "CBP", "INR", "JPY", "TPY", "AED", "CNY", "AFN"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "PKR", "EUR", "CBP", "INR", "JPY", "TPY", "AED", "CNY", "AFN"]
    },
    {
        name: "amount",
        message: "Enter Your Amount:",
        type: "number"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.red(fromAmount));
console.log(chalk.yellow(toAmount));
console.log(chalk.blue(amount));
console.log(chalk.green(convertedAmount.toFixed(1)));
