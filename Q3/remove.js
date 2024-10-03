// remove.js
const fs = require('fs');
const path = require('path');


const logDir = path.join(__dirname, 'Logs');

// Function to remove log files and the Logs directory
function removeLogs() {
    
    if (fs.existsSync(logDir)) {

        fs.readdir(logDir, (err, files) => {
            if (err) {
                console.error('Error reading the Logs directory:', err);
                return;
            }

            // Loop through each file and delete it
            files.forEach(file => {
                const filePath = path.join(logDir, file);
                console.log(`Deleting file... ${file}`); // Output the file name to delete
                fs.unlinkSync(filePath); // Delete the file
            });

            // Remove the Logs directory
            fs.rmdir(logDir, (err) => {
                if (err) {
                    console.error('Error removing Logs directory:', err);
                    return;
                }
                console.log('Logs directory removed');
            });
        });
    } else {
        console.log('Logs directory does not exist');
    }
}

// Run the removeLogs function
removeLogs();
