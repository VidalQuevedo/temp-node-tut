const path = require('path');

console.log(path.sep);

// Join and normalize string elements using Os's default separator (returned by path.sep)
const filePath = path.join('/content', 'subfolder', 'text.txt');
console.log(filePath);

// Print base name of file from path
const base = path.basename(filePath);
console.log(base);

// Path resolve (absolute path)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
