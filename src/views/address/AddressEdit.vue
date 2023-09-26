<!--
 * @Author: “YZ” “929876936@qq.com”
 * @Date: 2023-09-26 20:10:40
 * @LastEditors: “YZ” “929876936@qq.com”
 * @LastEditTime: 2023-09-26 20:23:57
 * @FilePath: \my-project\src\views\address\AddressEdit.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="addressEdit">
    <!-- 头部导航栏设置 -->
    <van-nav-bar
      title="地址编辑"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { areaList } from '@vant/area-data';

export default {
  name: "AddressEdit",
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  methods: {
    onSave() {
      this.$toast("save");
    },
    onDelete() {
      this.$toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
    //返回主页
    onClickLeft() {
      // 返回上一个路由
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>