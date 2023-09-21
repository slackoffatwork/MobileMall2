<template>
  <div class="category">
    <!-- 顶部导航栏 -->
    <van-nav-bar title="商品分类" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-icon name="search" size="30" />
      </template>
    </van-nav-bar>

    <van-tree-select :items="items" :main-active-index.sync="active" style="height: 100%">
      <template #content>
        <div class="good-list" v-for="(goods, index) in goodsList " :key="goods.id">
          <!-- /${goods.id} -->
          <router-link :to="`/detail/${goods.id}`">
            <van-card :num="goods.num" :price="goods.price" :desc="goods.desc" :title="goods.title"
              :thumb="goods.defaultImg">
              <template #tags>
                <van-tag plain type="danger">标签</van-tag>
                <van-tag plain type="danger">标签</van-tag>
              </template>
              <template #footer>
                <van-button size="mini">购买</van-button>
                <van-button size="mini">收藏</van-button>
              </template>
            </van-card>
          </router-link>
        </div>
      </template>
    </van-tree-select>



  </div>
</template>

<script>


export default {
  name: 'Category',
  data() {
    return {
      active: 0,
      items: [
        { text: '分组 1' },
        { text: '分组 2' },
        { text: '分组 3' },
        { text: '分组 4' },
        { text: '分组 5' },
      ],
      goodsList: [
        {
          id: 3,
          defaultImg: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          price: '20.0',
          desc: 'Apple iPhone 8 Plus (A1864) 64GB 深空灰色 移动联通电信4G手机',
          title: 'Apple',
          num: '23'
        },
        {
          id: 4,
          defaultImg: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          price: '24.0',
          desc: 'Apple iPhone 8 Plus (A1864) 64GB 深空灰色 移动联通电信4G手机',
          title: 'Apple',
          num: '23'
        }
      ]
    }
  },
  methods: {
    //返回主页
    onClickLeft() {
      this.$router.push('/home')
    },
    //搜索页面
    onClickRight() {
      this.$router.push('/search')
    }
  },


}

</script>

<style scoped>
.goods-list {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

.size-img {
  width: 100px;
  height: 100px;
}

.el-button--text {
  border-color: transparent;
  background: 0 0;
  padding-left: 0;
  font-size: 25px;
  padding-right: 0;
}

.box-card {
  width: 100%;
  height: 200px;
}

.el-container {
  /* width: 40%; */
  height: 100%;
  border: 1px solid #eee
}

.el-container .el-aside {
  background-color: rgb(238, 241, 246)
}

.el-aside {
  color: #333;
}

.element.style {
  height: 100%;
}
</style>