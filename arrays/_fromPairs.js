const inputArray = [
  ['a', 1],
  ['b', 2],
];

function nativeFromPairs(array) {
  return array.reduce(
    (acc, current) => ((acc[current[0]] = current[1]), acc),
    {}
  );
}

console.log(nativeFromPairs(inputArray));

// Native ES 2019 method
console.log(Object.fromEntries(inputArray));
