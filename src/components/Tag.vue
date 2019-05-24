<!--
disabled: 非必传 是否可添加删除
type：非必传 颜色success info warning danger 
size：非必传 大小 medium  small mini
max: 最多添加tag数量
用法示例：
<zkt-tag class="item" v-bind="{addable, closable, type, size}"/>
-->
<template>
<div class="zkt-tag-wrap">
  <div class="zkt-tag-item" :class="[size, type]"  v-for="(item, index) in val" :key="index">
    {{item.title}}
    <i v-if="!disabled" @click="deleteFn(item, index)">x</i>
  </div>
  <div class="zkt-add-btn" :class="[size, type]" v-if="!disabled && addable && !showInput" @click="addBtnFn"><span>+</span> {{addBtn}}</div>
  <div class="tag-input" v-if="showInput">
    <input type="text" ref="tag" :class="[size, type]" v-model="tagName" @blur="addTag">
  </div>
</div>
</template>
<script>
export default {
  name: 'Tag',
  data () {
    return {
      tagName: '',
      showInput: false,
      addable: true
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium'
    },
    addBtn: {
      type: String,
      default: '标签'
    },
    value: {
      type: Array,
      default () {
        return []
      }
    },
    max: {
      type: Number,
      default: 1000
    },
  },
  computed: {
    val: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      }
    }
  },
  mounted () {
    if (this.val.length >= this.max) {
      this.addable = false
    }
  },
  methods: {
    deleteFn (item, index) {
      this.val.splice(index, 1)
      if (this.val.length < this.max) {
        this.addable = true
      }
      this.val = this.val
    },
    addBtnFn () {
      this.showInput = true
      this.$nextTick(() => {
        this.$refs.tag.focus()
      })
    },
    addTag () {
      this.showInput = false
      if (!this.tagName) {
        this.tagName = ''
        return false
      }
      this.val.push({title: this.tagName})
      this.val = this.val
      this.tagName = ''
      if (this.val.length >= this.max) {
        this.addable = false
      }
    }
  }
}
</script>
<style>
.zkt-tag-item, .zkt-add-btn{
  background-color: rgba(64,158,255,.1);
  display: inline-block;
  padding: 0 10px;
  height: 32px;
  line-height: 30px;
  font-size: 12px;
  color: #409eff;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid rgba(64,158,255,.2);
  white-space: nowrap;
  margin-right: 10px;
}
.zkt-add-btn{
  background: none;
  padding: 0 30px;
  border-color: #dcdfe6;
  color: #606266;
  cursor: pointer;
}
.zkt-add-btn span{
  font-size:15px;
}
.tag-input{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}
.tag-input input{
  border: none;
  padding: 9px 10px;
  height: 34px;
  line-height: 16px;
  font-size: 12px;
  color: #555;
  width: 140px;
  text-align:center;
}
.zkt-tag-item.success{
  background-color: rgba(103,194,58,.1);
  border-color: rgba(103,194,58,.2);
  color: #67c23a;
}
.zkt-add-btn.success:hover{
  background-color: rgba(103,194,58,.1);
  border-color: rgba(103,194,58,.2);
  color: #67c23a;
}
.zkt-tag-item.info{
  background-color: rgba(144,147,153,.1);
  border-color: rgba(144,147,153,.2);
  color: #909399;
}
.zkt-add-btn.info:hover{
  background-color: rgba(144,147,153,.1);
  border-color: rgba(144,147,153,.2);
  color: #909399;
}
.zkt-tag-item.warning{
  background-color: rgba(230,162,60,.1);
  border-color: rgba(230,162,60,.2);
  color: #e6a23c;
}
.zkt-add-btn.warning:hover{
  background-color: rgba(230,162,60,.1);
  border-color: rgba(230,162,60,.2);
  color: #e6a23c;
}
.zkt-tag-item.danger{
  background-color: rgba(245,108,108,.1);
  border-color: rgba(245,108,108,.2);
  color: #f56c6c;
}
.zkt-add-btn.danger:hover{
  background-color: rgba(245,108,108,.1);
  border-color: rgba(245,108,108,.2);
  color: #f56c6c;
}
.zkt-tag-item i{
  display: inline-block;
  border-radius: 50%;
  text-align: center;
  position: relative;
  cursor: pointer;
  font-size: 12px;
  height: 16px;
  width: 16px;
  line-height: 15px;
  vertical-align: middle;
  top: -1px;
  right: -5px;
  color: #409eff;
  font-style: normal;
}
.zkt-tag-item.success i{
  color: #67c23a;
}
.zkt-tag-item.info i{
  color: #909399;
}
.zkt-tag-item.warning i{
  color: #e6a23c;
}
.zkt-tag-item.danger i{
  color: #f56c6c;
}
.zkt-tag-item i:hover{
  background: #409eff;
  color: #fff;
  border-radius: 50%;
  font-size: 14px;
}
.zkt-tag-item.success i:hover{
  background: #67c23a;
}
.zkt-tag-item.info i:hover{
  background: #909399;
}
.zkt-tag-item.warning i:hover{
  background: #e6a23c;
}
.zkt-tag-item.danger i:hover{
  background: #f56c6c;
}
.zkt-tag-item.medium, .zkt-add-btn.medium{
  height: 34px;
  line-height: 32px;
}
.zkt-tag-item.small, .zkt-add-btn.small{
  height: 26px;
  padding: 0 8px;
  line-height: 24px;
}
.zkt-tag-item.mini, .zkt-add-btn.mini{
  height: 20px;
  padding: 0 5px;
  line-height: 18px;
}
.tag-input input.medium{
  height: 34px;
  padding:9px 10px;
}
.tag-input input.small{
  height: 26px;
  padding: 5px 8px;
  width: 82px;
}
.tag-input input.mini{
  height: 20px;
  padding: 2px 6px;
  width: 74px;
}
.zkt-tag-item.medium i{
  transform: scale(0.8)
}
.zkt-tag-item.small i{
  transform: scale(0.8)
}
.zkt-tag-item.mini i{
  margin-left: -3px;
  transform: scale(.7);
}
.zkt-add-btn.small{
  padding: 0 22px;
}
.zkt-add-btn.mini{
  padding: 0 18px;
}
</style>