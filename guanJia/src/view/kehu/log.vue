  <template>
    <el-table
      :data="tableData"
      style="width: 100%"
      class="text-center">
      <el-table-column
        prop="date"
        label="日期"
       >
      </el-table-column>
      <el-table-column
        prop="name"
        label="更改内容"
       >
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎'
          }, {
            date: '2016-05-04',
            name: '王小虎'
          }, {
            date: '2016-05-01',
            name: '王小虎'
          }, {
            date: '2016-05-03',
            name: '王小虎'
          }]
        }
      }
    }
  </script>