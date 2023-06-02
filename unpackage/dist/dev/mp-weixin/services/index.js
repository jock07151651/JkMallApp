"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "http://backend-api-01.newbee.ltd";
const TIME_OUT = 6e4;
class JKRequest {
  request(url, method, data) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: BASE_URL + url,
        method: method || "GET",
        timeout: TIME_OUT,
        data,
        success(res) {
          resolve(res.data);
        },
        fail(err) {
          reject("err=>:", err);
        }
      });
    });
  }
  get(url, params) {
    return this.request(url, "GET", params);
  }
  post(url, data) {
    return this.request(url, "POST", data);
  }
}
const JKRequest$1 = new JKRequest();
exports.JKRequest = JKRequest$1;
