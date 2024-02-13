import { $t } from "@/plugins/i18n";
const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/home",
  meta: {
    icon: "homeFilled",
    title: $t("menus.hshome"),
    rank: 0
  },
  children: [
    {
      path: "/home",
      name: "Welcome",
      component: () => import("@/views/home/index.vue"),
      meta: {
        title: $t("menus.hshome"),
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} as RouteConfigsTable;
