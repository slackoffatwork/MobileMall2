import request from "./request";
export const getAll = () => request({url: "/sc/goodsController/goods",method: "get"});