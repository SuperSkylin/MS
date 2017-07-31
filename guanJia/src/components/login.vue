<template>
  <div id="login">
   <div class="content">
     <div class="logo">
      <img class="logo-img" src="../assets/login_logo.png">
      <div class="logo-content">
        <i class="icon icon-users"></i>数千家企业信赖首选
        <div class="logo-box">
          <p class="m-t-15"><i class="icon icon-rightzhuanhuan"></i> 国内领先的企业科技服务平台</p>
          <p  class="m-t-15"><i class="icon icon-rightzhuanhuan"></i> 高效率、高通过率的科技产品</p>
          <p  class="m-t-15"><i class="icon icon-rightzhuanhuan"></i> 全方位的企业科技服务解决方案</p>
        </div>
      </div>
    </div>
    <div class="login-box">
      <h4>账号密码登录</h4>
      <input type="text" placeholder="请输入账号">
      <input type="password" placeholder="密码">
      <button @click="login()">登 录</button>
    </div>
   </div>
    <footer>
    <div>Copyright 2017 heyee.com All Rights Reserved. 江苏禾易 版权所有</div>
      </footer>
  </div>
</template>
<style>
#login{
  background: url(../assets/guanjia-login-bg.jpg) no-repeat;
  background-size:cover;
  height: 100%;
    min-height: 820px;
    position: absolute;
    width: 100%;
}
.content{
 /* padding-top:40px; */
  /* padding:40px; */
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.icon-users{
  font-size:40px;
  vertical-align: middle;
  padding-right: 20px;
}
.logo{
  width: 50%;
  padding-top:50px;
  text-align: left;
}
.logo-img{
  padding-bottom:30px;
}
.logo-content{
  color:#ffffff;
  text-align: left;
  font-size:28px;
  border-top:1px solid rgba(255,255,255,0.3);
  padding-top:30px;

}
.logo-box{
  padding-left:70px;
  font-size:16px;


}
.icon-rightzhuanhuan{
  font-size:18px;
}
.login-box{
  background: #ffffff;
  padding:35px 62px 45px;
  border-radius: 5px;
  position: absolute;
  top:120px;
    right: 10px;
}
.login-box h4{
  padding:0;
  margin: 0;
  font-size:32px;
  margin-bottom: 25px;
  font-weight: normal;
}
.login-box input{
  padding:10px;
  display: block;
  width: 310px;
  font-size:16px;
  margin-bottom:20px;
  border:1px solid #dddddd;
  border-radius: 3px;
}
.login-box ::-webkit-input-placeholder{
  color:#aaa8a9;
}
.login-box button{
  width:100%;
  font-size:17px;
  padding:10px;
  background: #00a2ff;
  color:#ffffff;
  border: none;
  border-radius: 3px;
}
footer{
  width: 100%;
  padding:25px 0 30px;
  border-top:1px solid rgba(255,255,255,0.3);
  color:#ffffff;
  position: absolute;
  bottom:0px;
  left:0px;
  font-size:14px;

}
footer div{
  width: 1200px;
  margin: 0 auto;
  text-align: left;
}
</style>
<script>
export default {
  data(){
    return{}
  },
  methods:{
    login(){
      this.$router.push({path:'/home/manage'});
    }
  }
}
</script>

