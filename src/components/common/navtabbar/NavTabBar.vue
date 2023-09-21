<template>
<div class='nav-tabbar'>
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>

export default {
  name: 'NavTabBar'
}

</script>

<style>
.nav-tabbar{
  display: flex;
  /* width: 100%; */
  height: 44px;
  line-height: 44px;
  text-align: center;
  /* background-color: rgb(255, 87, 119); */
  color: black;
}
.left, .right{
  width: 60px;
}
.center{
  flex: 1;
}
</style>