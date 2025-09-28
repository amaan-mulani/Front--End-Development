const fs = require('fs');

//writing file synchronously
fs.writeFileSync('myFile.txt', 'This is my first file');

//reading file synchronously
const data = fs.readFileSync('myFile.txt', 'utf-8');
console.log(data);

//append data syncronously
fs.appendFileSync('myFile.txt', '\nThis is appended data');