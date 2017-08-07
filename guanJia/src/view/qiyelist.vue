<template>
<div class="bg-white" id="qiyelist" >
  <nav class='qiyenav'>
        <el-row  class='row-bg p_l_20 p_r_20' type="flex" justify="center" align="middle" >
        <el-col :span="3" class='qiyetitle'>企业列表</el-col>
        <el-col :span="6" class="col-input"><el-input placeholder="请输入内容"></el-input></el-col>
        <el-col :span="6"> <el-button type="primary" >搜索</el-button></el-col>
         <el-col :span="11"></el-col> 
        <el-col :span="4" align="center"><el-button @click="add()" style="width:100%" type="primary">登记企业</el-button></el-col>
      </el-row>
  </nav>
  <!---table内容  s-->
  <template>
  
  <el-table
    ref="multipleTable"
    :data="tableData3"
    border
    tooltip-effect="dark"
    style="width: 100%"
    class="el-row"
     @selection-change="handleSelectionChange" 
    @cell-click="cellClick"
     @selection-change="handleSelectionChange" 
    >

    <el-table-column
      type="selection"
      width="55"
      align="center"
      >
    </el-table-column>
    <el-table-column
      label="企业名称"
      align="center"
      width="331"
      >
      <template scope="scope"><span v-on:click="jump(scope.$index,scope.row)"  class="qiyeName">{{ scope.row.company }}</span></template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="联系人"
       align="center"
       width="212"
       >
    </el-table-column>
     <el-table-column
       prop="mobile"
       label="联系方式"
       align="center"
       width="123"
       show-overflow-tooltip>
    </el-table-column>
  
    <el-table-column
      label="状态"
       align="center"
       fit='true'
       width="148"
      show-overflow-tooltip>
      <template scope="scope">
        <i class="icon icon-state-blue"></i>
        <span>{{scope.row.state}}</span>
      </template>
    </el-table-column>
        <el-table-column
      prop="process"
      label="资料完成度"
       align="center"
       width="268"
      show-overflow-tooltip>
    </el-table-column>
      <el-table-column
      label="操作"
       align="center"
    width="307"
      show-overflow-tooltip>
         <template scope="scope">
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >删除</el-button>
        <el-button
          size="small"
          type="danger"
        >更改信息</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>
<!---table内容  e-->
<!-- 分页 s-->
<template >
    <div class="text-right">
    <el-pagination
      :page-size="5"
      layout="total, prev, pager, next"
      :total="tableData3.length">
    </el-pagination>
  </div>
</template>
<!-- 分页 e-->
</div>
</template>
<style lang="css" scoped>
#qiyelist{
  padding:20px;
}
.qiyenav{
  text-align: left;
}
.qiyenav .qiyetitle{
padding-left:5px;
border-radius: 0;
border-left:2px solid #009acb;
}
.row-bg{
  background: #ffffff;
  font-size: 14px;
  border-bottom:1px solid #dddddd;
}
.col-input{
  padding-right:10px;
}
.el-table--border th{
  border-right:0px !important;
}
.icon-state-blue{
   background: url('../assets/state_blue.svg'); 
  height: 40px;
  width: 40px;
  display: inline-block;
  background-size: contain;
  background-position: center ;
  vertical-align: middle;
}
.qiyeName:hover{
  color:red;
  text-decoration: underline;
  cursor: pointer;
}
</style>
<script>
import draggable from 'vuedraggable'
export default {
    data() {
      return {
        tags:[],
        tableData3: [{
          id:'1',
          company: '江苏禾易企业管理有限公司',
          name: '经理',
          state:' 1',
          mobile:'13912345678',
          process: '70%'
        }, {
          id:'2',
          company: '江苏禾易企业管理有限公司',
          name: '经理',
          state:' 1',
          mobile:'13912345678',
          process: '70%'
        }],
        multipleSelection: []
      }
    },
    components:{
      draggable
    },

    methods: {
      cellClick(val){
        this.multipleSelection=val;
        console.log(val);
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
        console.log(this.multipleSelection);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      add(){//跳转新建企业
        this.$router.push({path:'/home/creatlist'});
      },
      getdata(evt){
        console.log(evt.draggedContext);
      },
      datadragEnd(evt){
        console.log('111');
        },
      jump(index,row){
       this.$router.push({path:'/home/creatlist/#'+row.id});
      }
    },
    created(){
      console.log(this.tableData3);
    }
  }
</script>