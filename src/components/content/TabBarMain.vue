<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-18 15:21:58
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-09-18 15:42:51
 * @FilePath: \my-project\src\components\content\TabBarMain.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <div slot="img"><img src="@/assets/img/icon/a-014_wodezhuye.png" alt=""></div>
      <div slot="img-active"><img src="@/assets/img/icon/a-014_wodezhuye-copy.png" alt=""></div>
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <div slot="img"><img src="@/assets/img/icon/a-014_gengduo-37.png" alt=""></div>
      <div slot="img-active"><img src="@/assets/img/icon/a-014_gengduo-37-copy.png" alt=""></div>
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <div slot="img"><img src="@/assets/img/icon/a-014_gouwu.png" alt=""></div>
      <div slot="img-active"><img src="@/assets/img/icon/a-014_gouwu-copy.png" alt=""></div>
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/sign">
      <div slot="img"><img src="@/assets/img/icon/a-014_dakaqiandao.png" alt=""></div>
      <div slot="img-active"><img src="@/assets/img/icon/a-014_dakaqiandao-copy.png" alt=""></div>
      <div slot="text">签到中心</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <div slot="img"><img src="@/assets/img/icon/a-014_wode.png" alt=""></div>
      <div slot="img-active"><img src="@/assets/img/icon/a-014_wode-copy.png" alt=""></div>
      <div slot="text">个人中心</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
  import TabBarItem from '../common/tabbar/TabBarItem.vue'
  import TabBar from '../common/tabbar/TabBar.vue'

export default {
  name: 'TabBarMain',
  components: {
    TabBar,
    TabBarItem
  }
}

</script>

<style>
</style>