const fs = require('fs');
const path = require('path');
//check if the Logs directory exists
if(fs.existsSync("Logs")){
    fs.readdir("Logs", (errors, files) => {
        for(const file of files){
            const filePath = path.join("Logs", file);
            //using file system unlink to remove the files from the directory
            fs.unlink(filePath, errors => {
                if(errors) throw errors;
            });
            //log to the console every time a file is deleted
            console.log(`delete files...${file}`);
        }
        //using file system rmdirSync to remove the Logs directory
        fs.rmdirSync("Logs");
    });
}