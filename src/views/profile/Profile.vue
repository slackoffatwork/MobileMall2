<template>
  <div class="box">
    <!-- 头部导航栏设置 -->
    <van-nav-bar class="bgcolor">
      <template #right>
        <van-icon name="setting-o" size="30" />
      </template>
    </van-nav-bar>
    <!-- 顶部背景 -->
    <div class="background">
      <!-- 用户信息 -->
      <div class="user">
        <!-- 头像模块 -->
        <div class="head">
          <img src="@/assets/img/temp/GGBond.jpg" alt="">
        </div>
        <!-- 用户名模块 -->
        <div class="name">
          <span>猪猪侠</span>
        </div>
      </div>



      <!-- 个人信息模块 -->
      <div class="info">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">200.0</div>
            <div class="grid-content bg-purple2">余额</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">1</div>
            <div class="grid-content bg-purple2">优惠券</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">32</div>
            <div class="grid-content bg-purple2">购买数</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">444</div>
            <div class="grid-content bg-purple2">积分</div>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 订单模块 -->
    <div class="m-count">
      <span class="">未支付</span>
      <span class="">待发货</span>
      <span class="">待收货</span>
      <span class="">待评价</span>
      <span class="">已完成</span>
    </div>

    <!-- 菜单模块 -->
    <div class="menu">
      <div class="m-list">
        <span><router-link to="/addressList">地址管理 ></router-link></span>
        <span><router-link to="/wallet">我的钱包 ></router-link></span>
        <span><router-link to="/">我的优惠 ></router-link></span>
        <span><router-link to="/">我的收藏 ></router-link></span>
        <span><router-link to="/footprint">我的足迹 ></router-link></span>
        <span><router-link to="/">修改密码 ></router-link></span>
      </div>
    </div>

    <!-- 使用echarts统计用户的购买量 -->
    <div class="m-chart">
      <div class="m-title">
        <van-button square type="info">导出</van-button>
        <div id="echartsMain" style="width: 100%;height:500px;"></div>
      </div>


    </div>



  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      dataMax: [
        {
          name: '服装类',
          max: 100
        },
        {
          name: '生活用品',
          max: 100
        },
        {
          name: '功能',
          max: 100
        },
        {
          name: '跑分',
          max: 100
        },
        {
          name: '续航',
          max: 100
        },
      ]
    };
  },
  mounted() {
    this.showCharts()
  },
  methods: {
    showCharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('echartsMain'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: '用户购买量统计'
        },
        radar: {
          indicator: this.dataMax,  //配置各个维度的最大值
          shape: 'circle',     //配置雷达图最外层的图形
        },
        series: [
          {
            type: 'radar',
            label: {
              show: true
            },
            areaStyle: {},
            data: [
              {
                name: '华为手机',
                value: [20, 90, 80, 82, 90]
              },
              {
                name: '中兴手机',
                value: [70, 2, 75, 70, 48]
              }
            ]
          }
        ]
      })
    },
  }
}
</script>

<style scoped>
.m-chart {
  width: 100%;
  height: 500px;
  background: white;
  position: relative;
  top: 80px;
  text-align: center;
  margin: 0 auto;
}

.m-chart .m-title .van-button {
  position: absolute;
  right: 0;
  top: 0;
}

.van-nav-bar {
  height: 0;
}

.van-nav-bar .van-icon {
  color: white;
}

.bgcolor {
  background: rgb(253, 27, 73);
}


.grid-content {
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.bg-purple {
  color: rgb(190, 50, 83);
  font-size: 20px;
}

.bg-purple2 {
  font-size: 12px;
}

.box {
  background: rgb(194, 194, 194);
}

.background {
  width: 100%;
  height: 250px;
  background-color: rgb(253, 27, 73);
  border-radius: 0px 0px 25px 25px;
}

.user {
  width: 172px;
  height: 100px;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
  left: 20px;
  top: 40px;
}

.head {
  width: 100px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.head img {
  width: 100px;
  height: 75px;
  border-radius: 30px;
}

.name span {
  font-size: 20px;
  color: #000;
  line-height: 75px;
  position: relative;
  left: 20px;

}

.info {
  width: 92%;
  height: 100px;
  justify-content: space-around;
  margin: 0 auto;
  position: relative;
  top: 80px;
  background-color: rgb(62, 23, 31);
  border-radius: 10px;
  justify-content: space-around;
  color: #fff;
  text-align: center;
  display: grid;
  grid-auto-flow: row;
  align-content: center;
}

.info .top span {
  width: 100%;
  height: 50%;
  font-size: 25px;
  color: rgb(166, 61, 81);
}

.info .bottom span {
  width: 100%;
  height: 50%;
  font-size: 20px;
  color: red;
}


.m-count {
  width: 90%;
  height: 100px;
  background-color: rgb(254, 254, 254);
  justify-content: space-around;
  color: #fff;
  text-align: center;
  font-size: 20px;
  line-height: 100px;
  margin: 0 auto;
  display: flex;
  position: relative;
  top: 40px;
}

.m-count span {
  flex: 1;
  color: #000;

}

.menu {
  width: 90%;
  height: 500px;
  background-color: rgb(254, 254, 254);
  margin: 0 auto;

  flex-direction: column;
  justify-content: space-around;
  position: relative;
  top: 60px;
  align-items: center
}

.m-list {
  display: flex;
  flex-direction: column
}

.menu span {
  flex: 1;
  color: #000;
  font-size: 20px;
  text-align: center;
}

.menu span a {
  text-decoration: none;
  cursor: pointer;
  color: #000;
  line-height: 83px;
}

.nav-tabbar {
  background: rgb(253, 27, 73);
}

.right img {
  width: 40px;
  height: 40px;
  display: inline-block;
  vertical-align: middle
}
</style>