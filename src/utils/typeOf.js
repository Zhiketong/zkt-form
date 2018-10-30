// 用于判断对象类型
export default function typeOf (obj) {
  var class2type = {}
  'Boolean Number String Function Array Date RegExp Object Error'
  .split(' ')
    .forEach(function (e, i) {
      class2type['[object ' + e + ']'] = e.toLowerCase()
    })
  if (obj == null) {
    return String(obj)
  }
  return typeof obj === 'object' || typeof obj === 'function' ? class2type[class2type.toString.call(obj)] || 'object' : typeof obj
}
