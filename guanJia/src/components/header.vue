<template>
  <header>
    <el-row>
       <el-col :span="3" :xs="3">
      <div class="grid-content">
          <!-- <img class='logo' src='../assets/login.png'> -->
          <span class='logo'></span>
      </div>
    </el-col>
  <el-col  :span="14" :xs="7">
      <div class="mainTitle grid-content">
          <span class='left btn search' @click="manage">管理控制台</span>
           <span  class='right search'> &nbsp;搜索</span>
           <i class="icon icon-sousuo-copy-copy-copy-copy right search"></i>
      </div>
     </el-col>
  <!-- <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col> -->
  <el-col :span="2" :xs="5">
      <div class="grid-content ">
          <i class="icon icon-lingdang"></i>&nbsp;<el-tag class='gj_tag'>18</el-tag>
      </div>
   </el-col>
  <el-col :span="3" :xs="5"><div class="grid-content "></div></el-col>
  <el-col :span="2" :xs="4">
      <div class="grid-content ">
          <span class="jianti">简体中文</span>
      </div>
      </el-col>
  </el-row>
</header>
</template>
<style scoped>
header{
    height: 50px;
}
  .mainTitle{
      color: #ffffff;
      line-height: 50px;
      padding:0 30px ;
  }
  .logo{
    height: 100%;
    width: 180px;
    display: inline-block;
    background-size:contain;
    background-repeat: no-repeat;
    background:url('../assets/logo.png');
    position: absolute;
    left:0;
    top:0;
}
      .gj_tag{
      background: #ff9a01;
      padding:0 12px;
      border: none;
      font-size: 12px;
      vertical-align: middle;
      line-height: 24px;
  }
  .grid-content{
      height: 50px;
      line-height: 50px;
  }
@media screen and (max-width: 750px){
 header{
        height: 25px;
    }
      .grid-content{
      height: 25px;
      line-height: 25px;
  }
.jianti{
    font-size:12px;
}
  .btn{
    font-size:12px;
    line-height: 25px;
    display: inline-block;
  }
  .mainTitle{
      padding: 0 15px;
      line-height: 25px;
  }
.search{
    display: none;
}
.grid-content{
    height: 25px;
}
.gj_tag{
    line-height: 12px;
    height: 12px;
    padding:0 6px;
}
.icon-lingdang{
    font-size: 12px;
}
}
</style>
<script>
export default {
  data(){
     return {
         data:{}
            }
  },
  methods:{
      manage:function(){
        this.$router.push('/home/manage');
  
        
      }
  }

}
</script>

