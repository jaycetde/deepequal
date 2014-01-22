# congruent

Deep comparison of two variables

This is different from [deep-equal](https://github.com/substack/node-deep-equal) in that it will compare
Buffers, Regular Expressions, and NaN (In my opinion, NaN should equal NaN)

```javascript

var congruent = require('congruent');

congruent([1, 2, 3], new Array(1, 2, 3));
// true;

congruent(NaN, NaN);
// true;

congruent({ a: [1, 2, 3] }, { a: [1, 3, 2] });
// false;

```

## congruent(a, b, strict)

* strict - Use strict comparison (===) between primitives (Boolean, String, Number) (default: false)

## Installation

```bash
npm install congruent
```