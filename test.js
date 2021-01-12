//charCount('Hello') => {h:1, e:1, l:2, o:1}

function charCount(str) {
  //make object to return at end
  let result = {};
  //loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    //if the char is a number/letter and is a key in object, add it and ser value to 1
    //else if char is a number/letter, add char to object and set it's value to 1
    //if char is something else(space, period), don't add
    let char = str[i];
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
  //return object
}
let solution = charCount("Hhello");

function charCountRef(str) {
  //make object to return at end
  let obj = {};
  //loop over string, for each character...
  for (var char of str) {
    //if the char is a number/letter and is a key in object, add it and ser value to 1
    //else if char is a number/letter, add char to object and set it's value to 1
    //if char is something else(space, period), don't add
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
  //return object
}

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
