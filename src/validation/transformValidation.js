import  typeOf from '../utils/typeOf'

function transformValidation (validation, validators) {
  var obj = {}
  for (let name in validation) {
    let validator = validation[name]
    obj[name] = {}
    for (let k in validator) {
      var val = validator[k]
      if (typeOf(val) === 'object') {
        validation[name] = transformValidation(validation[name], val)
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

export default transformValidation
