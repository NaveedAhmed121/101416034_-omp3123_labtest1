// lowerCaseWords.js

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        // Checking if the input is an array or not
        if (!Array.isArray(mixedArray)) {
            reject("Input is not an array");
            return; // Exit the function if the input is not valid
        }

        // Filter and convert strings to lowercase
        const result = mixedArray
            .filter(item => typeof item === 'string') // Filter only strings
            .map(word => word.toLowerCase()); // Converting to lowercase

        // Resolve the promise with the result
        resolve(result);
    });
}

// Example Input
const mixedArray = ['PANDa', 10, true, 25, false, 'Wings'];

// Call the function and handle the promise
lowerCaseWords(mixedArray)
    .then(result => console.log(result))  // Output: ['pizza', 'wings']
    .catch(error => console.error(error));
