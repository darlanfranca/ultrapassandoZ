const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor de X: ', (xInput) => {
  const x = parseInt(xInput);
  let soma = x;
  let maiorz = 0;

  function recursivePrompt() {
    rl.question('Digite o valor de Z: ', (zInput) => {
     let z = parseInt(zInput);
      if (z > x) {
        maiorz = z;
      }

      if (z <= x) {
        recursivePrompt();
      } else {
        calculateAndPrintResult();
      }
    });
  }

  function calculateAndPrintResult() {
    let i = 1;
    while (soma <= maiorz) {
      soma += x + i;
      i++;
    }
    console.log("O número mínimo de inteiros a serem somados é:",i);
    
  }

  recursivePrompt();
});

