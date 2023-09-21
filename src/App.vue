<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-18 15:13:59
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-09-19 18:29:16
 * @FilePath: \my-project\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar-main v-show="$route.meta.show"></tab-bar-main>
    <div style="height: 5rem;" v-show="$route.meta.show"></div>
  </div>
</template>

<script>
  import TabBarMain from '@/components/content/TabBarMain.vue'

export default {
  name: 'App',
  components: {
    TabBarMain
  }
}
</script>

<style>
 @import url('@/assets/css/base.css');
</style>
