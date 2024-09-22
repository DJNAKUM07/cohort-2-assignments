// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const updateClock = () => {
    const now = new Date();

    // 24-hour format
    const time24 = now.toTimeString().split(' ')[0]; // HH:MM:SS

    // 12-hour format
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const time12 = now.toLocaleTimeString('en-IN', options); // HH:MM:SS AM/PM

    console.clear();
    console.log("24-hour format:", time24);
    console.log("12-hour format:", time12);
};

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();


// const updateClock = () => {
//     const now = new Date();

//     // 24-hour format
//     const hh = String(now.getHours()).padStart(2, '0'); // HH
//     const mm = String(now.getMinutes()).padStart(2, '0'); // MM
//     const ss = String(now.getSeconds()).padStart(2, '0'); // SS
//     const time24 = `${hh}:${mm}:${ss}`;

//     // 12-hour format
//     const hour12 = hh % 12 || 12; // Convert to 12-hour format
//     const ampm = hh >= 12 ? 'PM' : 'AM'; // Determine AM/PM
//     const time12 = `${String(hour12).padStart(2, '0')}:${mm}:${ss} ${ampm}`;

//     // Clear the console and display the time
//     console.clear();
//     console.log("24-hour format:", time24);
//     console.log("12-hour format:", time12);
// };

// // Update the clock every second
// setInterval(updateClock, 1000);

// // Initial call to display the clock immediately
// updateClock();


// let date = new Date();
// console.log(date.toTimeString('hh:mm::ss'));

// setInterval(() => {
//     console.log(new Date().toTimeString('hh:mm::ss'));
// }, 1000);
