// add.js
const fs = require('fs');
const path = require('path');


const logDir = path.join(__dirname, 'Logs');

// Function to create the Logs directory and log files
function createLogs() {
    // Check if the Logs directory exists
    if (!fs.existsSync(logDir)) {
        // Create the Logs directory
        fs.mkdirSync(logDir, { recursive: true });
        console.log('Logs directory created');
    } else {
        console.log('Logs directory already exists');
    }

    // Change the current process to the Logs directory
    process.chdir(logDir);

    // Create 10 log files and write some text into them
    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`; // Create log file names
        fs.writeFileSync(fileName, `This is log file ${i}`); // Write text to the file
        console.log(`Created file: ${fileName}`); // Output the file name to console
    }
}

// Run the createLogs function
createLogs();
