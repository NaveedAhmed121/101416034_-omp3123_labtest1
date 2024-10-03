// Q2/promises.js
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved after 500ms");
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Rejected after 500ms");
        }, 500);
    });
}

// Test
resolvedPromise()
    .then(message => console.log(message)) // Resolved after 500ms
    .catch(err => console.error(err));

rejectedPromise()
    .then(message => console.log(message))
    .catch(err => console.error(err)); // Rejected after 500ms
