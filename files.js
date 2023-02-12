const fs = require("fs");

// read
/* fs.readFile("./texts/text1.txt", (err, data) => {
  if (err) console.log(err);
  console.log(data.toString());
});
console.log("Last line"); */

// write
/* fs.writeFile("./texts/text1.txt", "Hello none", () => {
  console.log("File writen successfully");
}); */

// file create & write

/* fs.writeFile("./texts/text2.txt", "Hello again", () => {
  console.log("File writen successfully");
}); */

/* fs.writeFile("./texts/text3.txt", "Hello file3", () => {
  console.log("file three successfully red");
}); */

// directory
if (!fs.existsSync("./node")) {
  fs.mkdir("./node", (err) => console.log("Folder is created"));
} else {
  fs.rmdir("./node", (err) => console.log("Folder is removed"));
}
