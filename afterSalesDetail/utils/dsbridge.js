var dsBridge = require('dsbridge')
export default {
  callmethod (name, data, callback) { //  调用app方法
    callback(dsBridge.call(name, data))
  },
  registermethod (tag, callback) { //  定义方法给app调用
    dsBridge.register(tag, callback)
  }
}
