<template>
  <div id="app">
    <food-head></food-head>
    <food-content></food-content>
  </div>
</template>

<script type="text/ecmascript-6">
  require("./assets/font-awesome.min.css")
  import foodhead from "./components/header.vue"
  import foodcontent from "./components/content.vue"
  require("assets/normalize.css")
  export default {
    name: 'app',
    components: {"food-head": foodhead, "food-content": foodcontent}
  }
</script>

<style rel="stylesheet/less" lang="less">
  * {
    margin: 0;
    padding: 0
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

  }
</style>
