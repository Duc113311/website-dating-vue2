import Vue from "vue";

/**
 * Thiết bị
 */
const deviceType = {
  devicePC: "PC", // PC
  deviceLaptop: "laptop", // Laptop
  devicePhone: "Điện thoại", // Điện thoại
};

Vue.prototype.$enumName = {
  deviceType,
};
