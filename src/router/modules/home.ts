import { $t } from "@/plugins/i18n";
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/home",
  title: "首页",
  rank: 0,
  icon: "homeFilled",
  children: [
    {
      path: "/home",
      name: "Welcome",
      component: () => import("@/views/home/index.vue"),
      title: $t("menus.hshome")
    }
  ]
};
