/**
 * Imports
 */

import test from 'tape'
import toPromise from '../src'
import is from '@weo-edu/is'

/**
 * Tests
 */

test('given promise should return same promise', (t) => {
  var promise = Promise.resolve(1)
  t.equal(promise, toPromise(promise))
  t.end()
})

test('given object should return promise', (t) => {
  t.ok(is.promise(toPromise(1)), 'isPromise')
  t.end()
})

test('given array should return promise all', (t) => {
  var arr = [1, 2, 3]
  t.ok(is.promise(toPromise(arr)), 'isPromise')
  t.end()
})
