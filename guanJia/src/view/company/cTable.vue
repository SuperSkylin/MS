<template>
<div>
  <el-table
    ref="multipleTable"
    :data="fileLists"
    tooltip-effect="dark"
    style="width: 100%;"
    @selection-change="handleSelectionChange"
    row-class-name="dargDiv"
    ><template>
    <draggable :list="fileLists" :move='getdata' @updata="datadragEnd" :options="{animation:300,handle:'.dargDiv'}">
    <el-table-column
      type="selection"
      width="55"
      align="center">
    </el-table-column>
    <el-table-column
      label="文件列表"
      width="300"
      align="center">
      <template scope="scope">{{ scope.row.fileList }}</template>
    </el-table-column>
    <el-table-column
      prop="fileName"
      label="文件名称"
      width="300"
      align="center">
    </el-table-column>
    <el-table-column
    align="right"
    >
    <template scope="scope">
        <el-upload
        class="upload-demo"
        action="#"
       :on-preview="handlePreview"
       :on-remove="handleRemove"
       :file-list="fileList1"
       >
        <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
        </template>
    </el-table-column>
    <el-table-column
      label=""
      align="center"
      show-overflow-tooltip>
        <template scope="scope" >
        <el-button
          size="small"
          type='text'
          @click="handleEdit(scope.$index, scope.row)">
           修改
          </el-button>
        <el-button
          size="small"
          type="text"
          @click="handleDelete(scope.$index, scope.row)">
           删除
          </el-button>
      </template>
    </el-table-column>
    <el-table-column >
        <template scope="scope">
            <button id="message" class="mark" title="Message line">111</button>
        </template>
    </el-table-column>
    </draggable>
    </template>
  </el-table>

  <div class="bottom clearfix">
      <span class="left">已选{{multipleSelection.length}}项,共{{fileLists.length}}项</span>
        <el-button class="right" type="info">合成pdf</el-button>
  </div>
</div>
</template>
<style scoped>
.bottom{
    margin-top:10px;
}
</style>

<script>
import draggable from 'vuedraggable';
  export default {
    data() {
      return {
        fileLists: [{
          fileList: '高新技术企业认定申请书.pdf',
          fileName: '1',
          fileStatus: '上海市普陀区金沙江路 1518 弄'
        }, {
          fileList: '高新技术企业认定申请书.pdf',
          fileName: '2',
           fileStatus: '上海市普陀区金沙江路 1518 弄'
        }, {
          fileList: '高新技术企业认定申请书.pdf',
          fileName: '3',
          fileStatus: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
        fileList1:[]
      }
    },
    components:{
        draggable
    },

    methods: {
        rowKey(row){
            console.log(row);
        },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleUpload(){

      },
      handleEdit(){

      },
      handleDelete(){

      },
      handlePreview(file){
          console.log(file);
      },
      handleRemove(){

      },
      getdata(evt){
          console.log(evt);
      },
      datadragEnd:function(evt){
          console.log(evt);
      }

    },
    created(){
    }
  }
</script>

