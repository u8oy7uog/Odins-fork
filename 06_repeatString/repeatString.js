const repeatString = function(str, num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;

//npm test repeatString.spec.js

