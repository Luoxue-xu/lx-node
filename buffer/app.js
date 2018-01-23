/**
 * Buffer对象是Node处理二进制数据的一个接口。它是Node原生提供的全局对象，可以直接使用，不需要require('buffer')
 */


/**
 * Buffer.isEncoding方法返回一个布尔值，表示Buffer实例是否为指定编码
 */
// console.log(Buffer.isEncoding('utf8')) // true


/**
 * Buffer.isBuffer方法接受一个对象作为参数，返回一个布尔值，表示该对象是否为Buffer实例
 */
// const buffer = new Buffer('hello')
// console.log(Buffer.isBuffer(buffer)) // true
// console.log(Buffer.isBuffer(Date)) // false


/**
 * Buffer.byteLength方法返回字符串实际占据的字节长度，默认编码方式为utf8
 */
// console.log(Buffer.byteLength('hello')) // 5


/**
 * Buffer.concat方法将一组Buffer对象合并为一个Buffer对象
 * 如果Buffer.concat的参数数组只有一个成员，就直接返回该成员。如果有多个成员，就返回一个多个成员合并的新Buffer对象
 * Buffer.concat([...], length) length 指定合并后Buffer对象的总长度
 */
// const hello = new Buffer('hello'),
//       dx = new Buffer(' '),
//       name = new Buffer('luoxue')
// console.log(Buffer.concat([hello]).toString()) // hello
// console.log(Buffer.concat([hello, dx, name]).toString()) // hello luoxue


/**
 * length属性返回Buffer对象所占据的内存长度。注意，这个值与Buffer对象的内容无关
 */
// const name = new Buffer('luoxue')
// console.log(name.length)


/**
 * value 写入的内容
 * startIndex 开始写入的索引值
 * code 字符编码
 * 设置对应索引值对应的值，会替换掉原有的值，超出原有字符长度，则不再替换
 * buffer.write(value, startIndex, code)
 */

//  const name = new Buffer('luoxue')
//  name.write(':', 2) // 

//  console.log(name.toString()) // lu:xue



/**
 * slice方法返回一个按照指定位置、从原对象切割出来的Buffer实例。它的两个参数分别为切割的起始位置和终止位置
 * 包括起始位置的值，不包括结束位置的值
 * buffer.slice(startIndex, endIndex)
 */

// const name = new Buffer('hello luoxue')
// const myname = name.slice(6, 9)

// console.log(myname.toString()) // luo


/**
 * 照指定编码（默认为utf8），返回指定位置内存的内容，转为字符串，省略所有参数则默认以utf8编码转换所有的内容
 * buffer.toString(code, startIndex, endIndex)
 */

// const name = new Buffer('luoxue')
// console.log(name.toString()) // luoxue
// console.log(name.toString('utf8')) // luoxue
// console.log(name.toString('utf8', 2, 3)) // o


/**
 * toJSON方法将Buffer实例转为JSON对象。如果JSON.stringify方法调用Buffer实例，默认会先调用toJSON方法
 * buffer.toJSON()
 */

const name = new Buffer('luoxue')
const json = JSON.stringify(name)
const json1 = name.toJSON()