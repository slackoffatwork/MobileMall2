<template>
  <div class="cart">
    <!-- 头部导航栏设置 -->
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-icon name="search" size="30" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>

export default {
  name: 'Cart',
  methods: {
    //返回主页
    onClickLeft() {
      this.$router.push('/home')
    },
    //搜索页面
    onClickRight() {
      this.$router.push('/search')
    }
  }


}

</script>

<style></style>