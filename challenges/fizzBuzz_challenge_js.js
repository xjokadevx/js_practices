// 0.047 ms
//.49

console.time("test");
const result = (function (n = 0) {
  let res = [];

  for (let i = 1; i <= n; i++) {
    let str = "";

    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";

    if (str === "") str += i;
    res.push(str);
  }

  return res;
})(5);
console.timeEnd("test");

console.log("result", result);
