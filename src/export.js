import Form from './Form.vue'

var req = require.context('./components', true)
req.keys().forEach((key) => {
  var component = req(key).default
  Form.components[component.name] = component
})

export default Form
