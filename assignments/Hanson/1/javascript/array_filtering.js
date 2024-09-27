let numbers = [1,2,3,4,5,6,7,8,9,10]
filtered = numbers.filter(evenNumbers)

function evenNumbers (n){
	return n % 2 === 0
}

console.log(filtered)