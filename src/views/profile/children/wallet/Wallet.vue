<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-18 15:20:16
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-09-18 15:51:43
 * @FilePath: \my-project\src\views\profile\children\wallet\Wallet.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class='wallet'>
    <!-- 顶部导航栏 -->
    <div class="category-nav">
    <van-nav-bar title="我的钱包" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-icon name="search" size="30" />
      </template>
    </van-nav-bar>
    </div>

      <div class="info">
        <div class="top">
          <span>总资产(元)</span>
          <span>累计充值(元)</span>
          <span>累计消费(元)</span>
        </div>
        <div class="botton">
          <span>11111</span>
          <span>2222</span>
          <span>3333</span>
        </div>
      </div>



      <div class="recharge">
        <div class="top">
          <button>充值</button>
        </div>
        <div class="botton">
          <span>11111</span>
        </div>
      </div>
    
  </div>
</template>
  
<script>
export default {
  name: 'wallet',
  methods: {
    //返回主页
    onClickLeft() {
      this.$router.push('/profile')
    },
    //搜索页面
    onClickRight() {
      this.$router.push('/search')
    }
  },
}

</script>
  
<style scoped>
.el-button--text{
  border-color: transparent;
    background: 0 0;
    padding-left: 0;
    font-size: 25px;
    padding-right: 0;
}
.nav-tabbar {
  background: white;
  color: black;
}

.info {
  width: 95%;
  height: 70px;
  background: black;
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start
}


.info span {
  font-size: 14px;
  font-weight: 600;
  color: rgb(140, 104, 91);
  margin-left: 10px;
  margin-right: 10px;
}

.recharge {
  width: 95%;
  height: 70px;
  background: pink;
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around
}

.recharge .top button {
  width: 50px;
  height: 30px;
  background: red;
}

.wallet {
  background: #ffff;
}
</style>