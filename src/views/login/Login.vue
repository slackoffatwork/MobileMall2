<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-19 18:06:00
 * @LastEditors: “YZ” “929876936@qq.com”
 * @LastEditTime: 2023-10-09 00:57:34
 * @FilePath: \my-project\src\views\login\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login">
    <div class="top">
      <van-icon name="shop-o" size="100px" color="#000" />
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          left-icon="smile-o"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          left-icon="smile-comment-o"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="captcha"
          name="验证码"
          label="验证码"
          placeholder="验证码"
          left-icon="other-pay"
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
          <template #button>
            <van-image :src="img" @click="changeVerifCodeImage">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </template>
        </van-field>
      </van-cell-group>
      <van-button round block type="info" native-type="submit">提交</van-button>
    </van-form>
  </div>
</template>

<script>
import {mapState,mapMutations,mapAction,mapGetters } from 'vuex'
import { reqVerifCodeImage } from '@/api';

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      captcha:"",
      img:"",
    };
  },
  mounted(){
    this.$store.dispatch('getVerifCodeImageUrl')
  },
  methods: {
    // 登录 提交前端用户数据
    onSubmit(values) {
      console.log("submit", values);
      this.$router.push("/");
    },
    // 登录 刷新验证码图片
    changeVerifCodeImage(){
      var num=Math.ceil(Math.random()*10);
      this.img = `${this.verifCodeImageValue}?` + num
    },
  },
  computed:{
    ...mapState({
      verifCodeImageUrl: state => state.login.verifCodeImageUrl
    }),
    verifCodeImageValue(){
      return this.img = this.verifCodeImageUrl || ''
    }
  }
};
</script>

<style>
.login {
  /* background-image: url("@/assets/img/temp/bg.jpg"); */
  background: rgb(248, 248, 248);
}
.top {
  height: 220px;
  width: 100%;
  text-align: center;
}
.van-icon {
  line-height: 220px;
}
</style>