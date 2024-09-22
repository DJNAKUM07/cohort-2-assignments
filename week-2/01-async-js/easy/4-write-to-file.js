// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs").promises; // Use promises API of fs

const filePath = '../../02-nodejs/files/a.txt';

// Function to read the file
const fnreadFile = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        console.log(`Data is: ${data}`);
        return data; // Return data if needed
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

// Function to write to the file
const fnwriteFile = async (filePath, content) => {
    try {
        console.log("Updating file...");
        await fs.writeFile(filePath, content, "utf-8");
        console.log("File updated successfully.");
    } catch (err) {
        console.error("Error writing file:", err);
    }
}

// Main function to execute the read/write operations
const main = async () => {
    // Read the initial contents of the file
    await fnreadFile(filePath);

    // Write to the file
    await fnwriteFile(filePath, "Hello, this is updated text.hello     world    my    name   is       raman");

    // Read the updated contents
    await fnreadFile(filePath);
}

// Run the main function
main();

console.log("hello");



