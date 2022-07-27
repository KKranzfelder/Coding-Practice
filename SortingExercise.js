function merge(
  arr1,
  arr2,
  func = (a, b) => {
    return a - b;
  }
) {
  let mergedArr = arr1.slice();
  let max = arr1.length + arr2.length;
  let mergeIdx = 0;
  let currIdx = 0;

  while (mergedArr.length < max) {
    let value = arr2[currIdx];
    let placed = false;

    while (!placed) {
      if (mergeIdx === mergedArr.length) {
        mergedArr.push(value);
        placed = true;
        currIdx++;
        continue;
      }
      if (func(value, mergedArr[mergeIdx]) < 0) {
        mergedArr.splice(mergeIdx, 0, value);
        placed = true;
        currIdx++;
        continue;
      }
      mergeIdx++;
    }
  }

  return mergedArr;
}

var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];

console.log(arr1, arr2, merge(arr1, arr2));

var arr3 = [-2, -1, 0, 4, 5, 6];
var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

console.log(arr3, arr4, merge(arr3, arr4));
