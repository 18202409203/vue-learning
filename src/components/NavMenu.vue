<template>
<div>
<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <!--el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button-->
</el-radio-group>
<el-menu default-active="r2"  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-message"></i>
      <span slot="title">导航一</span>
    </template>
      <router-link to="/r1">
      <el-menu-item index="1-1"><i class="el-icon-share">第一页</i></el-menu-item>
      </router-link>
      <router-link to="/r2">
      <el-menu-item index="1-2"><i class="el-icon-menu">第二页</i></el-menu-item>
      </router-link>
      <router-link to="/r3">
        <el-menu-item index="1-3"><i class="el-icon-search">第三页</i></el-menu-item>
      </router-link>
  </el-submenu>
  <el-submenu index='2'>
      <template slot="title">
      <i class="el-icon-information"></i>
      <span slot="title">导航二</span>
     </template>
      <router-link to="/r4">
      <el-menu-item index="2-1"><i class="el-icon-date">时间</i></el-menu-item>
      </router-link>
  </el-submenu>
   <el-submenu index='3'>
      <template slot="title">
      <i class="el-icon-setting"></i>
      <span slot="title">导航三</span>
    </template>
      <router-link to="/r5">
      <el-menu-item index="3-1"><i class="el-icon-delete">啥也没有</i></el-menu-item>
      </router-link>
  </el-submenu>
</el-menu>
</div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
     

    }
  }
</script>