/**
 * events模块
 * Event Emitter 是一个接口，可以在任何对象上部署。这个接口由events模块提供
 */

const events = require('events')

/**
 * events模块的EventEmitter是一个构造函数，可以用来生成事件发生器的实例emitter
 * 然后，事件发生器的实例方法on用来监听事件，实例方法emit用来发出事件
 * EventEmitter对象实例emitter就是消息中心。通过on方法为playEvent事件指定回调函数，通过emit方法触发playEvent事件
 * EventEmitter对象的事件触发和监听是同步的，即只有事件的回调函数执行以后，函数fn才会继续执行
 */
// const EventEmitter = events.EventEmitter
// const emitter = new EventEmitter()

// emitter.on('playEvent', event => {
//     console.log('playevent')
// })

// const fn = () => {
//     console.log(123)
//     emitter.emit('playEvent') // 发出事件
//     console.log(456)
// }

// fn() // 123 playEvent 456



/**
 * 新建了一个构造函数Dog，然后让其继承EventEmitter，因此Dog就拥有了EventEmitter的接口。最后，为Dog的实例指定wang事件的监听函数，再使用EventEmitter的emit方法，触发wang事件
 */

// const EventEmitter = events.EventEmitter

// class Dog extends EventEmitter {
//      constructor(name) {
//          super()
//          this.name = name
//      }
//  }

// /**
//  *  构造函数继承的其他写法
//  * function() Dog {} Dog.prototype.__proto__ = EventEmitter.prototype
//  * function() Dog {} Dog.prototype = Object.create(EventEmitter.prototype)
//  */

// const dog = new Dog('阿黄')
// dog.on('wang', () => {
//     console.log(`${dog.name}: 汪汪汪`)
// })

// /**
//  * 每隔1000ms就会输出“阿黄：汪汪汪”
//  */
// setInterval(() => {
//     dog.emit('wang')
// }, 1000)



/**
 * 通过 util 模块的 inherits 方法来实现继承
 */

//  const util = require('util')
//  const EventEmitter = events.EventEmitter

//  class Book {
//      constructor(props) {
//          setTimeout(() => {
//              this.emit('open', props)
//          }, 0)
//          setTimeout(() => {
//              this.emit('close', props)
//          }, 5000)

//          this.on('newListener', listener => { // 每次触发事件，都会触发 newListener
//              console.log(`Event Listener: ${listener}`)
//          })
//      }
//  }

//  util.inherits(Book, EventEmitter)

// const book = new Book({
//     name: 'luoxue',
//     age: 15
// })

// book.on('open', props => {
//     console.log(`姓名：${props.name}, 年龄：${props.age}`)
// })

// book.on('close', props => {
//     console.log(`姓名：${props.name}, 年龄：${props.age}`)
// })



/**
 * Event Emitter 的实例方法如下:
 * emitter.on(name, f) 对事件name指定监听函数f
 * emitter.addListener(name, f) addListener是on方法的别名
 * emitter.once(name, f) 与on方法类似，但是监听函数f是一次性的，使用后自动移除
 * emitter.listeners(name) 返回一个数组，成员是事件name所有监听函数
 * emitter.removeListener(name, f) 移除事件name的监听函数f
 * emitter.removeAllListeners(name) 移除事件name的所有监听函数
 * 该方法返回一个EventEmitter对象，因此可以链式加载监听函数
 */


 /**
  * EventEmitter实例对象的emit方法，用来触发事件。它的第一个参数是事件名称，其余参数都会依次传入回调函数
  * emit(eventName, ...props)
  */

// const playEmit = new events.EventEmitter()

// playEmit.on('play', age =>{
//     console.log(`My age is ${age}`)
// })

// playEmit.emit('play', 18) // My age is 18



/**
 * once 方法类似 on 方法，但是 once 方法只触发一次，然后自动移除
 */

// const playEmit = new events.EventEmitter()

// playEmit.once('play', age => {
//     console.log(`My age is ${age}`) // 只会打印一次
// })

// setInterval(() => {
//     console.log(+new Date()) // 每隔 1000ms 就会打印
//     playEmit.emit('play', 18)
// }, 1000)



/**
 * 用于移除回调函数。它接受两个参数，第一个是事件名称，第二个是回调函数名称。这就是说，不能用于移除匿名函数
 * removeListener(eventName, callback)
 */

// const user = new events.EventEmitter()
// let num = 0

// const sendMsg = msg => {
//     console.log(`有新消息：${msg}`)
// }

// user.on('message', sendMsg)

// setInterval(() => {
//     num ++
//     if(num >= 10) {
//         user.removeListener('message', sendMsg) // 终止了对 message 事件上的 sendMsg 回调函数触发，可以用来模拟一次或多次的事件监听
//     }
//     user.emit('message', +new Date())
// }, 1000)



/**
 * Node默认允许同一个事件最多可以指定10个回调函数,超过10个回调函数，会发出一个警告
 * 用来设置最大可添加的回调函数，参数是数字
 * setMaxListeners(length)
 */
// const user = new events.EventEmitter()
// user.setMaxListeners(20)



 /**
  * 用来移除某个事件上所有的回调
  如果不带参数，则表示移除所有事件的所有回调函数
  * removeAllListeners(eventName)
  */
// const message = new events.EventEmitter()
// let num = 0

// message.on('send', msg => {
//     console.log('open')
// })

// message.on('send', msg => {
//     console.log('close')
// })

// message.on('send', msg => {
//     console.log('send')
// })

// setInterval(() => {
//     num ++
//     console.log(num)
//     if(num >= 5) {
//         message.removeAllListeners('send') // 清除 send 事件上的所有回调
//     }
//     message.emit('send', '发送消息')
// }, 3000)



/**
 * listeners方法接受一个事件名称作为参数，返回该事件所有回调函数组成的数组
 * listeners(eventName)
 */
// const message = new events.EventEmitter()

// message.on('send', props => {
//     message.removeAllListeners('send')
//     console.log(message.listeners('send')) // []
// })

// console.log(message.listeners('send')) // [[Function]]

// message.emit('send', '发送消息')



/**
 * 错误捕获
 * 当捕获到错误消息之后，后面的监听回调事件不会再执行
 * try{} catch {}
 */
// const message = new events.EventEmitter()

// message.on('send', props => {
//     console.log(`${props.name}: ${props.msg}`) // luoxue: 测试消息
// })

// message.on('send', props => {
//     throw Error('send Error!')
// })

// message.on('send', props => {
//     console.log(`${props.name}: ${props.msg}...`) // 不打印
// })

// message.emit('send', { name: 'luoxue', msg: '测试消息' })

// try{
//     message.emit('send', { name: 'luoxue', msg: '测试消息' })
// } catch(err) {
//     console.error(`${err}`) // send Error
// }



/**
 * 事件类型
 * newListener事件：添加新的回调函数时触发
 * removeListener事件：移除回调时触发
 */

const message = new events.EventEmitter()

const callback = props => {
    console.log(`${props.name}: ${props.age}`)
}

message.on('newListener', eventName => {
    console.log(eventName) // send
})

message.on('removeListener', eventName => {
    console.log(eventName)
})

message.on('send', callback)

message.removeListener('send', callback)
// removeListener
// send
// send