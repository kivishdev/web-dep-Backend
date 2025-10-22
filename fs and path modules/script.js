const fs = require("fs");

// Reading File:
fs.readdir("./", (err,fileee) => {
    if(err) console.log(err)
    else console.log(fileee);
})



// Creating a file:
// Syntax: fs.writeFile("file-ka-naam","Uske andar ka content", (error)=>{
//     if(err) {
//         console.log("There's and Error");
//     }
// })


fs.writeFile("script.txt", "Hello haa mai andar se create huaa hu", (err)=> {
    if(err) console.log(err, "This is the Error");
        else console.log("Done Creating");
    })

// Appendfile: Mtlb likhe hue me aage add krnaa
// Syntax: fs.writeFile("script.txt", "Hello haa mai andar se create huaa hu", (err)=> {
    // if(err) console.log(err, "This is the Error");
    //     else console.log("Done Creating");
    // })

fs.appendFile("script.txt", "Haa Haa vahii se CreateFile and Appendfile se", (err)=> {
    if(err) console.log(err, "This is the Error");
        else console.log("Done Creating");
    })

// Rename File:
// Syntax: fs.rename("old-file", "new-file", (err) => {
//     if(err) console.log(err);
//     else console.log("Renamed");
// })

fs.rename("script.txt", "new-script.txt", (err) => {
    if(err) console.log(err);
    else console.log("Renamed");
})

// CopyFile: Old file ko new file me copy krnaaa
// Syntax: fs.rename("file-jisko copy krnaa haii", "target-file", (err) => {
//     if(err) console.log(err);
//     else console.log("Renamed");
// })

fs.copyFile("man.txt", "chacha.txt", (err) => {
    if(err) console.log(err);
    else console.log("Copied Successfullyy");
})

// Unlink: Removes the file:
fs.unlink("remove.txt", (err)=> {
    if(err) console.log(err, "This is the error");
    else console.log("Removed");
})

// Readfile: File content padhna
fs.readFile("man.txt", (err,data) => {
    if(err) console.log(err)
    else console.log(data.toString())
})

