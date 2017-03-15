<style rel="stylesheet/less" lang="less" scoped>
  * {
    line-height: 1.5;
  }

  .m_table {
    width: 800px;
    & > h3 {
      background-color: white;
      color: #1f2f3d;
      span {
        font-size: 1.4em;
      }
    }
    & > div {
      text-align: left;
      h3 {
        margin-left: 10px;
      }
      p, ul {
        margin-left: 20px;
      }
    }
  }

  .title {
    color: #58B7FF;
    font-weight: bold;
  }

  .end {
    margin-top: 10px;
    text-align: left;
  }

</style>

<template>
  <div class="m_table">
    <h3 class="header">
      现<span style="color: #20A0FF">出租</span>一间次卧，为<span style="color: #13CE66">寻觅</span>一位室友，愿<span
      style="color: #F7BA2A">共度</span>一段生活
    </h3>
    <div class="condition">
      <h3>房屋总体情况：</h3>
      <p><span class="title">地址：</span>中和龙翔佳苑3期</p>
      <p><span class="title">户型：</span>套二</p>
      <p><span class="title">面积：</span>86 (m2)</p>
      <p><span class="title">设施：</span>所有家电齐全，包括空调。（电视原本已坏，因为自己用不到，所以没有叫房东换）</p>
      <p><span class="title">卫生情况：</span>每周彻底打扫一次，所以清洁会很干净。</p>
      <p><span class="title">厨房设施：</span>因为自己要做饭，所以厨房东西齐全。</p>
      <p><span class="title">网络：</span>20M电信宽带（已经交了一年，所以还有5个月左右您可以不用缴网费）</p>
      <p class="notice">房屋总体很大，客厅目前几乎闲置，所以公共区域很大</p>

      <h3>您的房间情况：</h3>
      <p><span class="title">面积：</span>20（m2）左右</p>
      <p><span class="title">家具：</span>一张床、一个橱柜（没有桌子，我的桌子是自己买的）</p>
    </div>
    <div class="claim">
      <h3>您的需求：</h3>
      <ul>
        <h4>基本需求：</h4>
        <ol>找一间房屋作为住处</ol>
      </ul>
      <ul>
        <h4>其他需求：</h4>
        <ol>有一位室友以致于生活不至于太单调</ol>
        <ol>室友是位爱干净的人</ol>
        <ol>还有什么我猜不到了。。。</ol>
      </ul>
    </div>
    <div class="myclaim">
      <h3>我的要求：</h3>
      <ul>
        <ol>您最好是位爱干净的室友</ol>
        <ol>您最好可以接受每隔一周对房屋进行打扫一次（扫、拖）</ol>
        <ol>您最好不要太晚了还很吵（超过12点）</ol>
        <ol>互相尊重、互相友爱、互相帮助</ol>
        <ol>其他的好像都还行。。。</ol>
      </ul>
    </div>
    <div>
      <h3>其他：</h3>
      <p>本人男，寻找的室友男女不限。</p>
      <p>自己要打打游戏（LOL）。如果你会的话，那可以一起。如果您是大神，那求您带带我（-_-）。（只是娱乐）</p>
      <p>平常喜欢读书</p>
      <p>喜欢打乒乓（一直没找到人）</p>
    </div>
    <div>
      <h3>费用：750/月</h3>
      <p>水电气平摊</p>
    </div>
    <p class="end"><span style="color: firebrick;font-size: 1.8em">完</span>，如果您愿意了解一下，<span
      style="color: #13CE66;font-size: 1.6em">请联系QQ：458169386（说不清）</span></p>

  </div>
</template>

<script type="text/ecmascript-6">
  require("../assets/animate.css")
  export default {

    data: function () {
      return {}
    },
    methods: {}
  }
</script>
