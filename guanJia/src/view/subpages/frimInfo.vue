<template>
<div>
 <el-form :label-position="labelPosition" label-width="210px" :model="formLabelAlign">
     <!--企业名称  -->
<div class="text-left border-bottom form-padding">
    <span class="title">企业名称</span>
  <el-form-item
  required
  prop="name"
   style="margin-left:170px;"
   label="公司名称">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  </div>
   <!--企业信息  -->
  <div class="text-left border-bottom form-padding">
      <span  class="title">企业信息</span>
   <el-form-item 
   required
   style="margin-left:170px;" 
   label="负责人"
    :rules="[
      { required: true, message: '请输入负责人', trigger: 'blur' }]">
    <el-input v-model="formLabelAlign.manager"></el-input>
  </el-form-item>
  <el-form-item 
  required
   style="margin-left:170px;" label="手机号码">
    <el-input type="tel" v-model="formLabelAlign.tel"></el-input>
  </el-form-item> 
    <el-form-item  
    prop="email"
      :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }]"
     style="margin-left:170px;" label="电子邮箱">
    <el-input v-model="formLabelAlign.email"></el-input>
  </el-form-item> 
  <el-form-item 
   prop="region"
  style="margin-left:170px;" 
  label="公司地址"
   :rules="[
      { required: true, message: '请输入公司地址', trigger: 'blur' }]" >
    <el-input type="" v-model="formLabelAlign.region"></el-input>
  </el-form-item> 
   <el-form-item 
   required
   style="margin-left:170px;" 
   label="成立时间"
     :rules="[
      { required: true, message: '请输入成立时间', trigger: 'blur' }]">
    <el-date-picker
    v-model="formLabelAlign.date"
    align="right"
    type="year"
    placeholder="选择年">
  </el-date-picker>
  </el-form-item> 
  <el-form-item
   style="margin-left:170px;"
   label="其他">
    <el-input v-model="formLabelAlign.other"></el-input>
  </el-form-item>
  </div>
   <!--申报信息  -->
  <div class="text-left border-bottom form-padding">
      <span  class="title">申报信息</span>
      <el-form-item required style="margin-left:170px;" label="知识产权数量" >
        <el-input  type="number"  v-model="formLabelAlign.zshiNum"></el-input>
      </el-form-item> 
     <el-form-item required style="margin-left:170px;" label="科技成果转化数量">
        <el-input type="number" v-model="formLabelAlign.kjiNum"></el-input>
      </el-form-item> 
     <el-form-item required style="margin-left:170px;" label="高新技术产品/成果数量">
        <el-input type="number" v-model="formLabelAlign.gxinNum"></el-input>
      </el-form-item> 
  </div>
</el-form> 

</div>
</template>
<style scoped>
.form-padding{
    padding-top:47px;
    padding-right:340px;
}
.title{
    padding-left:34px;
}
</style>

<script>
  export default {
    data() {
      return {
        labelPosition: 'left',
        formLabelAlign: {
          name: '',//企业名称
          manager: '',//负责人
          region: '',//公司地址
          tel:'',//手机号码
          email:'',//电子邮箱
          date:'',//成立时间
          zshiNum:'',//知识产权数量
          kjiNum:'',//科技成果转化数量
          gxinNum:'',//高新技术产品/成果数量
          other:''//其他
        }
      };
    }
  }
</script>
