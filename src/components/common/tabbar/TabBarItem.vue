<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="img"></slot></div>
      <div v-else><slot name="img-active"></slot></div>
      <div :style="isActiveStyle"><slot name="text"></slot></div> 
    </div>
</template>

<script>

export default {
  name: 'TabBarItem',
  props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
  data() {
    return {}
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
      // console.log(this.path);
    }
  },
  computed: {
    // 通过router获取活跃路由对比当前路由
    isActive() {
      // /home --> item1(/home) -true
      // /home --> item1(/category) -false
      // /home --> item1(/cart) -true
      // /home --> item1(/profile) -true
      return this.$route.path.indexOf(this.path) !== -1
    },
    // 判断当前isActive是否处于活跃状态 ? 是 赋值颜色属性 否 为空
    isActiveStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}

</script>

<style>
.tab-bar-item{
  flex: 1;
  height: 49px;
  text-align: center;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 2px;
}

.active{
  color: red;
}
</style>