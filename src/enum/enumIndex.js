import Vue from "vue";
import { commonName } from "./name/commonName";
import { deviceName } from "./name/deviceName";
import { commonType } from "./type/commonType";
import { deviceType } from "./type/deviceType";

Vue.prototype.$enumName = {
  deviceType,
  commonName,
  deviceName,
  commonType,
};
