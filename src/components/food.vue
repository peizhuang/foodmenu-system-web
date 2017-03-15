<style rel="stylesheet/less" lang="less" scoped>
  @import "../assets/base";

  .food {
    margin-top: 40px;
  }

  .food_header {

  }
</style>

<template>
  <div class="food">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first"> <elTable
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%">
        <elTableColumn
          type="index"
          width="50">
        </elTableColumn>
        <elTableColumn
          property="date"
          label="日期"
          width="120">
        </elTableColumn>
        <elTableColumn
          property="name"
          label="姓名"
          width="120">
        </elTableColumn>
        <elTableColumn
          property="address"
          label="地址">
        </elTableColumn>
      </elTable></el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>

  </div>
</template>

<script type="text/ecmascript-6">
  import {TableColumn, Table, Tabs, TabPane} from 'element-ui';
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null,
        activeName: 'second'
      }

    },
    components: {
      elTableColumn: TableColumn,
      elTable: Table,
      elTabs: Tabs,
      elTabPane: TabPane
    },
    methods: {
      handleClick(tab, event){
        console.log(tab, event)
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
</script>
