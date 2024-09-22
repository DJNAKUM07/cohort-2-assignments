/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Wait 1 completed");
        }, t * 1000);
    });
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Wait 2 completed");
        }, t * 1000);
    });
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Wait 3 completed");
        }, t * 1000);
    });
}

async function calculateTime(t1, t2, t3) {
    const start = Date.now();
    const r1 = await wait1(t1);
    const r2 = await wait2(t2);
    const r3 = await wait3(t3);
    const end = Date.now();

    return end - start;
}

function calculateTimeWithOutAwait(t1, t2, t3) {
    const start = Date.now();
    const r1 = wait1(t1);
    const r2 = wait2(t2);
    const r3 = wait3(t3);

    r1.then((resolve) => console.log(resolve));
    r2.then((resolve) => console.log(resolve));
    r3.then((resolve) => console.log(resolve));

    console.log(r1, r2, r3)
    const end = Date.now();

    return end - start;
}

// function calculateTime(t1, t2, t3) {
//     const start = Date.now();

//     return wait1(t1).then((result1) => {
//         console.log(result1); // Log first result
//         return wait2(t2); // Wait for second promise
//     }).then((result2) => {
//         console.log(result2); // Log second result
//         return wait3(t3); // Wait for third promise
//     }).then((result3) => {
//         console.log(result3); // Log third result
//         const end = Date.now(); // Correctly call Date.now()
//         const time = end - start; // Calculate total time taken
//         return time; // Return the total time taken
//     });
// }

// Example usage

// console.log(calculateTimeWithOutAwait(1, 2, 3));

// calculateTime(1, 2, 3).then((time) => {
//     console.log(`Total time taken: ${time} milliseconds`);
// });


module.exports = calculateTime;
