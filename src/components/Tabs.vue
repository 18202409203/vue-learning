<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="图表" name="first"><span slot="label"><i class="el-icon-date"></i>echarts图表</span>
    <div style="margin-bottom: -150px;"><my-chart></my-chart></div>
    </el-tab-pane>

    <el-tab-pane label="组件" name="second"><span slot="label"><i class="el-icon-star-on"></i> element组件</span>
    <!--示例1-->
              <el-collapse accordion>
            <el-collapse-item>
              <template slot="title">
                一致性 Consistency<i class="header-icon el-icon-information"></i>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
            </el-collapse>
  <!--示例2-->
         <div style="margin-top: 50px;">
           <el-steps :space="100" :active="active" finish-status="success">
           <el-step title="步骤 1"></el-step>
           <el-step title="步骤 2"></el-step>
           <el-step title="步骤 3"></el-step>
           </el-steps>
           <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
         </div>
    </el-tab-pane>

    <el-tab-pane label="输入" name="third"><span slot="label"><i class="el-icon-time"></i> 输入框限制</span>
    <div>
    <span>输入区&nbsp;</span><my-input v-model="inputValue" :disabled="inputDisabled" placeholder="只能输入数字，不信你试试"  @blur="handleBlur" class="my-input" :maxsize="num"></my-input>
    <button @click="buttonClick">{{buttonContext}}</button><br/>
    <span>显示区&nbsp;</span><input type="text" readonly :value="inputValue">
  </div>
  </el-tab-pane>
    <el-tab-pane label="权限" name="fourth"><span slot="label"><i class="el-icon-more"></i>更多</span>no content</el-tab-pane>
  </el-tabs>
</template>
<script>
import myInput from'../component/myInput.vue'
import myChart from'../component/myChart.vue'
  export default {
    components: { myInput,myChart},
    data() {
      return {
          activeName: 'second',
          active: 0,
          num: 8,
          inputValue: '',
          inputDisabled: false,
          buttonContext: '禁用输入',
          buttonContextOptions: ['禁用输入','启用输入']
      };
    },
    methods: {
      handleClick(tab, event) {
      // console.log(tab, event);
      },
      handleBlur(val) {
          console.log(val)
      },
      buttonClick() {
          this.inputDisabled = !this.inputDisabled
          this.buttonContext = !this.inputDisabled ? this.buttonContextOptions[0] : this.buttonContextOptions[1]
      },
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  };
</script>

<style>
  .my-input{
      display: inline-block;
  }
</style>