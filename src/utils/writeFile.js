const fs = require("fs");
const list = require("../filipino-badwords-list");

function fileTemplate(content) {
  return `module.exports = ${content};`;
}

const arrFilename = "lib/array.js";
const objFilename = "lib/object.js";
const regexFilename = "lib/regex.js";

function objectify() {
  return list.reduce((acc, cur) => {
    acc[cur] = 1;
    return acc;
  }, {});
}

const arr = fileTemplate('["' + list.join('","') + '"]');
const obj = fileTemplate(JSON.stringify(objectify()));
const regex = fileTemplate("/\\b(" + list.join("|") + ")\\b/gi");

function writeFile(filename, content) {
  fs.writeFile(filename, content, err => {
    if (err) throw err;
    console.log(`Success writing ${filename} file`);
  });
}

// Array
writeFile(arrFilename, arr);
// Object
writeFile(objFilename, obj);
// Regex
writeFile(regexFilename, regex);
