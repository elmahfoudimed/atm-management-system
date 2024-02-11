// Adding new users
function addUser(users, name, pin) {
    const lastID = users[users.length - 1].accountID;
    const newID = 'ACC' + (Number(lastID.substring(3)) + 1);
    const newUser = {
        "accountID": newID,
        "name": name,
        "pin": pin,
        "balance": 0,
        "transactions": []
    };

    users.push(newUser);
}

// Check the existence of a user
function getUser(users, userID, pin) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].accountID === userID && users[i].pin === pin) return users[i];
    }
}

// Export functions for use in other modules
module.exports = { addUser, getUser };