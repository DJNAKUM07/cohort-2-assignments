// ## Counter without setInterval

const { setTimeout } = require("timers/promises");

// Initialize counter
let count = 0;
let isContinue = true;

// Function to increment the counter
let fn = async () => {
    while (isContinue) {
        console.log(count++);
        await setTimeout(); // Wait for 100ms before the next increment
    }
};

// Start the counter
fn();

// Stop the counter after 1 second
setTimeout(() => {
    isContinue = false;
    console.log("Count is: " + count);
}, 1000);
