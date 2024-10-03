// Q3/remove.js
const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

// Remove all log files and the Logs directory
fs.readdir(logDir, (err, files) => {
    if (err) {
        return console.error('Logs directory does not exist');
    }

    files.forEach(file => {
        const filePath = path.join(logDir, file);
        console.log(`Deleting file: ${file}`);
        fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logDir);
    console.log('Logs directory removed');
});
