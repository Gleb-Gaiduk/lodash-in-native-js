const compact = require('lodash/compact');

// Creates an array with all falsy values removed.
const lodashResult = compact([0, 1, false, 2, '', 3]);
console.log(lodashResult);

const nativeCompact = (array) => array.filter(Boolean);
console.log(nativeCompact([0, 1, false, 2, '', 3]));
