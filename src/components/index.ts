import type { App } from "vue";
// 全局注册`@iconify/vue`图标库
import {
  IconifyIconOffline,
  IconifyIconOnline,
  FontIcon
} from "@/components/ReIcon";

// 全局注册按钮级别权限组件
import { Auth } from "@/components/ReAuth";

// 下拉框组件
import CommonSelect from "@/components/CommonSelect/index.vue";

// 搜索组件
import SearchForm from "@/components/SearchForm/index.vue";

// 表格组件
import ComTable from "@/components/CommonTable/ComTable.vue";

export function installComponent(app: App<Element>) {
  app.component("IconifyIconOffline", IconifyIconOffline);
  app.component("IconifyIconOnline", IconifyIconOnline);
  app.component("FontIcon", FontIcon);
  app.component("Auth", Auth);
  app.component("CommonSelect", CommonSelect);
  app.component("SearchForm", SearchForm);
  app.component("ComTable", ComTable);
}

export default installComponent;
