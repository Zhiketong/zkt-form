<template>
  <div id="app">
    <div class="col-md-6">
        <textarea class="form-control" rows="30" >{{model}}</textarea>
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
import Form from './ExForm.vue'
import fields from './fields'
import validation from './validation'
export default {
  name: 'app',
  components: {
    Form
  },
  data () {
    return {
      model: {
        input: 'input type text',
        number: 11,
        textarea: 'hello \n textarea',
        checkbox: ['1'],
        truefalse: true,
        radio: '1',
        select: '2',
        'static': '<h3>请注意</h3>这里可以输入<b>HTML</b>哦<br  />哦啦啦换行',
        nested: {
          number11: 22,
          number22: 33
        }
      },
      fields: fields,
      validation: validation
    }
  },
  methods: {
    onSubmit () {
      console.log('onSubmit')
    }
  },
  mounted () {
    console.log(this.$refs.form)
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
