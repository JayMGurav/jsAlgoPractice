// str : Hello this is a string
// output : string a is this Hello

function strReverse(str) {
  let newStr = str.split(" ").reverse().join(" ");
  return newStr;
}


console.log(strReverse("Hello this is a string"));