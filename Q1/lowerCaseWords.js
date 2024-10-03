// Q1/lowerCaseWords.js
function lowerCaseWSords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input is not an array");
        }

        const result = mixedArray.filter(item => typeof item === 'string')
                                 .map(word => word.toLowerCase());

        resolve(result);
    });
}

// Test
lowerCaseWords([1, 'APPLE', 'BaNaNa', true, 'mango'])
    .then(result => console.log(result))  // ['apple', 'banana', 'mango']
    .catch(error => console.error(error));
