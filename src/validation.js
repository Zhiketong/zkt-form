import Form from './components/Form.vue'
export default {
  input: {
    required: Form.validators.required
  },
  textarea: {
    minLength: Form.validators.minLength(4)
  },
  nested: {
    number11: {
      required: Form.validators.required,
    },
    number22: {
      required: Form.validators.required
    }
  }
}
