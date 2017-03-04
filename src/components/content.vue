<style rel="stylesheet/less" lang="less">

</style>

<template>
  <div>
    <el-row :style="{width:'100%'}">
      <el-col :xs="{span:24}" :sm="{span:22,offset:1}" :md="{span:20,offset:2}" :lg="{span:18,offset:3}"
              :class="'text_center'">
        <keep-alive slot="router">
          <router-view style="height: 100%"></router-view>
        </keep-alive>
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
