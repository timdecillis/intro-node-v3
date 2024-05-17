#!/usr/bin/env node
// import './src/commands.js'

function assess () {
  const args = process.argv.slice(2)[0];
  if (args === "foo") {
   return console.log(args);
  }
  return console.log("bar");
};

assess();
