export default {
  input: {
    required: true // 必须设置为true
  },
  number: {
    minValue: 10,
    maxValue: 20
  },
  textarea: {
    minLength: 4,
    maxLength: 16
  },
  nested: {
    number11: {
      required: true
    },
    number22: {
      required: true
    }
  },
  user: {
    required: true,
    email: true
  },
  site: {
    url: true
  },
  password: {
    required: true
  },
  repeatPasword: {
    required: true,
    sameAs: 'password'
  }
}
