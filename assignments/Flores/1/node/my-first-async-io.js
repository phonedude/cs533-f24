const fs = require('fs');


fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) {
      
        return console.error(err);
    }


    const lines = data.split('\n');

    
    console.log(lines.length - 1);
});
