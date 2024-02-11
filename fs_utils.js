// Importing the 'fs' module
const fs = require('fs');

// Reading from a file
function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

// Writing into a file
function writeFileAsync(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, err => {
            if (err) reject(err);
            else resolve('Good');
        });
    });
}

// Export functions for use in other modules
module.exports = { readFileAsync, writeFileAsync };