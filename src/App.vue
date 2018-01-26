<template>
  <div id="app">
    <h1 style="text-align: center;">vue演示系统</h1>
     <el-row :gutter="20">
      <el-col  :span="4">
        <nav-menu></nav-menu>
      </el-col>
      <el-col :span="20">
        <Tabs ></Tabs> <!--使用组件-->
      </el-col>
     </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
import Tabs from '../src/components/Tabs' // 引入组件
import NavMenu from '../src/components/NavMenu'
export default {
  name: 'app',
  data() {
    return {
   
    }
  },
  components: {Tabs,NavMenu},
  events: {

  },
  methods:{
   
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
