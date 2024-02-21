import { $t } from "@/plugins/i18n";

export default {
  path: "/demo",
  title: $t("menus.hsdemo"),
  rank: 10,
  icon: "informationLine",
  children: [
    {
      path: "/demo/dialog",
      name: "dialog",
      component: () => import("@/views/demo/dialog.vue"),
      title: $t("menus.hsdialog")
    },
    {
      path: "/demo/fonticon",
      name: "fonticon",
      component: () => import("@/views/demo/icon.vue"),
      title: $t("menus.hsicon")
    },
    {
      path: "/demo/theme",
      name: "theme",
      component: () => import("@/views/demo/theme.vue"),
      title: $t("menus.hstheme")
    },
    {
      path: "/demo/table",
      name: "table",
      component: () => import("@/views/demo/table.vue"),
      title: "表格"
    }
  ]
};
