const fs= require('fs');
const path=require('path');

// Create folder
// fs.mkdir(path.join(__dirname,'test'),{}, err => {
//     if(err) throw err;
//     console.log('Forder created...');
// });

// Create and write to file and append
// fs.writeFile(path.join(__dirname,'test', 'hello.txt'), 'Hello World' , err => {
//     if(err) throw err;
//     console.log('File written...');

//     // File append
//     fs.appendFile(path.join(__dirname,'test', 'hello.txt'), ' I love nodejs' , err => {
//         if(err) throw err;
//         console.log('File appended...');
//     });
// });

// Read File
// fs.readFile(path.join(__dirname,'test', 'hello.txt'), 'utf-8', (err,data) => {
//     if(err) throw err;
//     console.log(data);
// });

//Rename File
fs.rename(path.join(__dirname,'test', 'hello.txt'), path.join(__dirname, 'test', 'helloworld.txt'), (err) => {
    if(err) throw err;
    console.log('File renamed');
});
