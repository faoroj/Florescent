const fs = require('fs');
const path = require('path');

// Path to your assets folder
const imagesPath = path.join(__dirname, '../assets/images');

// Path to the constants file where imports will be written
const constantsFilePath = path.join(__dirname, '../constants/images.js');

// Get all the files from the assets folder
const files = fs.readdirSync(imagesPath);

// Create the import statements
const imports = files.map((file) => {
  const fileName = path.basename(file, path.extname(file)); // Get the file name without extension
  return `export const ${fileName} = require('../assets/${file}');`;
}).join('\n');

// Write the imports to the constants file
fs.writeFileSync(constantsFilePath, imports);

console.log('Icons imported successfully!');