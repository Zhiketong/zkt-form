<template>
  <div id="app">
    <div class="col-md-6">
      <Form
        class="form-horizontal"
        :fields="fields"
        :validation="validation"
        :triggers="triggers"
        ref="form"
        v-model="model"
        @click="onClick"
        @form-group-click="formGroupClick"
        @submit="onSubmit">
      </Form>
    </div>
    <div class="col-md-6">
      <ul class="nav nav-tabs" style="margin-bottom: 15px">
        <li :class="{active: tab==1}"><a href="" @click.prevent="changeTab(1)">表单值</a></li>
        <li :class="{active: tab==2}"><a href="" @click.prevent="changeTab(2)">校验规则</a></li>
        <li :class="{active: tab==3}"><a href="" @click.prevent="changeTab(3)">控件设置</a></li>
        <li :class="{active: tab==4}"><a href="" @click.prevent="changeTab(4)">触发器</a></li>
      </ul>
      <textarea v-if="tab==1" class="form-control" rows="30" v-model="model2">{{model}}</textarea>
      <textarea v-if="tab==2" class="form-control" rows="30" v-model="validation2">{{validation}}</textarea>
      <textarea v-if="tab==3" class="form-control" rows="30" v-model="fields2">{{fields}}</textarea>
      <textarea v-if="tab==4" class="form-control" rows="30" v-model="triggers2">{{triggers}}</textarea>
    </div>
  </div>
</template>

<script>
import Form from './export'
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
      triggers,
      tab: 1
    }
  },
  computed: {
    model2: {
      get() {
        return JSON.stringify(this.model, null, '    ')
      },
      set(str) {
        this.model = JSON.parse(str)
      }
    },
    validation2: {
      get() {
        return JSON.stringify(this.validation, null, '    ')
      },
      set(str) {
        this.model = JSON.parse(str)
      }
    },
    fields2: {
      get() {
        return JSON.stringify(this.fields, null, '    ')
      },
      set(str) {
        this.model = JSON.parse(str)
      }
    },
    triggers2: {
      get() {
        return JSON.stringify(this.triggers, null, '    ')
      },
      set(str) {
        this.model = JSON.parse(str)
      }
    }
  },
  methods: {
    formGroupClick (obj) {
      console.log(obj, 'formGroupClick')
      console.log(this.$refs.form.getGroup(obj.data.name))
    },
    onSubmit (e) {
      console.log('onSubmit')
    },
    onClick (e) {
      console.log('onClick', e)
    },
    changeTab (i) {
      this.tab = i
    }
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
