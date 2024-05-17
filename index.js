#!/usr/bin/env node
// import './src/commands.js'
const arg = process.argv.slice(2).join(' ');

function greet (greeting) {
  if (greeting === 'hello') {
   return 'hello yourself';
  }
  if (greeting === 'bye') {
    return 'byeeee'
  }
  return 'huh???';
};

console.log(greet(arg));

// comment
