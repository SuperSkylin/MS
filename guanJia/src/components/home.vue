<template>
  <div id='home'>
<header>
  <el-row>
  <el-col :span="3">
      <div class="grid-content ">
          <img class='logo' src='../assets/login_logo.png'>
      </div>
    </el-col>
  <el-col :span="14">
      <div class="mainTitle grid-content ">
          <span class='left'>管理控制台</span>
           <span class='right'> &nbsp;搜索</span>
          <i class="icon icon-sousuo-copy-copy-copy-copy right"></i>
      </div>
     </el-col>
  <!-- <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col> -->
  <el-col :span="2">
      <div class="grid-content ">
          <i class="icon icon-lingdang"></i>&nbsp;<el-tag class='gj_tag'>18</el-tag>
      </div>
   </el-col>
  <el-col :span="3"><div class="grid-content "></div></el-col>
  <el-col :span="2">
      <div class="grid-content ">
          <span>简体中文</span>
      </div>
      </el-col>
  </el-row>
</header>
<div class="el-col-24" style="height:100%;margin-bottom:0px">
  <div style="height:100%;width:180px;overflow:hidden;float:left" >
     <nav style="height:100%" >
        <el-row  class="tac " style="height:100%;margin-bottom:0px" >
         <el-col style="height:100%"  >
         <el-menu style="height:100%" default-active="activeIndex" :router=true class="el-menu-vertical-demo nav-default" @open="handleOpen" @close="handleClose">
        <el-submenu index="1" >
          <template slot="title"><i class="icon icon-sanjiaoxing02-copy"></i>高企申报管理平台</template>
        <el-menu-item-group>
            <el-menu-item index="1-1" :route="{path:'/home/qiyelist'}"><i class="icon icon-qiyelist"></i> 企业列表</el-menu-item>
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
      <main>
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
header{
    height: 50px;

}
.logo{
    height: 100%;
    width: 90%;
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
  .gj_tag{
      background: #ff9a01;
      padding:0 12px;
      border: none;
      font-size: 12px;
      vertical-align: middle;
      line-height: 24px;
  }
   .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  } 
  .grid-content {
      height: 50px;
      border-right:1px solid  #293033;
     background: #373e41; 
     line-height: 50px;
     color: #ffffff;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .mainTitle{
      color: #ffffff;
      line-height: 50px;
      padding:0 30px ;
  }
  .left{
      float:left;
  }
  .right{
      float:right;
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
  padding:20px;
}
</style>
<script>
  export default {
      data(){
          return{}
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


