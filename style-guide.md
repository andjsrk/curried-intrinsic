# Style Guide

## Rest Parameter
Rest parameters should be changed to a parameter which takes an array(e.g. `...elements: Array<T>` &rarr; `elements: Array<T>`).

## File Names
File names should be name of a method which is exported.

### Internal Files
Leading `_` is required for name of files which will be used internally.

## Instance Methods
Instance methods should be on directory `<class>`(e.g. `Array/map`).

## Static Methods
Static methods should be on directory `<class>/static`(e.g. `Number/static/parseInt`).

## Shorthands
Shorthands of methods should be on directory `<directory which has original method>/shorthand`(e.g. `Array/shorthand/map`, `Number/static/shorthand/parseInt`).

## Parameter Names
Parameter names should follow [MDN Reference](https://developer.mozilla.org/docs/Web/JavaScript/Reference) by default.
If you think there is a better name, you can propose it.
