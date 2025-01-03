const fs = require('fs');
const path = require('path');

// Specify the directory you want to list
const directoryPath = path.join(__dirname, '/public/fonts');

// Read and print all filenames in the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory: ' + err);
  }
  
  console.log('Files in directory:');
  files.forEach(file => {
    console.log(file);
  });
});
