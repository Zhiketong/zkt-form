<template>
  <div id="app">
    <div class="col-md-6">
      <Form
        class="form-horizontal"
        :fields="fields"
        :validation="validation"
        :triggers="triggers"
        :model="model"
        ref="form"
        v-model="model"
        @submit="onSubmit">
      </Form>
    </div>
    <div class="col-md-6">
        <h3>表单值</h3>
        <pre>{{model}}</pre>
    </div>
    <div class="col-md-6">
      <h3>校验规则</h3>
      <pre>{{validation}}</pre>
    </div>
    <div class="col-md-6">
      <h3>控件设置</h3>
      <pre>{{fields}}</pre>
    </div>
    <div class="col-md-6">
      <h3>触发器</h3>
      <pre>{{triggers}}</pre>
    </div>
  </div>
</template>

<script>
import Form from './components'
import fields from './assets/fields'
import validation from './assets/validation'
import model from './assets/model'
import triggers from'./assets/triggers'
export default {
  name: 'app',
  components: {
    Form
  },
  data () {
    return {
      model,
      fields,
      validation,
      triggers
    }
  },
  methods: {
    onSubmit () {
      console.log('onSubmit')
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
