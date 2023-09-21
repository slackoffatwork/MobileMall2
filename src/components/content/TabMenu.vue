<template>
  <tab-bar>
    <tab-bar-item path="/####">
      <div slot="img"><img src="~assets/img/tabbar/home.svg" alt=""></div>
      <div slot="text">未支付</div>
    </tab-bar-item>
    <tab-bar-item path="/####">
      <div slot="img"><img src="~assets/img/tabbar/category.svg" alt=""></div>
      <div slot="text">代发货</div>
    </tab-bar-item>
    <tab-bar-item path="/###">
      <div slot="img"><img src="~assets/img/tabbar/shopcart.svg" alt=""></div>
      <div slot="text">待收货</div>
    </tab-bar-item>
    <tab-bar-item path="/#####">
      <div slot="img"><img src="~assets/img/tabbar/profile.svg" alt=""></div>
      <div slot="text">待评价</div>
    </tab-bar-item>
    <tab-bar-item path="/###">
      <div slot="img"><img src="~assets/img/tabbar/profile.svg" alt=""></div>
      <div slot="text">已完成</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
  import TabBar from '../common/tabbar/TabBar.vue'
  import TabBarItem from '../common/tabbar/TabBarItem.vue'

export default {
  name: 'TabMenu',
  components: {
    TabBar,
    TabBarItem
  }
}

</script>

<style>

</style>