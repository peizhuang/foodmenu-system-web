<style rel="stylesheet/less" lang="less" scoped>
  /*
    .trans-enter {
      opacity: .8;
    }
  */

  .trans-enter-active {
    transition: all 2s ease;
  }

  /*  .trans-leave {
      opacity: .6;
    }

    .trans-leave-to {
      color: blue;
      transform: scale(2);
      !*opacity: 1;*!
    }*/

  .trans-leave-active {
    transition: all 2s ease;
  }

  li {
    display: inline-block;
    margin-right: 10px;
    padding: 5px 10px;
    background-color: #20A0FF;
    color: white;
    position: relative;
    transition: all 1s ease;
  }

  li:before {
    font-family: FontAwesome;
    content: "\f00d";
    display: inline-block;
    position: absolute;
    top: -16px;
    right: -10px;
    color: #20A0ff;
    cursor: pointer;
  }


</style>

<template>
  <div>table
    <button id="test" @click="show=!show">click</button>
    <transition name="trans">
      <p v-if="show">transition test</p>
    </transition>
    <transition-group tag="ul">
      <li v-for="item of list" :key="item" @click="remove">{{item}}</li>
    </transition-group>
    <button id="shuffle" @click="shuffle">shuffle</button>

  </div>
</template>

<script type="text/ecmascript-6">
  require("../assets/animate.css")
  export default {

    data: function () {
      return {
        show: true,
        shu: -1,
        list: [1, 2, 3, 4, 5, 6, 7, 8]
      }
    },
    methods: {
      remove: function (e) {
        let index = e.target.textContent;
        this.list.splice(parseInt(index), 1);
      },
      shuffle: function () {
        this.shu = -(this.shu);
        this.list = this.list.sort(this.shu);
      }
    }
  }
</script>
