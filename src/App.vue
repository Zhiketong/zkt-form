<template>
  <div id="app">
    <div class="col-md-12">
      <button type="button" name="button" class="btn btn-default" @click="add">添加</button>
      <button type="button" name="button" class="btn btn-default" @click="remove">删除</button>
    </div>
    <div class="col-md-8">
      <Form
        class="form-horizontal"
        :fields="fields"
        :validation="validation"
        :triggers="triggers"
        :options="options"
        ref="form"
        v-model="model"
        @change="onChange"
        @click="onClick"
        @submit="onSubmit">
      </Form>
    </div>
    <div class="col-md-4">
      <ul class="nav nav-tabs" style="margin-bottom: 15px">
        <li :class="{active: tab==1}"><a href="" @click.prevent="changeTab(1)">表单值</a></li>
        <li :class="{active: tab==2}"><a href="" @click.prevent="changeTab(2)">校验规则</a></li>
        <li :class="{active: tab==3}"><a href="" @click.prevent="changeTab(3)">控件设置</a></li>
      </ul>
      <textarea v-if="tab==1" class="form-control" rows="30" v-model="model2">{{model}}</textarea>
      <textarea v-if="tab==2" class="form-control" rows="30" v-model="validation2">{{validation}}</textarea>
      <textarea v-if="tab==3" class="form-control" rows="30" v-model="fields2">{{fields}}</textarea>
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
      tab: 1,
      options: {
        labelColumn: 3
      }
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
    }
  },
  methods: {
    add () {
      this.$refs.form.addField({
        label: 'label',
        name: 'label',
        component: 'Input'
      })
    },
    remove () {
      this.$refs.form.removeField()
    },
    onSubmit (e) {
      console.log('onSubmit')
    },
    onClick (name, value) {
      console.log('onClick', name, value)
    },
    onChange (key, value) {
      console.log(key, value)
    },
    changeTab (i) {
      this.tab = i
    }
  }
}
</script>

<style>
.form-group.active {
  background-color: rgba(200, 200, 200, 0.8);
}
</style>
