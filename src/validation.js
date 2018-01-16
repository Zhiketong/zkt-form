export default {
  input: {
    required: true // 必须设置为true
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
    requiredIf: true
  },
  password: {
    required: true
  },
  repeatPasword: {
    required: true,
    sameAs: 'password'
  }
}
