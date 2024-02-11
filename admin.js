// This file handles administrative operations

// Importing
const { addUser } = require('./authentication');
const { readFileAsync, writeFileAsync } = require('./fs_utils');

(async () => {
    try {
        // Data source
        const filename = './data/users.json';

        const data = await readFileAsync(filename);
        const users = JSON.parse(data);

        const name = 'Mohammed EL MAHFOUDI';
        const pin = '1234';

        // Add a new user
        addUser(users, name, pin);

        // Write new changes
        await writeFileAsync(filename, JSON.stringify(users));
    } catch (error) {
        console.log(`ERROR: ${error.message}`);
    }
})();
