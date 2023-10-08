/*
 * @Author: “YZ” “929876936@qq.com”
 * @Date: 2023-10-07 20:32:19
 * @LastEditors: “YZ” “929876936@qq.com”
 * @LastEditTime: 2023-10-09 00:30:22
 * @FilePath: \my-project\src\store\login\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {reqVerifCodeImageUrl} from "@/api";

const state = {
  verifCodeImageUrl:'',
}
const mutations = {
  VERIFCODEIMAGEURL(state,verifCodeImageUrl){
    state.verifCodeImageUrl = verifCodeImageUrl
  },

}
const actions = {
  async getVerifCodeImageUrl({commit}){
    let res = await reqVerifCodeImageUrl()
    if(res.data.code === 200)
      commit("VERIFCODEIMAGEURL",res.data.data)
  },
    
}
const getters = {}

export default {
  state, mutations, actions, getters
}