const assert = require('assert')

const add = (a, b) => a + b
/**
 * value为true时，不会有任何提示，返回undefined
 * message为false时，会抛出一个错误，该错误的提示信息就是第二个参数设定的字符串
 * asset(value, message)
 */

// assert(add(1, 2) === 3, '1 + 2 = 3') // 没有任何提示
// assert(add(1, 2) === 4, '1 + 2 = 3') // AssertionError: 1 + 2 = 3
// assert(add(1, 2) != 5, '1 + 2 = 3') // 没有任何提示



/**
 * assert.ok 和 assert 是一样的
 */
// assert.ok(add(1, 2) === 4, '1 + 2 = 3')



/**
 * actual是实际值，expected是预期值，message是错误的提示信息
 * assert.equal(actual, expected, message)
 * equal方法内部使用的是相等运算符（==），而不是严格运算符（===），进行比较运算
 */

// assert.equal(add(1, 2), 3, '1 + 2 = 3') // 没有任何提示
// assert.equal(add(1, 2), 4, '1 + 2 = 3') // AssertionError: 1 + 2 = 3


/**
 * 只有actual等于expected时，才会抛出错误
 * assert.notEqual(actual, expected, message)
 * notEqual方法内部使用不相等运算符（!=），而不是严格不相等运算符（!==），进行比较运算
 */
// assert.notEqual(add(1, 2), 4, '1 + 2 = 4') // 没有任何提示


/**
 * deepEqual方法用来比较两个对象。actual和expected属性一一对应，且值都相等，就认为两个对象相等，否则抛出一个错误
 * assert.deepEqual(actual, expected, message)
 */

//  const lilei = {
//      name: 'luoxue',
//      age: 25
//  },
//  hanmeimei = {
//      name: 'luoxue',
//      age: 25
//  }

//  assert.deepEqual(lilei, hanmeimei, '这是一对名字都一样的双胞胎') // 没有任何提示



/**
 * 断言两个对象是否不相等
 * acutal和expected属性一一对应，且值都相等，则抛出错误
 * assert.notDeepEqual(acutal, expected, message)
 */

//  const lilei = {
//      name: 'luoxue',
//      age: 25
//  },
//  hanmeimei = {
//      name: 'luoxue',
//      age: 25
//  }
// assert.notDeepEqual(lilei, hanmeimei, '这是一对名字都一样的双胞胎') // AssertionError: 这是一对名字都一样的双胞胎



/**
 * strictEqual方法使用严格相等运算符（===），比较两个表达式
 * assert.strictEqual(actual, expected, message)
 */

// assert.strictEqual(1, '1', '这两个值不严格相等') // AssertionError: 这两个值不严格相等



/**
 * notStrictEqual方法使用严格不相等运算符（!==），比较两个表达式
 * assert.notStrictEqual(actual, expected, message)
 */
// assert.notStrictEqual(1, '1', '这两个值不严格相等') // 没有任何提示