<template>
  <swiper>
    <swiper-item class="swiper-item">
      <div v-for="item in banners">
        <a :href="item.link">
          <img :src="item.img" alt="">
        </a>
      </div>
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {

    }
  },
  // 获取数据
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
}

</script>

<style>
.swiper-item div img{
  width: 200px;
  height: 200px;
}
</style>