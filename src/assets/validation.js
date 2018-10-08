export default {
  input: {
    required: true // 必须设置为true
  },
  number: {
    required: true,
    decimal: true,
    // minValue: 10,
    // maxValue: 20
  },
  url: {
    url: true
  },
  textarea: {
    requiredIf: 'user',
    minLength: 4,
    maxLength: 16
  },
  password: {
    required: true
  },
  repeatPassword: {
    requiredIf: 'password',
    sameAs: 'password'
  },
  checkbox: {
    required: true
  }
}
