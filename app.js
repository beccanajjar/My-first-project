#!/usr/bin/env node

const readlineSync = require('readline-sync');

// Define the correct password (in a real application, this would be hashed and stored securely)
const CORRECT_PASSWORD = 'secret123';

console.log('Welcome to the Authentication CLI Application');
console.log('==========================================');

// Get username input
const username = readlineSync.question('Enter your username: ');

// Get password input (hidden for security)
const password = readlineSync.question('Enter your password: ', {
  hideEchoBack: true
});

console.log('\nVerifying credentials...');

// Check if password matches
if (password === CORRECT_PASSWORD) {
  console.log('\n🎉 Congratulations! 🎉');
  console.log(`Welcome, ${username}! You have successfully authenticated.`);
} else {
  console.log('\n❌ Authentication failed. Incorrect password.');
  console.log('Please try again.');
}

console.log('\nThank you for using the CLI Authentication App!');
