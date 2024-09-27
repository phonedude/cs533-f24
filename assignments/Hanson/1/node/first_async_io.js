const fs = require('fs');

const filePath = process.argv[2]

fs. readFile(filePath, 'utf8', (err, fileContent) => {
	if (err) {
		console.error('Error reading the file: ${err.message}')
		return
	}

	const newLineCount = fileContent.split('\n').length - 1;

	console.log(newLineCount)
})
	