#!/usr/bin/env node

const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get user input
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Main function
async function main() {
  try {
    console.log('Welcome to the CLI Authentication App!');
    console.log('=====================================\n');
    
    // Get username
    const username = await askQuestion('Enter your username: ');
    
    // Get password
    const password = await askQuestion('Enter your password: ');
    
    // Simple password validation (you can modify this logic)
    const correctPassword = 'secret123'; // This is the expected password
    
    if (password === correctPassword) {
      console.log('\n🎉 Congratulations! 🎉');
      console.log(`Welcome, ${username}!`);
    } else {
      console.log('\n❌ Invalid password. Access denied.');
    }
    
  } catch (error) {
    console.error('An error occurred:', error.message);
  } finally {
    rl.close();
  }
}

// Run the application
main();
