import * as validators from 'vuelidate/lib/validators'
import * as common from 'vuelidate/lib/validators/common'

// 用于判断对象类型
function typeOf (obj) {
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

function transformValidation (validation) {
  var obj = {}
  for (let name in validation) {
    let validator = validation[name]
    obj[name] = {}
    for (let k in validator) {
      if (typeOf(validator[k]) === 'object') {
        validation[name] = transformValidation(validation[name])
        break
      }

      if (!validators[k]) continue
      obj[name][k] = validator[k] === true ? validators[k] : validators[k](validator[k])
    }
  }
  return obj
}

validators.regex = function (regex) {
  return common.regex('regex', regex)
}

export {
  validators,
  common,
  transformValidation
}
