<template>
  <div id="creatlist" class="bg-gray">
  <nav class='qiyenav'>
        <el-row  class='row-bg' type="flex" justify="center" align="middle" >
        <el-col :span="2" class='qiyetitle text-left title'><span>创建</span></el-col>
        <el-col :span="3"><el-button @click="back()" style="width:100%" type="primary" class="backbtn"><i class="icon icon-fanhuishangyiji"></i>&nbsp;&nbsp;返回企业列表</el-button></el-col>
         <el-col :span="20"></el-col> 
      </el-row>
  </nav>
  <div class="list-content">
     <frim-info></frim-info>
  </div>
 
  </div>
</template>
<style lang="css" scoped>
.title{

  padding-left:16px;
  }
.title >span{
    border-left:2px solid #88b9df;
    padding-left:8px; 
}
.backbtn{
  background: #f7f7f8;
  color:#373f3f;
  border: 1px solid  #dddddd;
  border-radius: 0px  !important;
}
.list-content{
  max-width:1202px;
  margin: 0 auto;
  /* padding:47px 34px; */
  background: #ffffff;
}
</style>
<script>
import frimInfo from '@/view/subpages/frimInfo'
export default {
  data(){
    return {

    }
  },
  methods:{
    back(){
      this.$router.push('/home/qiyelist');
    }
  },
  components:{
    frimInfo:frimInfo
  }
}
</script>


