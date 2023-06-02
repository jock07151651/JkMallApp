"use strict";
const common_vendor = require("../common/vendor.js");
const services_home = require("../services/home.js");
const useHomeStore = common_vendor.defineStore("home", {
  state: () => {
    return {
      banners: [],
      // 当做是从网络请求拿下来的数据
      remmends: [
        {
          name: "新蜂超市",
          imgUrl: "https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png",
          categoryId: 100001
        },
        {
          name: "新蜂服饰",
          imgUrl: "https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png",
          categoryId: 100003
        },
        {
          name: "全球购",
          imgUrl: "https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png",
          categoryId: 100002
        },
        {
          name: "新蜂生鲜",
          imgUrl: "https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png",
          categoryId: 100004
        }
      ]
    };
  },
  getters: {},
  mutations: {},
  actions: {
    // getHomeBannerDataAction() {
    // 	getHomeBannerData().then(res => {
    // 		this.banners = res.data.carousels
    // 	})
    // }
    // 异步获取
    async getHomeBannerDataAction() {
      const res = await services_home.getHomeBannerData();
      this.banners = res.data.carousels;
    }
  }
});
exports.useHomeStore = useHomeStore;
