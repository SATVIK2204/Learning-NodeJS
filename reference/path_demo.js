const path= require('path');

// Base file name
console.log(path.basename(__filename));

//Filename
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename))

// Join paths

console.log(path.join(__dirname,'test','hello.html'))