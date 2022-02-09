
const process = require ('process');
process.argv.reduce((sum,val) => {
    console.log( `${sum+val}`);
  });