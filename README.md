# curried-intrinsic
Curried intrinsic functions

# Installation
```
npm install curried-intrinsic
```

# Goals
- [x] [`Object`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [x] [`Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [x] [`String`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)
- [x] [`Number`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [x] [`Boolean`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [x] [`Math`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [x] [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [x] [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [x] [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [ ] [`Intl`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [x] Operators
- [ ] [Spread Syntax](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

# Why The Package Doesn't include...

## `thisArg` Parameter
Optional parameter `thisArg` will be omitted from most functions that contains `thisArg` since it can be replaced with [`Function.prototype.bind()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).

## `.valueOf()`
in [TS Handbook](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html), TS Team describes that `Number`, `String`, etc, should not be used because those are almost never used appropriately. \
This means most cases are needing primitive values, and `.valueOf()` is useless for primitives, so I don't think `.valueOf()` is necessary.

# Contributing

## Style Guide
See [style-guide.md](./style-guide.md)

# Special Thanks
- [Lotinex](https://github.com/Lotinex) - Helped making some decisions about design by discussion
