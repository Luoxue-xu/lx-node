/**
 * fs是filesystem的缩写，该模块提供本地文件的读写能力，基本上是POSIX文件操作命令的简单包装。但是，这个模块几乎对所有操作提供异步和同步两种操作方式，供开发者选择
 */

const fs = require('fs')

 /**
  * readFile 方法用于异步读取数据
  * readFile方法的第一个参数是文件的路径，可以是绝对路径，也可以是相对路径
  * 注意，如果是相对路径，是相对于当前进程所在的路径(process.cwd())，而不是相对于当前脚本所在的路径
  * readFile方法的第二个参数是读取完成后的回调函数。该函数的第一个参数是发生错误时的错误对象，第二个参数是代表文件内容的Buffer实例
  */
// fs.readFile('../images/girl_0.jpg', (err, buffer) => {
//     if(err) {
//         throw err // 有异常则抛出
//     }else {
//         console.log(buffer)
//     }
// })


/**
 * readFileSync方法的第一个参数是文件路径，第二个参数可以是一个表示配置的对象，也可以是一个表示文本文件编码的字符串
 * 默认的配置对象是{ encoding: null, flag: 'r' }，即文件编码默认为null，读取模式默认为r（只读）
 * 如果第二个参数不指定编码（encoding），readFileSync方法返回一个Buffer实例，否则返回的是一个字符串
 */
// const text = fs.readFileSync('../file/user.txt', 'utf8')
// text.split(/\r?\n/).forEach(line => {
//   console.log(line)
// })


/**
 * writeFile方法用于异步写入文件
 * 第一个参数是写入的文件名，第二个参数是写入的字符串，第三个参数是回调函数
 * 回调函数前面，还可以再加一个参数，表示写入字符串的编码（默认是utf8）
 */
// fs.writeFile('../file/user.txt', '春眠不觉晓，处处闻啼鸟', err => {
//     if(err) {
//         throw err
//     }
// })



/**
 * writeFileSync方法用于同步写入文件
 */
// const text = fs.writeFileSync('../file/user.txt', '春眠不觉晓，处处闻啼鸟，夜来风雨声，花落知多少')



/**
 * exists(path, callback) 异步判断一个文件是否存在
 * 返回 Boolean 值，true 表示存在该文件，false 表示不存在
 * open 方法默认会自动检测，所以 open 之前无须调用 exists
 */
// fs.exists('./file/user.txt', exists => {
//    console.log(exists) // false
// })



/**
 * existsSync 同步判断一个文件是否存在
 */
// const fileUrl = '../file/user.txt'
// const hasFile = fs.existsSync(fileUrl) // true
// if(hasFile) {
//     fs.writeFile(fileUrl, 'Hello!') // 写入成功
// }



/**
 * 用于新建目录，不是新建文件
 * mkdir(fileUrl, power, callback)
 * 接受三个参数，第一个是目录名，第二个是权限值，第三个是回调函数
 */
// fs.mkdir('../file/book', 0777, err => {
//     if(err) {
//       throw err
//     }
// })



/**
 * mkdirSync 新建目录的同步方法
 */
// fs.mkdirSync('../file/books', 0777)



/**
 * 读取文件内容
 * readFile(fileName, code, callback) 异步读取文件资源
 * 第一个参数是文件名，第二个参数是文件编码，第三个参数是回调函数
 * 可用的文件编码包括“ascii”、“utf8”和“base64”
 * 如果没有指定文件编码，返回的是原始的缓存二进制数据，这时需要调用buffer对象的toString方法，将其转为字符串
 * 尽量不要同时发起多个文件读取请求，不然会把系统资源耗尽
 */
// const fileUrl = '../file/user.txt'
// fs.readFile(fileUrl, 'utf8', (err, data) => {
//   if(err) {
//     throw err
//   }
//   console.log(data)
// })



/**
 * 读取文件内容的同步方法
 * readFileSnyc(fileName, code)
 * 对于流量较大的服务器，最好还是采用异步操作，因为同步操作时，只有前一个操作结束，才会开始后一个操作，如果某个操作特别耗时（常常发生在读写数据时），会导致整个程序停顿
 */
// const data = fs.readFileSync('../file/user.txt', 'utf8')
// console.log(data)



/**
 * readdir
 * 用于读取目录，异步
 */
// fs.readdir('../file', (err, files) => {
//     if(err) {
//         throw err
//     }
//     console.log(files)
//     files.forEach(file => {
//         fs.readFile(`../file/${file}`, 'utf8', (err, data) => {
//             console.log(data)
//         })
//     })
// })



/**
 * readdirSnyc 读取目录的同步方法
 */
// const files = fs.readdirSnyc('../file')



/**
 * stat方法的参数是一个文件或目录，它产生一个对象，该对象包含了该文件或目录的具体信息。我们往往通过该方法，判断正在处理的到底是一个文件，还是一个目录
 * stat
 */
// fs.stat('../file', (err, data) => {
//     if(err) throw err

//     console.log(data)
//     console.log(data.isFile()) // 判断是否是文件 false
//     console.log(data.isDirectory()) // 判断是否是目录 true
// })




/**
 * 监听一个文件，如果该文件发生变化，就会自动触发回调函数
 * watchFile(fileName, callback(curr, prev)) // curr 当前的文件stat对象 prev 修改前的stat对象
 * unwatchfile方法用于解除对文件的监听
 */
// fs.watchFile('../file/user.txt', (curr, prev) => {
//     console.log(curr.mtime)
//     console.log(prev.mtime)
// })

// fs.writeFile('../file/user.txt', '落雪', (err) => {
//     if(err) throw err
// })









/**
 * 异步删除文件，异步的方法不能保证执行顺序
 * file 文件路径
 * callback 回调函数，第一个参数默认是异常
 * unlink(file, callback)
 */
// fs.unlink('../images/girl_0.jpg', err => {
//     if(err) {
//         throw err
//     }
//     console.log('成功删除../images/girl_0.jpg')
// })


/**
 * 在繁忙的进程中，建议使用异步的方法。 同步的方法会阻塞整个进程，直到完成（停止所有连接）
 * 同步删除文件
 * unlinkSync
 */
// try{
//     fs.unlinkSync('../images/girl_0.jpg')
//     console.log('成功删除../images/girl_0.jpg')
// }catch(err) {
//     throw Error(err)
// }



