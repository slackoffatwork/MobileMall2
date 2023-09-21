<template>
<!-- 动态绑定数据 -->
  <div class='home-nav'>
    <div v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.img" alt="">
        <div>{{item.text}}</div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeNav',
  // 获取数据
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
}

</script>

<style>
.home-nav{
  display: flex;
  text-align: center;
  /* border-bottom: 8px solid rgb(21,21,21); */
  padding-bottom: 20px;
}
.home-nav div{
  flex: 1;
  margin-top: 4px;
}
a{
  text-decoration: none;
  color: #000;
}
.home-nav img{
  width: 70px;
  height: 70px;
}

</style>