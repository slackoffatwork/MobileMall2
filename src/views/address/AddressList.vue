<!--
 * @Author: “YZ” “929876936@qq.com”
 * @Date: 2023-09-26 20:00:24
 * @LastEditors: “YZ” “929876936@qq.com”
 * @LastEditTime: 2023-09-26 20:17:26
 * @FilePath: \my-project\src\views\address\AddressList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
-->
<template>
  <div class="addressList">
    <!-- 头部导航栏设置 -->
    <van-nav-bar
      title="地址管理"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 地址信息管理 -->
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  name: "AddressList",
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  methods: {
    onAdd() {
      this.$router.push("/addressEdit")
    },
    onEdit(item, index) {
      this.$toast("编辑地址:" + index);
    },
    //返回
    onClickLeft() {
      // 返回上一个路由
      this.$router.go(-1)
    },

  },
};
</script>

<style>
</style>