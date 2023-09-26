<template>
  <div class="detail">
    <!-- 头部导航栏设置 -->
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="search" size="30" />
      </template>
    </van-nav-bar>

    <!-- 轮播图 -->
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <van-image :src="image" lazy-load>
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/2</div>
      </template>
    </van-swipe>

    <!-- 商品参数 -->
    <div class="detail-info">
      <van-cell-group inset>
        <van-cell
          title="10.00"
          value=" 浏览  销量"
          label="新鲜当季水果 现摘现卖"
        />
      </van-cell-group>
    </div>

    <!-- 商品规格 -->
    <div class="sku" @click="onShowSku">
      <van-cell title="请选择规格:">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" />
        </template>
      </van-cell>
    </div>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />

    <!-- 商品信息导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="urlChange"/>
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart"/>
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      //轮播图
      images: [
        "https://img01.yzcdn.cn/vant/apple-3.jpg",
        "https://img01.yzcdn.cn/vant/apple-4.jpg",
      ],
      // 商品数据
      current: 0,
      show: false,
      // 选择规则数据 临时
      // 商品id
      goodsId: "20",
      // 限购数量
      quota: 0,
      // 已购买过的数量
      quotaUsed: 2,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img01.yzcdn.cn/vant/apple-4.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img01.yzcdn.cn/vant/apple-4.jpg", // 用于预览显示的规格类目图片
              },
              {
                id: "2",
                name: "蓝色",
                imgUrl: "https://img01.yzcdn.cn/vant/apple-3.jpg",
                previewImgUrl: "https://img01.yzcdn.cn/vant/apple-3.jpg",
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 1, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
          {
            id: 2, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "", // 可选值，占位文本
            extraDesc: "", // 可选值，附加描述文案
          },
        ],
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        picture: "https://img01.yzcdn.cn/vant/apple-3.jpg",
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise((resolve) => {
            setTimeout(
              () =>
                resolve(
                  "https://img01.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx",
        },
        // 初始留言信息
        // 键：留言 name
        // 值：留言内容
        initialMessages: {
          留言: "留言信息",
        },
      },
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    // 添加购物车
    onAddCartClicked() {
      this.$toast("添加购物车成功")                      
    },
    // 立即购买
    onBuyClicked() {
      console.log("buy clicked");
    },
    // 弹出规格选择框
    onShowSku() {
      this.show = true;
    },
    //返回主页
    onClickLeft() {
      this.$router.push("/home");
    },
    //搜索页面
    onClickRight() {
      this.$router.push("/search");
    },
    urlChange(){
      this.$router.push("/cart") 
    },
    addCart(){
      this.$toast("添加购物车成功")                           
    }
  },
  mounted() {},
  components: {},
};
</script>

<style>
@import "../../assets/css/base.css";

.van-swipe {
  width: 90%;
  height: 300px;
  margin: 0 auto;
}

.van-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}

.van-cell-group--inset {
  top: 20px;
}

.sku {
  width: 90%;
  margin: 0 auto;
  top: 40px;
  position: relative;
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>