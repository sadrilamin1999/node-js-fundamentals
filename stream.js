const fs = require("fs");

const myReadStream = fs.createReadStream("./texts/text3.txt", {
  encoding: "utf-8",
});
const myWriteStream = fs.createWriteStream("./texts/text4.txt", {
  encoding: "utf-8",
});
myReadStream.pipe(myWriteStream);
