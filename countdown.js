function countDown(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

function someRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

function collectOdds(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  herlper(arr);

  return result;
}

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(num) {
  if (num === 0) return 0;

  return num + recursiveRange(num - 1);
}

function fib(nth) {
  if (nth <= 2) return 1;
  return fub(n - 1) + fib(n - 2);
}

function reverse(str) {
  if (str.length <= 0) return str;

  return reverse(str.slice(1)) + str[0];
}

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}
