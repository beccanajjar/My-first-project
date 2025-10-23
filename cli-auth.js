#!/usr/bin/env node

const readline = require('readline');

// Create readline interface
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
  console.log('Welcome to the Authentication CLI!');
  console.log('===================================\n');
  
  try {
    // Get username
    const username = await askQuestion('Enter your username: ');
    
    // Get password
    const password = await askQuestion('Enter your password: ');
    
    // Simple password validation (you can modify this logic)
    const validPassword = 'password123'; // Change this to your desired password
    
    if (password === validPassword) {
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
