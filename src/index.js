/**
 * Imports
 */

import co from 'co'

/**
 * to-promise
 */

function toPromise (v) {
  return co(function * () {
    return yield v
  })
}

/**
 * Exports
 */

export default toPromise
