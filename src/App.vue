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
import fields from './assets/fields'
import validation from './assets/validation'
import model from './assets/model'
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
    var checkbox = this.$refs.form.getField('checkbox')
    var level1 = this.$refs.form.getField('level1')
    var level2 = this.$refs.form.getField('level2')
    checkbox.$on('change', () => {
      console.log('checkbox change')
    })
    level1.$on('change', () => {
      level2.$emit('update:options', [{
        label: '二级1',
        value: '1'
      },
      {
        label: '二级2',
        value: '2'
      }]
    )
    })
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
