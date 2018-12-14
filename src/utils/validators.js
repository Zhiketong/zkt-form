import * as validators from 'vuelidate/lib/validators'
import * as common from 'vuelidate/lib/validators/common'
import  typeOf from './typeOf'

function transformValidation (validation) {
  var obj = {}
  for (let name in validation) {
    let validator = validation[name]
    obj[name] = {}
    for (let k in validator) {
      var val = validator[k]
      if (typeOf(val) === 'object') {
        validation[name] = transformValidation(validation[name])
        break
      }
      let fn = validators[k]
      if (!fn) {
        if (typeOf(val) === 'function') {
          obj[name][k] = val
        }
        continue
      }
      if (val === true) {
        obj[name][k] = fn
      } else if (typeOf(val) === 'array') {
        obj[name][k] = fn.apply(this, val)
      } else {
        obj[name][k] = fn.apply(this, [val])
      }
    }
  }
  return obj
}

validators.regex = function (regex) {
  return common.regex('regex', regex)
}

validators.compare = function (operator, prop) {
  var that = this
  return common.withParams({
    type: 'compare',
    compare: prop,
    operator: operator
  }, function (value, parentVm) {
    var result = common.ref(prop, that, parentVm)
    switch (operator) {
      case '>':
        return value > result
        break
      case '<':
        return value < result
        break
      case '<=':
        return value <= result
        break
        case '>=':
          return value >= result
          break
      default:
        console.warn('未知的操作符')
        return false
    }
  })
}

export {
  validators,
  common,
  transformValidation
}
