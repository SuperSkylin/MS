<template>
  <div>
      <header-tag></header-tag>
      <div>
          <!--banner图  -->
          <div class="banner"></div>
           <div class="title">
               <span class="text-left sub-title w1200">申请资料进度</span>
           </div>
           <div class="progress-content bg-white ">
             <div class="w1200 progress">
                 <div class="left w50" >
                     <el-progress :percentage="70"  :stroke-width="20" :width="180" type="circle"></el-progress>
                 </div>
                 <div class="left w50">
                     <span class="progress-date">申报截止日期：2017-12-28</span>
                 </div>
             </div>
           </div>
          <main class="bg-gray">
              <div class="content w1200">
                  <ul class="con-ul">
                      <li  v-for="(item,index) in applylist" :key="index" class="con-li text-left"><span>{{index+1}}、{{item.title}}</span><span><el-progress :text-inside="true" :stroke-width="18"  :percentage="item.percentage" ></el-progress></span></li>
                  </ul>
              </div>
          </main>
          <!--pc端展示  -->
          <div class="w1200 logo">
              <div class="text-left logo-title">
                   <span>详细日志:</span>
              </div>
              <kehu-logo></kehu-logo>
              <div class="log-page text-right">
                <el-pagination
                  layout="prev, pager, next"
                   :total="1000">
               </el-pagination>
              </div>
          </div>
          <!--移动端展示  -->
         <!-- <div class="w1200 logo">
              <div class="text-left logo-title">
                   <span>详细日志:</span>
              </div>
          </div>-->
      </div> 
  </div>
 
</template>
 <style scoped>
.banner{
    background: url('../assets/cxbanner.jpg');
    background-size:cover;
    height: 170px;
    width: 100%;
    background-position: center;
}
.title{
    height: 70px;
    border-bottom: 4px solid #2377da;
}
.sub-title{
    display: inline-block;
    height: 100%;
    margin:0 auto;
    line-height: 70px;
    color:#333333;
    font-size: 20px;
}
.progress-content{
    height: 290px;
}
.progress-date{
    display: inline-block;
    line-height: 290px;
    height: 290px;
}
.progress{
    height: 290px;
    line-height: 290px;
}
.progress > div{
    height: 100%;
}
main{
    padding-top:140px;
}
.content{
    height: 100%;
}
.con-ul{
    width: 100%;
}
.con-li{
    width: 100%;
    margin-bottom:60px;
}
.con-li span{
    display: inline-block;
    width: 50%;
}
 .con-li span:last-child{
    padding-right:200px;
} 
.logo{
    padding-bottom: 60px;
}
.logo-title{
    font-size: 22px;
    font-weight: bold;
    padding:25px 0px;
}
.log-page{
    margin-top:30px;
}
.progress>div:first-child{
    padding-top:50px;
}
@media screen and (max-width: 750px){
    .banner{
        height: 85px;
    }
    .title{
        height: 45px;
        text-align: left;
        padding-left:12px;
        border-width: 2px;
    }
    .sub-title{
        line-height: 45px;
        font-size:16px;
    }
    .progress{
        height: 145px;
    }
    .progress-content{
      height: 145px;
    }
    .progress-date{
    display: inline-block;
    line-height: 145px;
    height: 145px;
}
.progress{
    height: 145px;
    line-height: 145px;
}
.progress>div:first-child{
    padding-top:25px;
}
    .progress-date{
        font-size:12px;
    }
    .el-progress__text{
        font-size:11px !important;
    }
    .el-progress-circle{
        width: 90px !important;
        height: 90px !important;
    }
    .logo{
        /* display: none; */
        padding:0 0px 25px;
    }
    .logo-title{
        padding-left:12px;
    }
    main{
        padding:70px 12px 0;
    }
    .con-li{
        margin-bottom:30px;
        text-align: left;
    }
    .con-li span{
    
        font-size: 12px;
    }
    .con-li span:last-child{
        padding:0;
    }
    .logo-title{
        font-size: 18px;
    }
    .log-page{
        display: none;
    }
}
</style>


<script>
import header from '@/components/header'
import logo from '@/view/kehu/log'
export default {
  data(){
      return{
          applylist:[
              {title:'高新技术企业认定申请书',percentage:'0'},
              {title:'企业登记文件',percentage:'30'},
              {title:'知识产权材料',percentage:'50'},
              {title:'科技项目立项证明相关材料',percentage:'20'},
              {title:'科技成果转化材料',percentage:'55'},
              {title:'研究开发组织管理材料',percentage:'70'},
              {title:'高新技术产品/成果材料',percentage:'80'},
              {title:'企业职工和科技人员情况说明材料',percentage:'90'},
              {title:'近三年研发费用专项审计报告',percentage:'100'},
              {title:'近一年高新收入专项审计报告',percentage:'2'},
              {title:'近三年审计报告',percentage:'56'},
              {title:'近三年所得税纳税申报表',percentage:'77'},
              {title:'中介机构证明材料',percentage:'88'},
          ]
      }
  },
  components:{
      headerTag:header,
      kehuLogo:logo
  }
}
</script>

