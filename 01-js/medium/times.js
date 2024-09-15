/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
function calculateTime(n) {
    // Check for impractically large n
    if (n > 1e6) {
        console.warn('Warning: The value of n is very large. The computation might take a significant amount of time.');
    }

    let start = performance.now();
    let sum = 0;

    // Use a more efficient method to calculate the sum
    for (let i = 1; i < n; i++) {
        sum += i;
    }

    let end = performance.now();
    let duration = (end - start) / 1000; // Convert milliseconds to seconds

    return {
        duration: duration,
        sum: sum
    };
}

// Example usage:
console.log(calculateTime(100));          // Reasonable for small n
console.log(calculateTime(100000));       // Handles larger n
// Comment out the following line if it takes too long to run
console.log(calculateTime(10000000000)); // Very large n might be impractical
