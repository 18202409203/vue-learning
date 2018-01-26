<!--
/*
 * @Author: zhu.pengji 
 * @Date: 2018-01-24 22:00:52 
 * @Last Modified by: zhu.pengji
 * @Last Modified time: 2018-01-25 23:14:40
 */

 Name: 数字输入组件my-input

Attributes:
 * placeholder: string
 * disabled: boolean
 * maxsize: number|string

Events:
 * blur: function

-->
<template>
<div>
      <input ref="input" type="text" :value="value" @input="bindValue($event.target.value)" :placeholder='placeholderTemp' :disabled="disabledTemp" @change="blur($event.target.value)">
</div>
</template>
<script>
export default {

  props: ['placeholder','disabled','value','maxsize'], // value 是默认的 具体查看v-model
  data() {
      return{
        // 静态变量
      }
  },
  // 动态属性
  computed:{
      disabledTemp() {
          // 默认不禁用
          return this.disabled === undefined ? false : this.disabled
      },
      placeholderTemp() {
          // 有默认值
          return this.placeholder === undefined ? '请输入' : this.placeholder
      }
  },
  methods:{
    blur(val) {
      this.$emit('blur',val)
    },
    bindValue(val) {
      let valTemp = []
      for(let i of val.trim().split('')){ // 得到formatData
        valTemp.push(i.replace(/\D/g, ''))
      }
      this.$refs.input.value = valTemp.join('').slice(0,this.maxsize) // 把得到的formatData给子组件显示
      this.$emit('input',valTemp.join('').slice(0,this.maxsize)) // 把得到的formatData传给父组件
    },
  },
  mounted(){
    // console.log(this.value)
  }

}
</script>
