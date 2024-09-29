/**
 * You need to create an express HTTP server in Node.js which will handle the logic of a file server.
 * - Use the built-in Node.js `fs` module.
 * The expected API endpoints are defined below:
 * 1. GET /files - Returns a list of files present in the `./files/` directory.
 *    Response: 200 OK with an array of file names in JSON format.
 *    Example: GET http://localhost:3000/files
 * 2. GET /file/:filename - Returns content of the given file by name.
 *    Description: Use the filename from the request path parameter to read the file from the `./files/` directory.
 *    Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found.
 *    Should return `File not found` as text if the file is not found.
 *    Example: GET http://localhost:3000/file/example.txt
 * - For any other route not defined in the server, return 404.
 * Testing the server - run `npm run test-fileServer` command in terminal.
 */

const express = require('express');
// const fs = require('fs').promises;
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const folderPath = path.join(__dirname, 'files'); // Ensure the correct path to the files directory



app.get('/files', function (req, res) {
  fs.readdir(path.join(__dirname, './files/'), (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve files' });
    }
    res.json(files);
  });
});

app.get('/file/:filename', function (req, res) {
  const filepath = path.join(__dirname, './files/', req.params.filename);

  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send('File not found');
    }
    res.send(data);
  });
});

app.all('*', (req, res) => {
  res.status(404).send('Route not found');
});

// app.get('/files', async (req, res) => {
//   try {
//     const fileList = await fs.readdir(folderPath);
//     res.status(200).json(fileList);
//   } catch (error) {
//     return res.status(500).json({ error: 'Failed to retrieve files' });
//   }
// });

// app.get('/file/:filename', async (req, res) => {
//   const filename = path.join(folderPath, req.params.filename); // Correctly get the filename from params

//   try {
//     const fileData = await fs.readFile(filename, 'utf-8'); // Read the file with UTF-8 encoding
//     res.status(200).send(fileData); // Send file content as text
//   } catch (error) {
//     return res.status(404).send('File not found');
//   }
// });

// // Handle undefined routes
// app.use((req, res) => {
//   res.status(404).send('Route not found');
// });
// ``
// app.listen(port, () => {
//   console.log(`Server started on port: ${port}`);
// });

module.exports = app;
