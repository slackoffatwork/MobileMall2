/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-18 15:13:59
 * @LastEditors: “YZ” “929876936@qq.com”
 * @LastEditTime: 2023-09-26 21:06:08
 * @FilePath: \my-project\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
import { Notify } from 'vant';
import {Toast} from 'vant'
//引入echarts
import * as echarts from 'echarts';
import { RadioGroup, Radio } from 'vant';



Vue.config.productionTip = false


//vue全局注入echarts
Vue.prototype.$echarts = echarts;
// elementUI
Vue.use(ElementUI);
// vantUI中的轻提示
Vue.use(Toast);
// vantUI
Vue.use(Vant);
Vue.use(Notify);
// vantUI中的懒加载
Vue.use(Lazyload);
Vue.use(Radio);
Vue.use(RadioGroup);


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
