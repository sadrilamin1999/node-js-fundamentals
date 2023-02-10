const fs = require("fs");

// read
fs.readFile("./texts/text1.txt", (err, data) => {
  if (err) console.log(err);
  console.log(data.toString());
});
