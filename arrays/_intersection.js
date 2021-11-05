// Returns an array that is the intersection of all the arrays. Each value in the result is present in each of the arrays
let inputArray = [
  [1, 2, 3],
  [101, 2, 1, 10],
  [2, 1],
];

function getIntersectionFromArrays(array) {
  return array.reduce((acc, current) =>
    acc.filter((value) => current.includes(value))
  );
}

console.log(getIntersectionFromArrays(inputArray));
