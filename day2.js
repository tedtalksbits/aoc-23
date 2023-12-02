// we need to be able to convert string to numbers
// we need a map of string:numnber
// const lines = require('./input.js');
const lines = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen',
];
const numMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

lines.forEach((line, index, arr) => findFirstNumInString(line, index, arr));

function findFirstNumInString(string, index, arr) {
  // check if string/value is the first num
  let firstWordIndex = 100;
  Object.keys(numMap).map((key) => {
    const foundIndex = string.indexOf(key);

    if (foundIndex >= 0) {
      const newString = string.replace(key, numMap[key]);
      console.log(newString);
    }
  });
}

console.log(Number('five'));
