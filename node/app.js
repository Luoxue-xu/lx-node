/**
 * Node约定，如果某个函数需要回调函数作为参数，则回调函数是最后一个参数，回调函数本身的第一个参数，约定为上一步传入的错误对象，如果没有错误，则传入null
 * @param {Number} value 传入的值 
 * @param {Function} callback 回调函数 
 */
// const go = (value, callback) => {
//     if(value < 5) {
//         callback(null, 'value is less 5')
//     }else {
//         callback(new Error('value is then 5'))
//     }
// }

/**
 * @param {Error} error 传入的错误对象
 * @param {any} value 传入的值
 */
// const callback = (error, value) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(value)
//     }
// }

// go(10, callback) // Error: value is then 5

// console.log(global) // Node所在的全局环境
// console.log(process) // Node所处的当前进程

// console.log(__filename) // 指向当前运行的脚本文件名
// console.log(__dirname) // 指向当前运行的脚本所在的目录

/**
 * NodeJs核心模块
 * http：提供HTTP服务器功能
 * url：解析URL
 * fs：与文件系统交互
 * querystring：解析URL的查询字符串
 * child_process：新建子进程
 * util：提供一系列实用小工具
 * path：处理文件路径
 * crypto：提供加密和解密功能，基本上是对OpenSSL的包装
 * 核心模块总是最优先加载的。如果你自己写了一个HTTP模块，require('http')加载的还是核心模块
 * module变量是整个模块文件的顶层变量，它的exports属性就是模块向外输出的接口
 */