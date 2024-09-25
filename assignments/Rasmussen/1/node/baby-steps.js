let input = process.argv;
let sum = 0;
for (let i = 2; i < input.length; i++) {
  sum += parseInt(input[i]);
}
console.log(sum);