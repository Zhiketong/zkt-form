const messages = {
  required: '该字段必须填写',
  requiredIf: '该字段必须填写',
  requiredUnless: '该字段必须填写',
  email: '请填写正确的邮箱',
  url: '请填写正确的网址',
  ipAddress: '请填写正确的IP地址',
  macAddress: '请填写正确的MAC地址',
  alpha: '该字段只能填写字母',
  numberic: '该字段只能填写数字',
  integer: '该字段只能填写整数',
  decimal: '该字段只能填写小数数',
  alphaNum: '该字段只能填写字母和数字',
  minLength: '该字段不能少于${min}个字符',
  maxLength: '该字段不能多于${max}个字符',
  minValue: '该字段不能小于${min}',
  maxValue: '该字段不能大于${max}',
  sameAs: '该字段必须和${sameAs}相等',
  regex: '该字段格式错误',
  between: '该字段值必须介于${min}到${max}之间',
  compare: '该字段值必须${operator}${compare}字段值'
}

// message filter
function message (validation) {
  var message = ''
  for(let k in validation) {
    if (k.indexOf('$') == -1 && !validation[k]) {
      message = messages[k] || ''
      message = message.replace(/\$\{(.*?)\}/g, function (m, s) {
        return validation.$params[k][s]
      })
      break
    }
  }
  return message
}

export default message
