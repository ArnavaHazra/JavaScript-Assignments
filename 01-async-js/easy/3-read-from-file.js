// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

setTimeout( () => {
    console.log("-------------- EXP OPS 1 -------------------")
}, 5000);

const fs = require("fs");

const special = (err, data) => {
  
    if(err) 
        console.log("ERROR reading file: ", err);
    else 
        console.log(data);
}

fs.readFile('demo.txt', "utf8", special);

setTimeout( () => {
    console.log("-------------- EXP OPS 2 -------------------")
}, 5000);

