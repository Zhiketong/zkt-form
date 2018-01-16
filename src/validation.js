export default {
  input: {
    required: true // 必须设置为true
  },
  textarea: {
    minLength: 4
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
    required: true
  },
  password: {
    required: true
  },
  repeatPasword: {
    required: true,
    sameAs: 'password'
  }
}
