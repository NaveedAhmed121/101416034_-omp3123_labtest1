// callbacks.js

// Existing delayedSuccess function
const delayedSuccess = () => {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        console.log(success);
    }, 500);
};

// Existing delayedException function
const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.error(e);
        }
    }, 500);
};

// New resolvedPromise function
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 'message': 'delayed success from promise!' });
        }, 500);
    });
};

// New rejectedPromise function
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('error: delayed exception from promise!'));
        }, 500);
    });
};

// Call both promises separately
resolvedPromise()
    .then(result => console.log(result)) // Output: { message: 'delayed success from promise!' }
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Call existing functions
delayedSuccess();
delayedException();
