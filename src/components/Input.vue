<template>
  <input
    v-model.trim="val"
    v-bind="$props"
    v-on="listeners"
    v-data-list="options"
    class="form-control">
</template>
<script>
  import Base from './Base.vue'

  export default {
    name: 'Input',
    extends: Base,
    directives: {
      dataList: {
        inserted (el, binding, vnode) {
          let value = binding.value
          if (!value || !value.length) return
          let context = vnode.context
          let id = context._uid + '-datalist'
          let list = value.map((option) => {
            let label = option[context.optionKeyName] || option
            let value = option[context.optionValueName] || option
            return `<option value="${value}">${label}</option>`
          })
          let dataList = document.createElement('datalist')
          dataList.setAttribute('id', id)
          dataList.innerHTML = list
          el.parentNode.appendChild(dataList)
          el.setAttribute('list', id)
        }
      }
    },
    props: {
      options: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>
