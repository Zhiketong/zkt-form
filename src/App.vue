<template>
  <div id="app">
    <div class="col-md-6">
        <h3>表单值</h3>
        <pre>{{model}}</pre>
        <h3>校验规则</h3>
        <pre>{{validation}}</pre>
        <h3>控件设置</h3>
        <pre>{{fields}}</pre>
    </div>
    <div class="col-md-6">
      <Form
        class="form-horizontal"
        :fields="fields"
        :validation="validation"
        ref="form"
        v-model="model"
        @submit.native.prevent="onSubmit">
        <div class="alert alert-success" slot="header">Form Header</div>
        <div class="alert alert-warning" slot="footer">Form Footer</div>
      </Form>
    </div>

  </div>
</template>

<script>
import Form from './components'
import fields from './fields'
import validation from './validation'
import model from './model'
export default {
  name: 'app',
  components: {
    Form
  },
  data () {
    return {
      model: model,
      fields: fields,
      validation: validation
    }
  },
  methods: {
    onSubmit () {
      console.log('onSubmit')
      var valid = this.$refs.form.validate()
      console.log(valid)
    }
  },
  mounted () {
    console.log(this.$refs.form)
    var input = this.$refs.form.getField('input')
    console.log(input)
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
