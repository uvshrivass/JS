//Nodejs Readline module


const mod = require('readline');  //Accessing Readling module

const metd = mod.createInterface({ //Storing method in metd
  input: process.stdin,
  output: process.stdout
});

metd.question('How was the day?', (answer) => {
  // TODO: Log the answer in a database
  console.log(`You said the day was: ${answer}`);

  metd.close();
});