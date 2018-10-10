export default {
  input: {
    // required: true, // 必须设置为true
    regex: /\d{4}-\d{7}/
  },
  number: {
    required: true,
    decimal: true,
    minValue: 10,
    maxValue: 20
  },
  url: {
    url: true
  },
  textarea: {
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
