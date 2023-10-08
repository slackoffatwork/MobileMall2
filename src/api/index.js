/*
 * @Author: “YZ” “929876936@qq.com”
 * @Date: 2023-09-18 15:22:38
 * @LastEditors: “YZ” “929876936@qq.com”
 * @LastEditTime: 2023-10-08 10:11:13
 * @FilePath: \my-project\src\api\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "./request";
export const getAll = () => request({url: "/sc/goodsController/goods",method: "get"});
// 获取验证码图片
export const reqVerifCodeImageUrl = () => request({url: "/doGetVerifCodeImage",method: "get"});