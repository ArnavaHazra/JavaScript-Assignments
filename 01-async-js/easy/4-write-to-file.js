// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const fileContent = "This is file content"

fs.writeFile('demo.txt', fileContent, (err) => {
    if(err)
        console.log("ERROR writing file: ", err)
    else
        console.log("SUCCES file write")
})