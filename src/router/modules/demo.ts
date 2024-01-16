import { $t } from "@/plugins/i18n";

export default {
  path: "/demo",
  redirect: "/demo/dialog",
  meta: {
    icon: "informationLine",
    title: $t("menus.hsdemo"),
    rank: 10
  },
  children: [
    {
      path: "/demo/dialog",
      name: "dialog",
      component: () => import("@/views/demo/dialog.vue"),
      meta: {
        title: $t("menus.hsdialog")
      }
    },
    {
      path: "/demo/fonticon",
      name: "fonticon",
      component: () => import("@/views/demo/icon.vue"),
      meta: {
        title: $t("menus.hsicon")
      }
    },
    {
      path: "/demo/theme",
      name: "theme",
      component: () => import("@/views/demo/theme.vue"),
      meta: {
        title: $t("menus.hstheme")
      }
    },
    {
      path: "/demo/table",
      name: "table",
      component: () => import("@/views/demo/table.vue"),
      meta: {
        title: "表格"
      }
    }
  ]
} as RouteConfigsTable;
