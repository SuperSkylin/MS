<template>
  <div>
  <nav class='qiyenav'>
        <el-row  class='row-bg p_l_20 p_r_20' type="flex" justify="center" align="middle" >
        <el-col :span="6" class='qiyetitle'><i class="el-icon-arrow-left"></i><span class="backBtn">企业列表</span> <span class="title">江苏禾易企业管理有限公司</span></el-col>
        <el-col :span="18" ></el-col>
      </el-row>
  </nav>
  <!-- tab 标签 -->
  <div class="content">
  <template>
  <el-tabs class="tabTitle" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
        <!-- <c-table></c-table> -->
        <drag-table></drag-table>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
         <c-table></c-table>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">
         <c-table></c-table>
    </el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">
        <c-table></c-table>
    </el-tab-pane>
  </el-tabs>
</template>
</div>
</div>
</template>

<style scoped>
.qiyetitle{
    color:#009acd;
    font-size: 14px;
     text-align: left; 
}
.el-icon-arrow-left{
    font-weight: bold;
}
.backBtn{
    font-size:18px;
}
.title{
    text-align: left;
    color:#333333;
    padding-left:5px;
    border-left:1px solid #333333;
}
.content{
    padding: 0 12px;
   
}
.tabTitle{
 border-top:1px solid #dddddd;
}
</style>
<script>
import cTable from '@/view/company/cTable.vue'
import dragTable from '@/view/company/dragTable.vue'
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    components:{
        cTable,
        dragTable
    }
    ,
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
