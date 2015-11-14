/**
 * Imports
 */

import test from 'tape'
import toPromise from '../src'

/**
 * Tests
 */

test('given promise resolve promise', (t) => {
  var promise = Promise.resolve(1)
  toPromise(promise).then(function (res) {
    t.equal(res, 1)
    t.end()
  })
})

test('given array should resolve promise', (t) => {
  var arr = [1, 2, 3]
  toPromise(arr).then(function (res) {
    t.deepEqual(res, arr)
    t.end()
  })
})

test('given generator should resolve promise', (t) => {
  toPromise(function * () {
    return yield Promise.resolve(1)
  }).then(function (res) {
    t.equal(res, 1)
    t.end()
  })
})
