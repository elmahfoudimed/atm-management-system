// Importing required modules
const EventEmitter = require('events');
const atm = require('./operations');

// Create an event emitter instance
const eventEmitter = new EventEmitter();

// Associate each event with its appropriate handler function
eventEmitter.on('checkBalance', atm.checkBalance);
eventEmitter.on('deposit', atm.deposit);
eventEmitter.on('withdraw', atm.withdraw);
eventEmitter.on('viewTransactions', atm.viewTransactions);

// Export functions for use in other modules
module.exports.eventEmitter = eventEmitter;