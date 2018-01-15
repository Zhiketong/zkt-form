<template>
  <div id="app">
    <div class="col-md-4">
        <textarea class="form-control" rows="10" v-model="modelText"></textarea>
    </div>
    <div class="col-md-8">
      <Form
        class="form-horizontal"
        :fields="fields"
        ref="form"
        v-model="model"
        @submit.native.prevent="onSubmit">
        <!-- <button type="submit" slot="footer">button</button> -->
      </Form>
    </div>

  </div>
</template>

<script>
import Form from './components/Form.vue'
import fields from './fields'
export default {
  name: 'app',
  components: {
    Form
  },
  computed: {
    modelText: {
      get () {
        return JSON.stringify(this.model)
      },
      set (text) {
        this.model = JSON.parse(text)
      }
    }
  },
  data () {
    return {
      model: {
        input: 'input type text',
        number: 11,
        textarea: 'hello \n textarea',
        checkbox: ['1'],
        radio: '1',
        select: '2',
        'static': '<h3>请注意</h3>这里可以输入<b>HTML</b>哦<br  />哦啦啦换行',
        nested: {
          number11: 22,
          number22: 33
        }
      },
      fields: fields
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
