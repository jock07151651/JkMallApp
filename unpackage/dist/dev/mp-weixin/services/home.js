"use strict";
const services_index = require("./index.js");
function getHomeBannerData() {
  return services_index.JKRequest.get("/api/v1/index-infos", {});
}
exports.getHomeBannerData = getHomeBannerData;
