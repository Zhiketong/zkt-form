import * as validators from 'vuelidate/lib/validators'

// 用于判断对象类型
export function typeOf (obj) {
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

// 转换校验配置规则，把配置的值转换成函数调用
export function transformValidation (validation) {
  for (let name in validation) {
    let validator = validation[name]
    for (let k in validator) {
      if (typeOf(validator[k]) === 'object') {
        validation[name] = transformValidation(validation[name])
        break
      }
      if (!validators[k]) continue
      validator[k] = validator[k] === true ? validators[k] : validators[k](validator[k])
    }
  }
  return validation
}
