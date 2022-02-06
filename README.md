# first-of-type

## Introduction

A utility function that returns the first value in an array or object which matches the specified type.

This can be useful in situations where the keys of an object or order of array values is unknown but you know that a field of a certain type is likely to be present.

## Installation

```shell
$ npm install first-of-type
```

## Usage

```js
import firstOfType from 'first-of-type'

firstOfType(obj, 'string')
```

## Examples

```js
// Return the first string element in an array
firstOfType([1, 2, 3, 'foobar', 4, 5], 'string')
=> 'foobar'
```

```js
// Return the first string element in an array
// containing multiple string elements
firstOfType([1, 2, 3, 'foo', 'bar', 4, 5], 'string')
=> 'foo'
```

```js
// When no element with a type of string exists
firstOfType([1, 2, 3, 4, 5], 'string')
=> undefined
```

```js
// Return the first string property found in an object
firstOfType({a: 1, b: 2, c: 'foobar', d: 3}, 'string')
=> 'foobar'
```

```js
// Invalid type specified
firstOfType({a: 1, b: 2, c: 'foobar', d: 3}, 'not-a-type')
=> undefined
```

## To test

```shell
$ npm run test
```

## To build

```shell
$ npm run build
```