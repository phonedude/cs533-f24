const fs = require('fs')
const path = require('path')

const directoryPath = process.argv[2]
const extension = '.' + process.argv[3]

fs.readdir(directoryPath, (err,files) => {
	if (err) {
		console.error('Error reading the directory: ${err.message}')
		return
	}

	const filteredFiles = files.filter(file => path.extname(file) == extension)

	filteredFiles.forEach(file => console.log(file))
});