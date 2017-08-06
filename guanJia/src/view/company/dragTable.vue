<template>
<div>
                  <!-- <el-checkbox-group v-model="multipleTable" @change="handleCheckedCitiesChange">
                  <el-checkbox  v-for="(element,index) in fileLists" :label="element"  :key="element.id"></el-checkbox>
                </el-checkbox-group> -->
<el-row class="tableTitle">
  <el-col :span="2"><div class="grid-content bg-purple"><el-checkbox   @change="handleCheckAllChange" v-model="allChecked"></el-checkbox></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">文件列表</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light">文件名称</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>
            <el-checkbox-group v-model="multipleTable" @change="handleCheckedCitiesChange">
     <draggable :list="fileLists" :move='getdata' @updata="datadragEnd" :options="{animation:300,handle:'.dargDiv'}">
              <transition-group name="list-complete" tag="div"> 

            <el-row v-for="(element,index) in fileLists" :key="element.id"  class="list-complete-item dargDiv">
                <el-col  class="trContent" :span="2"><el-checkbox  :label="element"  :key="element.id"></el-checkbox></el-col>
                <el-col class="trContent" :span="6" >{{element.fileList}}</el-col >
                <el-col class="trContent" :span="8">{{element.fileName}}</el-col >
                <el-col class="trContent" :span="4">
                <el-upload
                 class="upload-demo"
                 action="#"
                 :on-preview="handlePreview"
                 :on-remove="handleRemove"
                 :file-list="uploadList"
                 >
                 <el-button size="small" type="primary">点击上传</el-button>
               </el-upload>
                </el-col >
                <el-col :span="4">
                  <el-button
                   size="small"
                   type='text'
                  @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                 <el-button
                 size="small"
                 type="text"
                 @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </el-col>
            </el-row>

         </transition-group> 

    </draggable>
 </el-checkbox-group> 
   <div class="bottom clearfix">
      <span class="left">已选{{multipleTable.length}}项,共{{fileLists.length}}项</span>
        <el-button class="right" type="info">合成pdf</el-button>
  </div>
</div>
</template>
<style scoped>
.grid-content {
    background: rgb(238, 243, 246);
    color:#333333;
    border: none;
    height: 38px;
    line-height:38px;

}
.tableTitle{
    margin-bottom: 0px;
    border:1px solid rgb(238, 243, 246);
}
.dargDiv{
     margin-bottom: 0px;
     border-left:1px solid rgb(238, 243, 246);
     border-right:1px solid rgb(238, 243, 246); 
}
.trContent{
    height: 38px;
    line-height: 38px;
     border-bottom: 1px solid rgb(238, 243, 246); 
}
.bottom{
    margin-top:10px;
}
</style>

<script>
import draggable from 'vuedraggable';
export default {
  data(){
      return{
        fileLists: [{
          id:'1',
          fileList: '高新技术企业认定申请书.pdf',
          fileName: '1',
          fileStatus: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'2',
          fileList: '高新技术企业认定申请书.pdf',
          fileName: '2',
           fileStatus: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'3',
          fileList: '高新技术企业认定申请书.pdf',
          fileName: '3',
          fileStatus: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleTable:[],
        uploadList:[],
        allChecked:false,
        checked:false,
        isIndeterminate:true
      }
  },
  components:{
      draggable
  }
  ,methods:{
      getdata(evt){
          console.log(evt);
      },
      datadragEnd(){
          console.log(evt);
      },
      handlePreview(file){
          console.log(file);
      },
      handleRemove(){

      },
     handleCheckAllChange(event) {
         console.log(event.target.checked);
        this.multipleTable = event.target.checked ? this.fileLists : [];
        this.isIndeterminate = false;
        console.log(this.multipleTable);
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        console.log(this.multipleTable.length);

        this.allChecked = checkedCount === this.fileLists.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.multipleTable.length;
      }
  }
}
</script>

