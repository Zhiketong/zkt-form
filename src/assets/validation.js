export default {
  input: {
    // required: true, // 必须设置为true
    regex: /\d{3}-\d{7}/
  },
  number: {
    between: [10, 20]
  },
  number2: {
    compare: ['>', 'number']
  },
  url: {
    required: true,
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
