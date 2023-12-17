import { getPackageSize } from "./build";
import type { SFCWithInstall } from "./types";
import { storageLocal, storageSession } from "./storage";
import { copyTextToClipboard } from "./copyText";
import {
  isEmpty,
  isEqual,
  isBoolean,
  isObject,
  isFunction,
  cloneDeep,
  debounce,
  throttle,
  isString,
  isArray
} from "lodash-es";

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};

// 判断当前设备是mobile还是desktop
export function deviceDetection(): boolean {
  const userAgent = window.navigator.userAgent;
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

  if (mobileRegex.test(userAgent)) {
    return true;
  } else {
    return false;
  }
}

// 判断是不是链接
function isUrl(url: string) {
  const reg =
    "^((https|http|ftp|rtsp|mms)?://)(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,5})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
  return new RegExp(reg, "ig").test(url);
}

function subBefore(str, n) {
  return isString(n) ? str.substring(0, str.indexOf(n)) : "";
}
function subAfter(str, n) {
  return isString(n)
    ? str.substring(str.lastIndexOf(n) + n.length, str.length)
    : "";
}

export {
  storageLocal,
  storageSession,
  isBoolean,
  isObject,
  isEqual,
  isFunction,
  isUrl,
  isArray,
  cloneDeep,
  debounce,
  throttle,
  copyTextToClipboard,
  subBefore,
  subAfter
};
export const isAllEmpty = isEmpty;
export default {
  getPackageSize,
  withInstall,
  storageLocal,
  storageSession
};
