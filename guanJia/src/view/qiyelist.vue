<template>
<div >
  <nav class='qiyenav '>
        <el-row  class='row-bg' type="flex" justify="center" align="middle">
        <el-col :span="3" class='qiyetitle'>企业列表</el-col>
        <el-col :span="6" class="col-input"><el-input placeholder="请输入内容"></el-input></el-col>
        <el-col :span="6"> <el-button type="primary" >搜索</el-button></el-col>
         <el-col :span="11"></el-col> 
        <el-col :span="4" align="center"><el-button @click="add()" style="width:100%" type="primary">登记企业</el-button></el-col>
      </el-row>
  </nav>
  <template>
  <el-table
    ref="multipleTable"
    :data="tableData3"
    border
    tooltip-effect="dark"
    style="width: 100%"
    class="el-row"
    >
    <el-table-column
      type="selection"
      width="55"
      align="center"
      >
    </el-table-column>
    <el-table-column
      label="企业名称"
      width="120"
      align="center">
      <template scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="联系人"
      width="120"
       align="center">
    </el-table-column>
    <el-table-column
      prop="address"
      label="联系方式"
       align="center"
      show-overflow-tooltip>
    </el-table-column>
     
    <el-table-column
      label="状态"
       align="center"
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
      show-overflow-tooltip>
    </el-table-column>
      <el-table-column
      label="操作"
       align="center"
      show-overflow-tooltip>
         <template scope="scope">
        <el-button
          size="small"
        >删除</el-button>
        <el-button
          size="small"
          type="danger"
        >更改信息</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<template>
    <div class="right">
    <el-pagination
      :page-size="5"
      layout="total, prev, pager, next"
      :total="tableData3.length">
    </el-pagination>
  </div>
</template>
</div>
</template>
<style lang="css" scoped>
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
</style>
<script>
export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          state:' 1',
          process: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          process: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          process: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          process: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          process: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          process: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          process: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
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
      add(){//跳转新建企业
        this.$router.push({path:'/home/creatlist'});
      }
    }
  }
</script>