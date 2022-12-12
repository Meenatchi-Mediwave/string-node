const {
  toUpperCase,
  toLowerCase,
  reverseString,
  jsonToString,
  stringToJson,
} = require("./utils");

// console(a, b);

const str = "hello world";
const res = toUpperCase(str);
console.log(res);

const str1 = "Bye world";
const res1 = toLowerCase(str1);
console.log(res1);

//const value = { name: "Mee" };

// const q = {"name": "Leo", "age": 22, "gender": "male"};
// const r = JSON.parse(q);
// console.log(r);

const a = "Heelo";
const b = reverseString(a);
console.log(b);

// const value = { name: "Leo" };
// const solution = jsonString(value);
// console.log(solution);

const student = { name: "Leo" };
const re = jsonToString(student);
console.log(re);

const stu = '{"name":"Ashish na"}';
const xy = stringToJson(stu);
console.log(xy);
