const fs = require("fs");
const badwords = require("../filipino-badwords-list");

const list = badwords.sort().map(badword => {
  return badword.toLowerCase();
});

const filename = "src/filipino-badwords-list.js";
const content = 'module.exports = [\n"' + list.join('",\n"') + '"\n];';

fs.writeFile(filename, content, err => {
  if (err) throw err;
  console.log(`Success writing ${filename} file`);
});
