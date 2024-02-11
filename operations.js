// Checking balance
function checkBalance(user) {
    console.log(`\n## Your current balance is ${user.balance} ##`);
}

// Depositing money
function deposit(user, amount) {
    user.balance += amount;

    const date = new Date();
    user.transactions.push({
        "type": "deposit",
        "amount": amount,
        "date": `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    });
    console.log(`Success! Your deposit of ${amount} has been added to your balance.`);
}

// Withdrawing money
function withdraw(user, amount) {
    if (user.balance - amount >= 0) {
        user.balance -= amount;

        const date = new Date();
        user.transactions.push({
            "type": "withdraw",
            "amount": amount,
            "date": `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
        });
        console.log(`Done! You've successfully withdrawn ${amount}.`);
    } else {
        console.log("Oops! Not enough money.");
    }
}

// Viewing trasction history
function viewTransactions(user) {
    console.log('\n## Transactions ##');
    if (user.transactions) {
        user.transactions.forEach((transaction, index) => {
            console.log(`Transaction #${index + 1}: type = ${transaction.type}, amount = ${transaction.amount}, date = ${transaction.date}`);
        });
    } else {
        console.log('No history to show.')
    }
}

// Export functions for use in other modules
module.exports = { checkBalance, deposit, withdraw, viewTransactions }