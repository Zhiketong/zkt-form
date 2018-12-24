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

function operatorTranslate (operator) {
  switch (operator) {
    case '>':
      return '大于'
      break
    case '>=':
      return '大于等于'
      break
    case '<':
      return '小于'
      break
    case '<=':
      return '小于等于'
      break
    default:
      console.warn('未知的操作符')
      return false
  }
}

validators.regex = function (regex) {
  return common.regex('regex', regex)
}

validators.compare = function (operator, prop, label) {
  var that = this
  return common.withParams({
    type: 'compare',
    compare: label,
    operator: operatorTranslate(operator)
  }, function (value, parentVm) {
    var value = Number(value)
    var result = Number(common.ref(prop, that, parentVm))
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
