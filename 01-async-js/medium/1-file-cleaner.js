// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile('demo.txt', "utf8", (err, data) => {
    if(err) 
        console.log("ERROR reading file: ", err)
    else {
        console.log("SUCCESS file read")
        const fileData = data;
        //console.log(fileData)
        const eachWordChar = fileData.split(' ');
        //console.log(eachChar)
        const onlyWord = eachWordChar.filter(x => x!= '');
        //console.log(eachWord);
        const newString = onlyWord.join(" ");
        //console.log(newString);
        const write = (newString) => {
            fs.writeFile('demo.txt', newString, (err) =>{
                if(err)
                    console.log("ERROR write file: ", err)
                else
                    console.log("SUCCESS write file")
                })
        }
        write(newString);
    }
})

// console.log(data);

// fs.writeFile('demo.txt', data, "utf8", (err) =>{
//     if(err)
//         console.log("ERROR write file: ", err)
//     else
//         console.log("SUCCESS write file")
// })





