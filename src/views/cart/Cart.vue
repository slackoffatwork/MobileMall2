<!--
 * @Author: “YZ” “929876936@qq.com”
 * @Date: 2023-09-18 15:20:16
 * @LastEditors: “YZ” “929876936@qq.com”
 * @LastEditTime: 2023-09-26 21:42:13
 * @FilePath: \my-project\src\views\cart\Cart.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cart">
    <!-- 头部导航栏设置 -->
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="search" size="30" />
      </template>
    </van-nav-bar>

    <!-- 商品内容 -->
    <div class="cart-main">
      <div class="order-content">
        <div class="bundle-main">
          <van-checkbox-group v-model="result">
            <van-cell-group>
              <van-cell-group>
                <van-cell
                  value="回力官方旗舰店男生鞋高帮板鞋子男士2023秋新款休闲篮球运动鞋男"
                  label="描述信息"
                  v-for="(item, index) in list"
                  clickable
                  :key="item"
                  @click="toggle(index)"
                >
                  <template #right-icon>
                    <van-checkbox :name="item" ref="checkboxes" />
                  </template>
                  <template #title>
                    <span class="custom-title" >商品{{item}}</span>
                    <van-tag type="danger">热买</van-tag>
                  </template>
                </van-cell>
              </van-cell-group>
            </van-cell-group>
          </van-checkbox-group>
        </div>
      </div>
    </div>

    <!-- 底部提交栏 -->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
      <template #tip>
        <span @click="onClickEditAddress">是否需要修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      show: false,
      list: ["a", "b"],
      result: [],
      checked: false
    };
  },
  methods: {
    //返回主页
    onClickLeft() {
      this.$router.go(-1);
    },
    //搜索页面
    onClickRight() {
      this.$router.push("/search");
    },
    // 提交购物车
    onSubmit() {
      this.$toast("提交成功");
    },
    // 商品全选
    checkAll(){
      if(this.checked){
        this.result = this.list
      }else{
        this.result = []
      }
    },
    // 修改地址
    onClickEditAddress() {
      this.$router.push("/addressList");
    },
    // 复选框
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
  },
};
</script>

<style>
.cart-main {
  min-height: 210px;
  /* background: red; */
}
.order-content {
  border: 1px solid #f5f5f5;
  background-color: #f5f5f5;
  border-radius: 18px;
  margin: 0 24px;
  overflow: hidden;
}
</style>