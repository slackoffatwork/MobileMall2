<template>
  <div class="foot">
    <div class="text">
      <!-- 顶部导航栏 -->
      <div class="category-nav">
        <van-nav-bar
          title="我的足迹"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        >
          <template #right>
            <van-icon name="search" size="30" />
          </template>
        </van-nav-bar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footprint",
  methods: {
    //返回主页
    onClickLeft() {
      this.$router.push("/profile");
    },
    //搜索页面
    onClickRight() {
      this.$router.push("/search");
    },
  },
};
</script>

<style>
.foot {
  background: red;
}
</style>