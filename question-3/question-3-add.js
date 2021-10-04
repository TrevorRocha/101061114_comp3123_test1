const fs = require('fs');
//check if files already exist
if (!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}
//creates Logs directory
process.chdir("Logs");
for (let i = 0; i < 10; i++) {
    //create file with the file name log{i}
    const filename = `log${i}.txt`;
    //writes to the file some text and the file name + number 
    fs.writeFile(filename, `*TEST* this is log${i}.txt`, (err) => {
    });
    // display file name to console
    console.log(filename);
}