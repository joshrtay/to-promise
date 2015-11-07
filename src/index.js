/**
 * Imports
 */

import is from '@weo-edu/is'

/**
 * to-promise
 */

 function toPromise (obj) {
   if (is.promise(obj)) return obj
   if (is.array(obj)) return Promise.all(obj)
   return Promise.resolve(obj)
 }

/**
 * Exports
 */

export default toPromise
