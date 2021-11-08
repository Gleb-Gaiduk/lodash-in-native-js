// Removes all provided values from the given array using strict equality for comparisons, i.e. ===.

const testArr = [1, 3, 4, 5, 4, 1, 12, 32, 53];

function nativePull(arr, ...valuesToRemove) {
  const removeSet = new Set(valuesToRemove);
  return arr.filter((value) => !removeSet.has(value));
}

console.log(nativePull(testArr, 1, 4, 1, 12, 12, 12));
