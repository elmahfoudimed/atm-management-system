// Importing required modules
const readline = require('readline');

const { getUser } = require('./authentication');
const { eventEmitter } = require('./event_handling');
const { readFileAsync, writeFileAsync } = require('./fs_utils');

// Create the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Helper function
function askQuestion(question) {
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
        });
    });
}

// Show all possible options
function menu() {
    rl.setPrompt("\n1. Check balance\n2. Deposit\n3. Withdraw\n4. View transactions\n5. Sign out\n\nYour choice: ");
    rl.prompt();
}

// Our data
const filename = './data/users.json';

// Entry point
(async function main() {
    try {
        const data = await readFileAsync(filename);
        const users = JSON.parse(data);

        let user;

        while (!user) {
            const accountID = await askQuestion('\nAccount ID: ');
            const pin = await askQuestion('PIN: ');

            user = getUser(users, accountID, pin);

            if (user) break;
            console.log(`\n## Invalid Account ID or PIN. Please check your details and try again ##`);
        }

        if (user) {
            menu();
            rl.on('line', async (input) => {
                switch (input) {
                    case '1':
                        eventEmitter.emit('checkBalance', user);
                        break;
                    case '2':
                        const deposit = await askQuestion('\nAmount: ');
                        eventEmitter.emit('deposit', ...[user, Number(deposit)]);
                        await writeFileAsync(filename, JSON.stringify(users));
                        break
                    case '3':
                        const withdraw = await askQuestion('\nAmount: ');
                        eventEmitter.emit('withdraw', ...[user, Number(withdraw)]);
                        await writeFileAsync(filename, JSON.stringify(users));
                        break;
                    case '4':
                        eventEmitter.emit('viewTransactions', user);
                        break;
                    case '5':
                        rl.close();
                        process.exit();
                    default:
                        break;
                }
                menu();
            });
        }
    } catch (error) {
        console.log(`ERROR: ${error.message}`);
        rl.close();
    }
})();