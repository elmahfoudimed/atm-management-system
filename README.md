# ATM Management System (CLI)

This Node.js CLI application manages an ATM system with user authentication, ATM operations, event handling, file reading and writing features.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [File Structure](#file-structure)

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/elmahfoudimed/atm-management-system.git
    ```

2. Navigate to the project directory:

    ```bash
    cd atm-management-system
    ```

## Usage

To run the ATM Management System CLI application, use the following command:

```bash
node index.js
```

## Features

- **User Authentication**: Add new users to the system with a unique accountID and a four-digit PIN. Validate user credentials against data stored in users.json.
- **ATM Operations**: After authentication, users can:
    - Check their balance
    - Deposit money
    - Withdraw money
    - View transaction history
- **Event Emitter**: Utilizes Node.js's *events* module to emit events for different ATM operations and implements event listeners for each operation.
- **Reading and Writing to Files**: Uses the *fs* module to read from and write to JSON files for retrieving user information and updating transaction logs.

## File Structure

```
atm-management-system/
│
├── data/
│   └── users.json           # Stores users data
│
├── admin.js                 # A file for administrative operations
├── authentication.js        # Custom module for authentication
├── event_handling.js        # Custom module for event handling
├── fs_utils.js              # Custom module for file system utilities
├── operations.js            # Custom module for ATM operations
├── index.js                 # Main entry point
└── README.md                # This README file
```