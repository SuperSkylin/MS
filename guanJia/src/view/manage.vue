<template>
<div id="manage" class="bg-gray">
<el-row tem :gutter="20">
        <!--左侧 s  -->
  <el-col :span="18">
      <div class="grid-content bg-purple " style="border-right:0">
          <!--第一行 s  -->
          <el-row :gutter="20">
              <el-col :span="16">
                   <div class="grid-content bg-white bg-1 text-left  p_l_20 p_r_20 p_t_15">
                       <span>进度预警</span>
                   </div>
              </el-col>
             <el-col :span="8">
                  <div class="grid-content bg-white bg-1 text-left p_l_20 p_r_20 p_t_15">
                      <span>待办事项</span>
                  </div>
                    
              </el-col>
          </el-row>
             <!--第一行 e  -->
             <!--第二行 s  -->
          <el-row >
             <el-col :span="24">
                 <div class="grid-content bg-white bg-2  text-left  p_l_20 p_r_20 p_t_15">
                     <span>最近整理材料的企业</span>
                     <!--对应企业  e-->
                     <el-row  style="margin-top:20px;" type="flex" align="middle" justify="center" :gutter="20">
                       <el-col :span="8">
                           <div class="grid-content h36  bg-gray text-center">
                              <span>江苏禾易</span>
                           </div></el-col>
                       <el-col :span="8">
                           <div class="grid-content h36 bg-gray text-center">
                                <span>江苏禾易</span>
                           </div>
                        </el-col>
                       <el-col :span="8">
                           <div class="grid-content h36 bg-gray text-center">
                                 <span>江苏禾易</span>
                           </div>
                           </el-col>
                     </el-row>
                     <!--对应企业  s-->
                 </div>
            </el-col>
          </el-row>
           <!--第二行 e  -->
           <!--第三行 s  -->
           <el-row>
             <el-col :span="24">
                 <div class=" bg-white text-left myprocess" style="padding-bottom:70px;">
                     <div class="title">
                         <span class="main_color">我的进度</span>
                     </div>
                     <!--内容 s  -->
                     <div class="p_l_20 p_r_20">
                     <el-row :gutter="20" style="margin-top:20px;" >
                        <!--全部高企  s-->
                       <el-col :span="8">
                           <div type="" class="grid-content bg-gray text-left p20">
                               <span>全部高企整体进度</span>
                               <p class="text-center p_t_20">12321321</p>
                           </div>
                        </el-col>
                              <!--全部高企  e-->
                         <!--近期高企  s-->
                        <el-col :span="16">
                           <div class="grid-content bg-white text-center">
                               <span style="margin-bottom:20px;display:inline-block;">近期企业材料整理进度</span>
                               <el-row v-for="item in row" :key="item.proccess" style="margin-bottom:0" :gutter="10">
                                 <el-col  :span="8" >
                                     <div class="grid-content bg-gray h44">
                                         <span>江苏禾易企业管理有限公司</span>
                                     </div>
                                </el-col>
                                 <el-col :span="12">
                                     <div class="grid-content  bg-gray bg-flex h44">
                                         <el-progress :text-inside="true" :stroke-width="44" :percentage="item.proccess" :status="item.status"></el-progress>
                                     </div>
                                </el-col>
                              </el-row>
                           </div>
                         </el-col>
               
                         <!--近期高企  e-->
                    </el-row>
                     </div>
                     <!--内容 e  -->
                 </div>
                 </el-col>
           </el-row>
           <!--第三行 e  -->
      </div>
  </el-col>
      <!--左侧 e  -->
    <!--右侧 e  -->
  <el-col :span="6" >
      <div class="grid-content bg-white notice text-left">
          <div class="title">
              <span>全部公告</span>
          </div>
      </div>
      </el-col>
 <!--右侧 s  -->
</el-row>
</div>
</template>
<style scoped>
#manage{
    padding:20px;
}
.bg-purple{
    background: transparent !important;
}
.grid-content{
    color:#333333;
}
.bg-white{
    background: white;
    border-right:0;
    /* padding:0 20px; */
    /* text-align: left; */
    vertical-align: top;
}

.bg-1{
    height: 180px;
}
.bg-2{
    height: 126px;
}
.notice,.myprocess {
    padding:0px;
    box-sizing: border-box;
    font-size:14px;
}
.notice .title,.myprocess .title{
    height: 45px;
    background: #f5f5f7;
    color:#00c2de;
    padding-left:5px;
    line-height: 45px;
}
.notice .title span,.myprocess .title span{
     display: inline-block;
     padding: 0 8px;
     height: 100%;
     line-height: 45px;
     border-bottom: 2px solid #00c2de;
}
.myprocess .title{
   font-size:20px;
}
</style>
<script>
export default {
  data(){
      return {
          row:[
              {proccess:0,status:''},
              {proccess:55,status:'exception'},
              {proccess:70,status:'exception'},
              {proccess:100,status:'success'},
          ]
      }
  }
}
</script>



