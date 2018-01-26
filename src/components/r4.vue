<template>
<div><h1>这里显示时间</h1>
<span>{{year}}年{{month}}月{{day}}日&nbsp;星期{{week}}</span><br/>
<span>时间<input ref="input" :value='value' readonly></span>
</div>
</template>

<script type="text/javascript">
  export default {
      data() {
          return{
              now: new Date,
              value: '',
              intervalId: ''
          }
      },
      computed:{
          year(){
              return this.now.getFullYear()
          },
          month(){
              return this.now.getMonth() + 1
          },
          day(){
              return this.now.getDate()
          },
          week(){
              let weekTemp = ['日','一','二','三','四','五','六']
              return weekTemp[this.now.getDay()]
          }
      },
      methods:{
            getTime(){
                this.now = new Date
                // 这句话是说位数不足两位的补一个0，例如：4:2:6 显示成 04:02:06
                this.value = (this.now.getHours().toString().length === 2 ? this.now.getHours() : '0' + this.now.getHours()) + ':' + (this.now.getMinutes().toString().length === 2 ? this.now.getMinutes() : '0' + this.now.getMinutes()) + ':' + (this.now.getSeconds().toString().length === 2 ? this.now.getSeconds() : '0' + this.now.getSeconds())
            }
      },
      mounted(){
          this.intervalId = setInterval(this.getTime,500) // 进入页面时设置定时
      },
      beforeDestroy(){
          clearInterval(this.intervalId) // 离开页面时清除定时
      }
  }
</script>
<style scoped>

</style>