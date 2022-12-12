const toUpperCase = (str) => {
  const result = str.toUpperCase();
  return result;
};

const toLowerCase = (str1) => {
  const result1 = str1.toLowerCase();
  return result1;
};

const jsonToString = (json) => {
  const str = JSON.stringify(json);
  return str;
};

const stringToJson = (teacher) => {
  const hi = JSON.parse(teacher);
  return hi;
};

const reverseString = (a) => {
  var newString = "";
  for (var i = a.length - 1; i >= 0; i--) {
    newString += a[i];
  }
  return newString;
};

//const a = "The tree is big";
// console.log(a.toUpperCase());

//const b = "THE TREE IS SMALL";
// console.log(b.toLowerCase());

module.exports = {
  //a,
  //b,
  toUpperCase,
  toLowerCase,
  reverseString,
  jsonToString,
  stringToJson,
  //jsonString,
};

// const jsonString = (value) => {
//   const x = value.jsonString();
//   return x;
// };

// var fs = require('fs');
// fs.readFile('index.js', function(err, data)
// {
//   var jsonData = data;
//   var jsonParsed = JSON.parse(jsonData);
//   return jsonParsed;
// })
// const solution = JSON.stringify(value);
// const jsonString =
//const  = (a) => {
// const jsonString = (value) => {
//   value.JSON.stringify();
//   return jsonString;
// };

// // const d = JSON.parse(c);
// // console.log(d.name);

// function reverseString(str) {
//   return str;
// }
// reverseString("hello");

// var reverseString = (a) => {
//   const rev = a.reverseString();
//   return rev;
// };

// function reverseString(a) {
//   var newString = "";
//   for (var i = a.length - 1; i >= 0; i--) {
//     newString += a[i];
//   }
//   return newString;
// }

// function main() {
//   reverseString(a);
//   //   newString;
//   //JSON.parse();
// }
