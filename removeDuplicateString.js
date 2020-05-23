// str : This is a a string string
// output : This string has duplicate substring


function removeDuplicateString(str) {
  let stringArray = str.split(" "); // create array from string
  let strArrSet = new Set(stringArray); // create a new Set as Set has unique elements
  let newString = [...strArrSet].join(" "); // create array from Set properities and join to string
  return newString;
}

console.log(removeDuplicateString("This is a a string string"))