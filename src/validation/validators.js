import * as validators from 'vuelidate/lib/validators'
import * as common from 'vuelidate/lib/validators/common'

// helpers不是真正的validator，会导致转换错误
delete validators.helpers

function regex(regex) {
  return common.regex('regex', regex)
}

function compare(operator, prop, label) {
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

export default {
  ...validators,
  regex,
  compare
}