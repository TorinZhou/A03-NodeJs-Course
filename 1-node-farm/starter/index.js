const fs = require("fs");
const http = require("http");
const url = require("url");

/**
 * @ 3.3 async reduce
 */
// const list = [1, 2, 3];
// const square = (num) => {
//   return new Promise((res) => {
//     // setTimeout(() => res(num * num), 1000);
//   });
// };
// Promise handler go into microTask queue.
// 每次返回 Promise. pending. 但是
// acc 先是默认的pending. 但是没有resolve. 直到每次循环才会返回Promise.resolve(undefine)
// 如果不await acc . 那就不会等循环返回的undefine.
// const output = (arr) => {
//   arr.reduce(async (acc, cur, index) => {
//     console.log("before await acc", acc, cur, Date.now());
//     await acc; // Promise. pending. 之后resolve了 后边才会执行。 而acc只有上次square结束， 才会resolve成undefine.   // undefine 意味着 上次square跑完。
//     console.log("before await square", acc, cur, Date.now());
//     const a = await square(cur);
//     console.log("after await square", acc, cur, Date.now());
//     console.log(a);
//     return undefined;
//   }, Promise.resolve("foo"));
// };
// output(list);

// const whatever = new Promise((res) => res("Ukraine"));
// whatever
//   .then(() => {
//     setTimeout(() => console.log("1"), 1000);
//   })
//   .then(() => {
//     setTimeout(() => console.log("4"), 1000);
//   })
//   .then(() => {
//     setTimeout(() => console.log("9"), 1000);
//   });
// const output = async (arr) => {
//   arr.reduce(async (acc, cur, index) => {
//     console.log(`current reduce index is ${index}`);
//     await acc;
//     const a = await square(cur);
//     console.log(a);
//   }, "foo");
// };
// console.log(output(list));

/**
 * @ 3.1  Promise
 */
// const getAllUserEmails = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();

//   const userEmailArray = jsonUserData.map((user) => {
//     return user.email;
//   });
//   console.log(userEmailArray);
// };
// getAllUserEmails();
///////////////////////////////////////////////////////////////////////////////
// Sever
/**
 * @TorinZhou
 * @date: 2022.2.23
 * @Lecture: 11, 12, 13
 * @http.createServer([options][, requestListener])
 */

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview !", "utf-8");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else if (pathName === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});

console.log(Number.parseInt("111px", 2));

////////////////////////////////////////////////////////////////////////////
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
