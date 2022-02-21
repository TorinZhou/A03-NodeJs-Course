const fs = require("fs");

/**
 * @TorinZhou
 * @date: 2022.2.21
 * @Lecture: 7,8
 * @Blocking, synchoronous way
 */
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const DateNow = new Date();
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}\nWhich is ${DateNow.getFullYear()}.${
//   DateNow.getMonth() + 1
// }.${DateNow.getDate()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written");

/**
 * @TorinZhou
 * @Lecture 9 10
 * @Multiple tasks in order using callbacks
 */
// fs.readFile(`./txt/start.txt`, (err, data) => {
//   if (err) throw err;
//   console.log(data); // <Buffer 72 65 61 64 2d 74 68 69 73>
// });
// fs.readFile(`./txt/start.txt`, "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data); // <Buffer 72 65 61 64 2d 74 68 69 73>
// });
// fs.readFile(`./txt/start.txt`, "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         if (err) throw err;
//         console.log("Success!🤞");
//       });
//     });
//   });
// });
// console.log("This will appear first: ");
