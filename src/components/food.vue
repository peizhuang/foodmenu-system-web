<style rel="stylesheet/less" lang="less" scoped>
  @import "../assets/base";

  #titleName {
    padding: .6em;
    border: 1px solid #D3DCE6;
    border-radius: 4px;
    flex: 1;
  }

  .titleInfo {
    display: flex;
    align-items: baseline;
  }

  .food {
    margin-top: 40px;
    position: relative;
    .pageaction {
      position: absolute;
      right: 0;
      top: 6px;
      display: flex;
      .action {
        margin-right: 1em;
      }
      .type_view {
        border: 1px solid #C0CCDA;
        border-radius: 3px;
        display: flex;
        span {
          padding: 6px;
          font-size: 1.2em;
          border-right: 1px solid #C0CCDA;
          cursor: pointer;
          color: #20A0FF;
          &:hover {
            background-color: #EEF1F6;
          }
          flex: 1;
        }
        .active {
          background-color: #EEF1F6;
        }
      }
    }

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

  .test {
    background-color: rgba(0, 0, 0, .6);
  }

</style>

<template>
  <div class="food">
    <el-tabs v-model="activeId" @tab-click="handleClick">
      <el-tab-pane :label="val.name" :name="val.id" v-for="(val ,index) in foodSerious">
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
      </el-tab-pane>
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
    </el-tabs>
    <div class="pageaction">
      <li class="action">
        <el-button type="text" class="fa fa-pencil" @click="titleEditDialogShow">重命名</el-button>
        <el-button type="text" class="fa fa-plus" @click="titleAddDialogShow">添加标题</el-button>
      </li>
      <div class="type_view">
        <el-tooltip class="item" effect="dark" content="表格视图" placement="bottom">
        <span class="table_view fa fa-list-alt" :class="[{active:type_active == 'table_view'}]"
              @click="changeView('table_view')"></span>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="卡片视图" placement="bottom">
      <span class="picture_view fa fa-th"
            :class="[{active:type_active == 'picture_view'}]" @click="changeView('picture_view')"></span>
        </el-tooltip>
      </div>

    </div>
    <el-dialog id="dialog" title="标题信息" v-model="titleEditSeriousVisible" size="tiny" :class="['text_left']">

      <div class="titleInfo">
        <label for="titleName">名称：</label>
        <input type="text" id="titleName" placeholder="请输入名称" v-model="titleName">
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="titleEditSeriousVisible = false">取 消</el-button>
        <el-button type="primary" @click="titleInfoSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import {TableColumn, Table, Tabs, TabPane, Tooltip, Col, Row, Card, Button, Dialog, Loading} from 'element-ui';

  export default {
    created(){
      this.axios({
        method: 'post',
        url: "/foodserious/index/list"
      })
        .then((d) => {
          if (d.data.length > 0) {
            for (let item of d.data) {
              this.foodSerious.push({id: item.id, name: item.name});
              this.seriousRelate[item.id] = item.name;
            }
            this.activeId = d.data[0].id;
          }

        }).catch(function (e) {
        alert(e);
      });
    },
    data() {
      return {
        titleName: "",
        foodSerious: [],
        seriousRelate: {},
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
        activeId: '',
        type_active: "table_view",
        titleEditSeriousVisible: false,
        titleAddFlag: false,
        loading2: false
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
      elButton: Button,
      elDialog: Dialog
    },
    /* directives: {
     loading: Loading
     },*/
    methods: {
      //显示标题信息修改模态框
      titleEditDialogShow(){
        this.titleName = this.seriousRelate[this.activeId];
        this.titleEditSeriousVisible = true;
      },
      titleAddDialogShow(){
        this.titleName = "";
        this.titleAddFlag = true;
        this.titleEditSeriousVisible = true;
      },
      //提交标题信息
      titleInfoSubmit(){
        this.titleEditSeriousVisible = false;
        let data = {
          name: this.titleName
        };
        if (!this.titleAddFlag) {
          data.name = this.seriousRelate[this.activeId];
          data.id = this.activeId;
        }

        let load = Loading.service({
          target: ".food",
          text: "正在提交。。。"
        });
        this.axios.post("foodserious/index/edit", data).then((d) => {
          console.log(d);
          this.foodSerious.push({id: d.data.id, name: d.data.name});
          this.seriousRelate[d.data.id] = d.data.name;
          load.close();
          this.titleEditSeriousVisible = false
        }).catch(function (e) {
          load.close();
          alert(e);
        });
        this.titleAddFlag = false;

      },

      handleClick(tab, event){
        console.log(tab, event)
        return false;
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        return false;
      },
      changeView(view_name){
        this.type_active = view_name;
        return false;
      }
    }
  }
</script>
