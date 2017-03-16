<style rel="stylesheet/less" lang="less">
  @import "../assets/base.less";

  .header {
    background-color: #20A0FF;
    color: white;
    .logo {
      text-align: left;
      width: 240px;
      font-family: "STXingkai", "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;;
      font-size: 2.4rem;
      align-self: center;

    }
    .menu {
      text-align: center;
      flex: 1;
      align-self: center;
      li {
        position: relative;
        float: right;
        list-style: none;
        display: block;
        padding: 2rem 20px;
        a {
          vertical-align: sub;
          color: #F9FAFC;
          font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
          &:hover {
            color: white;
          }
        }
        .active {
          font-size: 1.2em;
          color: white;
          font-weight: bold;
          &:before {
            width: 100%;
            content: "";
            border-bottom: 4px solid #D3DCE6;
            position: absolute;
            bottom: 0;
            left: 0;
          }
        }
      }
    }

  }
</style>

<template>
  <div class="header">
    <el-row :style="{width:'100%'}">
      <el-col :xs="{span:24}" :sm="{span:22,offset:1}" :md="{span:20,offset:2}" :lg="{span:18,offset:3}"
              :class="'flex'">
        <div class="logo">Title</div>
        <ul class="menu">
          <li>
            <router-link :to="{name:'table'}" active-class="active">menu3</router-link>
          </li>
          <li>
            <router-link :to="{name:'reservation'}" active-class="active">menu2</router-link>
          </li>
          <li>
            <router-link :to="{name:'food'}" active-class="active">menu1</router-link>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>

</template>

<script type="text/ecmascript-6">
  import {Col, Row} from 'element-ui'
  export default {
    data: function () {
      return {}
    },
    components: {"el-col": Col, "el-row": Row}
  }
</script>
