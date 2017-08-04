<template>
  <div id='home'>
     <header-tag></header-tag>
<div class="el-col-24" style="height:100%;margin-bottom:0px">
  <div style="height:100%;width:180px;overflow:hidden;float:left" >
     <nav style="height:100%" >
        <el-row  class="tac " style="height:100%;margin-bottom:0px" >
         <el-col style="height:100%"  >
         <el-menu style="height:100%" default-active="activeIndex" :router='true' class="el-menu-vertical-demo nav-default" @open="handleOpen" @close="handleClose">
        <el-submenu index="1" >
          <template slot="title"><i class="icon icon-sanjiaoxing02-copy"></i>高企申报管理平台</template>
        <el-menu-item-group>
            <el-menu-item index="qiyelist" :route="{path:'/home/qiyelist'}"><i class="icon icon-qiyelist"></i> 企业列表</el-menu-item>
            <el-menu-item index="1-2"><i class="icon icon-yijiandanglist"></i> 已建档企业列表</el-menu-item>
            <el-menu-item index="1-3"><i class="icon icon-yikaishi"></i> 已开始企业列表</el-menu-item>
            <el-menu-item index="1-4"><i class="icon icon-yiwancheng"></i> 已完成列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2"><i class="icon icon-sanjiaoxing02-copy"></i>知识产权管理</el-menu-item>
      <el-menu-item index="3"><i class="icon icon-sanjiaoxing02-copy"></i>财务审计报告</el-menu-item>
      <el-menu-item index="4"><i class="icon icon-sanjiaoxing02-copy"></i>企业资质管理</el-menu-item>
      <el-menu-item index="5"><i class="icon icon-sanjiaoxing02-copy"></i>产品资质管理</el-menu-item>
       </el-menu>
      </el-col>
      </el-row>
    </nav>
  </div>
  <div style="width:100%;padding-left:180px">
      <main :class="bgStyle">
          <router-view></router-view>
      </main>
  </div>
</div>
  </div>
</template>
<style>
#home{
  height: 100%;
}
.btn{
  cursor: pointer;
}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;

  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  /*导航栏  */
.nav-default{
     background: #42485b; 
    text-align: left;
    height: 100%;
}

.el-submenu__title:hover{
  background: #009acb; 
}
.el-menu-item{
  color:#ffffff;
}
.el-submenu__title{
  color: #ffffff;
}
.el-submenu .el-menu{
 background: #323843; 
  color: #ffffff;
}
main{
  overflow: hidden;
  /* padding:20px; */
}

</style>
<script>
import header from '@/components/header'
  export default {
      data(){
          return{
            bgStyle:{
              "bg_white":false,
              "bg_gray":true
            }
          }
      },
  components:{
      headerTag:header
  },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


