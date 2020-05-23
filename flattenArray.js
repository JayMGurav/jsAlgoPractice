// arr = [1,2,[3,4],[5,[6,7]]]
// output = [1,2,3,4,5,6,7]


function flattenArray(arr) {
  // if array item id array then again flatten it
  //  else just push it to accumulator
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      // join two arrays acc with the one returne by flattenArray
      acc = acc.concat(flattenArray(item))
      return acc;
    } else {
      acc.push(item);
    }
    return acc;
  },[])
}


console.log(flattenArray([1,2,[3,4],[5,[6,7]]]))