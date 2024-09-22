// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.


// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require("fs").promises; // Use promises API of fs
const path = require("path");

const filePath = "../../02-nodejs/files/a.txt";

// Function to read the file
const readFile = async (filePath) => {
    try {
        return await fs.readFile(filePath, "utf-8");
    } catch (error) {
        console.error("Error reading file:", error);
        throw error; // Rethrow to handle it in main
    }
}

// Function to write to the file
const writeFile = async (filePath, data) => {
    try {
        await fs.writeFile(filePath, data, "utf-8");
    } catch (error) {
        console.error("Error writing file:", error);
        throw error; // Rethrow to handle it in main
    }
}

// Main function to clean the file
const cleanFile = async () => {
    try {
        let data = await readFile(filePath);
        console.log("Original data:", data);

        // Remove extra spaces
        const cleanedData = data.split(/\s+/).filter(Boolean).join(' '); // Split by whitespace and filter out empty strings

        await writeFile(filePath, cleanedData);
        console.log("Cleaned data:", await readFile(filePath));
    } catch (error) {
        console.error("Error during file cleaning process:", error);
    }
}

// Execute the main function
cleanFile();


// const fs = require("fs").promises; // Use promises API of fs
// const { join } = require("path");

// const filePath = "../../02-nodejs/files/a.txt";

// let fnReadFile = async (filePath) => {
//     try {
//         return await fs.readFile(filePath, "utf-8");
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// let fnWriteFile = async (filePath, data) => {
//     try {
//         await fs.writeFile(filePath, data, "utf-8");
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// const main = (async () => {
//     let data = await fnReadFile(filePath);
//     console.log(data);
//     data = data.split(' ').filter((ch) => ch != '').join(' ');

//     await fnWriteFile(filePath, data);
//     console.log(await fnReadFile(filePath));
// })();