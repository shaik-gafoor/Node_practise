const readline = require("readline");

const rl = (() => {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
})();

rl.question("Enter number: ", (input) => {
  (() => {
    const n = parseInt(input);
    const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
    console.log(`Factorial of ${n} is ${factorial(n)}`);
  })();
  rl.close();
});
