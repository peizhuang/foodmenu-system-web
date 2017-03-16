<style rel="stylesheet/less" lang="less" scoped>
  @import "../assets/base";

  .food {
    margin-top: 40px;
    position: relative;
  }

  .card_info {
    padding: 1em;
    .card_name_body {
      text-align: left;
      display: block;
      .card_name {
        font-weight: bold;
        &:extend(.ellipsis);
      }
    }
    .clearfix {
      text-align: left;
      display: flex;
      .card_price {
        padding: 4px 0;
        flex: 1;
        &:extend(.ellipsis);
      }
    }
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }

    .clearfix:after {
      clear: both
    }
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .edit {
    padding: 0;
    float: right;
    color: #20A0FF;
  }

  .delete {
    padding: 0;
    color: #ff6f6d;
    &:hover {
      color: #ff1b0e;
    }
  }

  .image {
    width: 100%;
    display: block;
  }


</style>

<template>
  <div class="food">
    <div>{{$t('hello')}}</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="val.label" :name="val.name" v-for="(val ,index) of foodSerious">

        <elTable
          :data="tableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%"
          v-show="type_active == 'table_view'"
          align="left"
        >
          <elTableColumn
            type="index"
            width="50">
          </elTableColumn>
          <elTableColumn
            property="date"
            label="菜名"
            width="300">
          </elTableColumn>
          <elTableColumn
            property="name"
            label="单价"
            width="120">
          </elTableColumn>
          <elTableColumn
            property="address"
            label="菜系"
            width="260">
          </elTableColumn>
          <elTableColumn
            property="address"
            label="操作">
            <template scope="scope">
              <el-button
                size="small"
              >编辑
              </el-button>
              <el-button
                size="small"
                type="danger"
              >删除
              </el-button>
            </template>
          </elTableColumn>
        </elTable>
        <div v-show="type_active == 'picture_view'">
          <el-row :gutter=20>
            <el-col :xs="{span:12}" :sm="{span:8}" :md="{span:6}" :lg="{span:4}"
                    v-for="(o, index) in [1,2,1,1,1,1,1,1,11,1]" :style="{marginTop:'20px'}">
              <el-card :body-style="{padding:0}">
                <img src="~assets/images/hamburger.png" class="image">
                <div class="card_info">
                  <li class="card_name_body"><span class="card_name">汉堡包</span></li>
                  <div class="bottom clearfix">
                    <li class="card_price"><b>￥:</b><span class="price">30</span></li>
                    <el-button type="text" class="button edit">编辑</el-button>
                    <el-button type="text" class="button delete">删除</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>

      </el-tab-pane>
    </el-tabs>
    <li class="type_view">
      <el-tooltip class="item" effect="dark" content="表格视图" placement="bottom">
        <span class="table_view fa fa-list" :class="[{active:type_active == 'table_view'}]"
              @click="changeView('table_view')"></span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="卡片视图" placement="bottom">
      <span class="picture_view fa fa-table"
            :class="[{active:type_active == 'picture_view'}]" @click="changeView('picture_view')"></span>
      </el-tooltip>

    </li>
  </div>
</template>

<script type="text/ecmascript-6">
  import {TableColumn, Table, Tabs, TabPane, Tooltip, Col, Row, Card, Button} from 'element-ui';
  export default {
    data() {
      return {
        foodSerious: [{name: "user", label: "用户管理"}, {name: "config", label: "配置管理"}, {name: "role", label: "角色管理"}],
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
        activeName: 'user',
        type_active: "table_view"
//        currentDate: new Date()
      }

    },
    components: {
      elTableColumn: TableColumn,
      elTable: Table,
      elTabs: Tabs,
      elTabPane: TabPane,
      elTooltip: Tooltip,
      elCol: Col,
      elRow: Row,
      elCard: Card,
      elButton: Button
    },
    methods: {
      handleClick(tab, event){
        console.log(tab, event)
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      changeView(view_name){
        this.type_active = view_name;
      }
    }
  }
</script>
