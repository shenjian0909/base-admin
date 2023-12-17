import { isEmpty } from "lodash-es";
enum StorageType {
  LOCAL = "local",
  SESSION = "session"
}
export class MyStorage {
  public storage: Storage;
  constructor(type: StorageType) {
    this.storage =
      type === StorageType.LOCAL ? window.localStorage : window.sessionStorage;
  }
  setItem(key: string, value: any) {
    const data = JSON.stringify(value);
    isEmpty(this.storage) || this.storage.setItem(key, data);
  }
  getItem<T = any>(key: string): T {
    const value = this.storage.getItem(key);
    if (value) {
      return isEmpty(this.storage) || JSON.parse(value);
    }
  }
  removeItem(key) {
    isEmpty(this.storage) || this.storage.removeItem(key);
  }
  clear() {
    isEmpty(this.storage) || this.storage.clear();
  }
}

const storageLocal = function () {
  return new MyStorage(StorageType.LOCAL);
};
const storageSession = function () {
  return new MyStorage(StorageType.SESSION);
};
export { storageLocal, storageSession };
