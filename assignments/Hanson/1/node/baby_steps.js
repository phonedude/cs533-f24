const args = process.argv.slice(2)

const sum = args.reduce((total, num) => total + parseFloat(num),0)

console.log(sum)