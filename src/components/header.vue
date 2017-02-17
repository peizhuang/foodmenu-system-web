<style rel="stylesheet/less" lang="less">
  .header {
    background-color: #20A0FF;
    color: white;
    display: flex;
    padding: 20px;
    .logo {
      width: 240px;
    }
    .menu {
      text-align: center;
      li {
        float: left;
        list-style: none;
      }
    }

  }
</style>

<template>
  <div class="header">
    <div class="logo"></div>
    <ul class="menu">
      <li>
        <router-link :to="{name:'table'}">客桌</router-link>
      </li>
      <li>
        <router-link :to="{name:'reservation'}">预定</router-link>
      </li>
      <li>
        <router-link :to="{name:'food'}">菜品</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {}
    }
  }
</script>
