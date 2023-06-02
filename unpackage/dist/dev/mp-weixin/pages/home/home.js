"use strict";
const common_vendor = require("../../common/vendor.js");
const services_home = require("../../services/home.js");
const store_home = require("../../store/home.js");
require("../../services/index.js");
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_home.useHomeStore();
    let { banners, remmends } = common_vendor.storeToRefs(homeStore);
    common_vendor.onLoad(() => {
      services_home.getHomeBannerData().then((res) => {
        console.log("banner:", res.data.carousels);
      });
      homeStore.getHomeBannerDataAction();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(banners)),
        b: common_vendor.t(common_vendor.unref(remmends))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/JK/Desktop/前端/08_uniapp/03day/JkMallApp/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
