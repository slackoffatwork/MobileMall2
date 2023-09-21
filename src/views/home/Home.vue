<template>
  <div class="home">
    <van-pull-refresh @refresh="onRefresh" v-model="isLoading">
      <!-- 搜索 -->
      <form action="/search">
        <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
      </form>
      <!-- 轮播图 -->
      <van-swipe>
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" style="width: 100%;" />
        </van-swipe-item>
      </van-swipe>
      <!-- 分类 -->
      <div class="control">
        <div class="control-list">
          <router-link to="/category">
            <div class="img">
              <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="text">全部商品</div>
          </router-link>
        </div>
        <div class="control-list">
          <div class="img">
            <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div class="text">优惠券</div>
        </div>
        <div class="control-list">
          <div class="img">
            <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div class="text">积分商品</div>
        </div>
        <div class="control-list">
          <div class="img">
            <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div class="text">积分签到</div>
        </div>
      </div>
      <!-- 限时拼团 -->
      <div class="group size">
        <div class="group-title">限时拼团</div>
        <div class="group-list">
          <div class="group-item" v-for="(goods, index) in goodslist" :key="index">
            <!-- 商品展示 -->
            <router-link :to="`/detail/${goods.id}`">
              <van-card num="2" tag="拼团" price="2.00" desc="描述信息" title="商品标题"
                thumb="https://img01.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
            </router-link>
          </div>
        </div>
      </div>
      <!-- 精品推荐 -->
      <div class="boutique size">
        <div class="boutique-title">精品推荐</div>
        <div class="boutique-list">
          <div class="boutique-item" v-for="(goods, index) in goodslist" :key="index">
            <!-- 商品展示 -->
            <router-link :to="`/detail/${goods.id}`">
              <van-card num="2" tag="精品" price="2.00" desc="描述信息" title="商品标题"
                thumb="https://img01.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
            </router-link>

          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>

export default {
  name: 'Home',
  // 数据模拟
  data() {
    return {
      // 测试刷新数据
      num: 0,
      isLoading: false,
      value: '',
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
      goodslist: [
        {
          id: 1,
          name: '商品1',
          price: 100,
          desc: '商品描述信息',
          img: 'https://img01.yzcdn.cn/vant/apple-1.jpg'
        },
        {
          id: 2,
          name: '商品2',
          price: 100,
          desc: '商品描述信息',
          img: 'https://img01.yzcdn.cn/vant/apple-2.jpg'
        }
      ]
    }
  },
  methods: {
    // 测试刷新方式
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.num++;
      }, 1000);
    },
    // 获取搜索框的值
    onSearch(val) {
      // Toast(val);
      this.$toast(val)
    },
    // 取消搜索
    onCancel() {
      // Toast('取消');
      this.$toast('取消')
    },
  },
}

</script>

<style>
.home {
  background: rgb(248, 248, 248);
}

.nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background: pink;
}

.tab-control {
  position: sticky;
  top: 44px;
}

.control {
  width: 100%;
  height: 100px;
  display: flex;
  /* background: red; */
}

.control .control-list {
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  /* background: red; */
}

.control .control-list .img {
  height: 50%;
}

.control .control-list .text {
  height: 50%;
  text-align: center;
  line-height: 70px;
  font-size: 18px;
}

.size {
  width: 90%;
  margin: 0 auto;
  border: 1px solid #ccc;
}
</style>