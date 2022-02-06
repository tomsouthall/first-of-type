import firstOfType from '../src/index'

test('finds the sole string value in an array of numbers', () => {
  const arr = [1, 2, 3, 'foobar', 4, 5]
  expect(firstOfType(arr, 'string')).toBe('foobar')
})

test('finds the first string value in an array containing multiple strings', () => {
  const arr = [1, 2, 3, 'foo', 'bar', 4, 5]
  expect(firstOfType(arr, 'string')).toBe('foo')
})

test('returns undefined if no string exists in an array', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(firstOfType(arr, 'string')).toBeUndefined()
})

test('finds the sole string value in an object', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 'foobar',
    e: 4,
    f: 5
  }
  expect(firstOfType(obj, 'string')).toBe('foobar')
})

test('returns undefined if no string exists in an object', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
  }
  expect(firstOfType(obj, 'string')).toBeUndefined()
})

test('returns undefined if type is not recognised', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
  }
  expect(firstOfType(obj, 'foobar')).toBeUndefined()
})