<template lang="html">
  <div class="form-control-list well">
    <div class="form-control-list-item" :class="{active: index==current}" v-for="(v,index) in value" :key="index" @click="select(index)">
      <Form  :value.sync="v" :fields="fields" :validation="validation" @active="active"></Form>
    </div>
    <div>
      <div class="col-sm-6">
        <button type="button" class="btn btn-primary btn-block btn-sm" @click="add"><i class="glyphicon glyphicon-plus"></i></button>
      </div>
      <div class="col-sm-6">
        <button type="button" class="btn btn-danger btn-block btn-sm" @click="remove" :disabled="current==-1"><i class="glyphicon glyphicon-trash"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import Base from './Base.vue'
export default {
  name: 'List',
  extends: Base,
  components: {
    Form: function () {
      return Promise.resolve(require('../Form.vue').default)
    }
  },
  props: {
    fields: {
      type: Array,
      default () {
        return []
      }
    },
    validation: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      current: -1
    }
  },
  methods: {
    add () {
      if (!this.value) {
        this.value = []
      }
      this.value.push({})
    },
    select (index) {
      this.current = index
    },
    remove () {
      if (this.current >=0) {
        this.value.splice(this.current, 1)
        this.current = -1
      }
    },
    active (field) {
      this.$emit('active', field)
    }
  }
}
</script>

<style lang="css">
.form-control-list {
  width: 100%;
}
.form-control-list-item:hover,
.form-control-list-item.active {
  box-shadow: 0px 0px 2px #888;
  border-radius: 3px;
}
</style>
