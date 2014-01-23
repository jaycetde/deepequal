# deepequal

Deep comparison of two variables

This is different from [deep-equal](https://github.com/substack/node-deep-equal) in that it will compare
Buffers, Regular Expressions, and NaN (In my opinion, NaN should equal NaN)

```javascript

var deepEqual = require('deepequal');

deepEqual([1, 2, 3], new Array(1, 2, 3));
// true;

deepEqual(NaN, NaN);
// true;

deepEqual({ a: [1, 2, 3] }, { a: [1, 3, 2] });
// false;

```

## deepEqual(a, b, strict)

* strict - Use strict comparison (===) between primitives (Boolean, String, Number) (default: false)

## Installation

```bash
npm install deepequal
```