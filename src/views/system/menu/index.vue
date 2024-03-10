<script setup lang="ts">
import { ref } from "vue";
import { Delete, EditPen, Plus } from "@element-plus/icons-vue";
import AddDialog from "./components/addDialog.vue";
const searchParam = ref({});
const searchCols = ref([
  { el: "input", label: "菜单名称", key: "keyword" },
  {
    el: "commonSelect",
    label: "状态",
    key: "orderStatus",
    clearable: true,
    selectType: "PAY_STATUS"
  }
]);
const columns = ref([
  {
    label: "菜单名称",
    prop: "menuName",
    minWidth: 150,
    isShow: true
  },
  {
    label: "图标",
    prop: "icon",
    minWidth: 150,
    isShow: true
  },
  {
    label: "排序",
    isShow: true,
    prop: "rank"
  },
  {
    label: "菜单路径",
    prop: "path",
    minWidth: 450,
    isShow: true
  },
  {
    label: "组件路径",
    prop: "component",
    minWidth: 350,
    isShow: true
  },
  {
    label: "菜单状态",
    prop: "showLink",
    isShow: true
  },
  {
    label: "创建时间",
    prop: "status",
    isShow: true
  },
  {
    label: "操作",
    prop: "operate",
    isShow: true,
    minWidth: "200px",
    fixed: "right"
  }
]);

const tableData = [
  {
    id: "121856222521775925",
    menuType: "1",
    menuName: "系统管理",
    icon: "https://i.imgtg.com/2023/01/16/QRqMK.jpg",
    rank: 1,
    isUrl: "False",
    path: "/system",
    component: "system/menu/index",
    showLink: "True",
    hideMenu: "False",
    children: [
      {
        id: 11,
        menuType: "2",
        menuName: "用户管理",
        icon: "https://i.imgtg.com/2023/01/16/QRqMK.jpg",
        rank: 1,
        isUrl: "False",
        path: "/system",
        component: "system/menu/index",
        showLink: "True",
        hideMenu: "False",
        children: [
          {
            id: 111,
            menuType: "3",
            menuName: "新增",
            role: "system/add"
          },
          {
            id: 112,
            menuType: "3",
            menuName: "编辑",
            role: "system/edit"
          },
          {
            id: 113,
            menuType: "3",
            menuName: "删除",
            role: "system/delete"
          }
        ]
      },
      {
        id: 12,
        menuType: "2",
        menuName: "角色管理",
        icon: "https://i.imgtg.com/2023/01/16/QRqMK.jpg",
        rank: 1,
        isUrl: "False",
        path: "/system",
        component: "system/menu/index",
        showLink: "True",
        hideMenu: "False"
      },
      {
        id: 13,
        menuType: "2",
        menuName: "菜单管理",
        icon: "https://i.imgtg.com/2023/01/16/QRqMK.jpg",
        rank: 1,
        isUrl: "False",
        path: "/system",
        component: "system/menu/index",
        showLink: "True",
        hideMenu: "False"
      }
    ]
  },
  {
    id: "2",
    menuType: "1",
    menuName: "系统工具",
    icon: "https://i.imgtg.com/2023/01/16/QRqMK.jpg",
    rank: 2,
    isUrl: "False",
    path: "/tools",
    component: "system/tool/index",
    showLink: "False",
    hideMenu: "False",
    children: [
      {
        id: "21",
        menuType: "2",
        menuName: "代码生成",
        icon: "https://i.imgtg.com/2023/01/16/QRqMK.jpg",
        rank: 2,
        isUrl: "False",
        path: "/system",
        component: "system/menu/index",
        showLink: "True",
        hideMenu: "False"
      }
    ]
  },
  {
    id: "3",
    menuType: "2",
    menuName: "com官网",
    icon: "https://i.imgtg.com/2023/01/16/QRqMK.jpg",
    rank: 3,
    isUrl: "False",
    path: "/index",
    component: "home/index",
    showLink: "False",
    hideMenu: "False"
  }
];

// 新增
const addRef = ref();
function add() {
  console.log("新增");
  addRef.value.open();
}

// 搜索
function search() {
  console.log(searchParam.value);
}

// 刷新
function refresh() {
  console.log("刷新");
}

// 重置
function reset() {
  console.log("============");
}
</script>

<template>
  <div class="meun-manage bg-white rounded p-[10px] flex flex-col h-full">
    <search-form
      :columns="searchCols"
      :search="search"
      :reset="reset"
      :searchParam="searchParam"
    />
    <com-table
      :columns="columns"
      :border="true"
      :tableData="tableData"
      :isPageable="false"
      :toolButton="true"
      @refresh-table="refresh"
      class="flex-1"
    >
      <template #tableHeader>
        <el-button type="primary" @click="add">新增</el-button>
      </template>
      <template #showLink="{ row }">
        <el-tag v-if="row.showLink === 'True'">正常</el-tag>
        <el-tag v-else type="danger">隐藏</el-tag>
      </template>
      <template #operate>
        <el-button type="primary" :icon="EditPen" link size="small"
          >修改</el-button
        >
        <el-button type="primary" :icon="Plus" link size="small"
          >新增</el-button
        >
        <el-button type="primary" :icon="Delete" link size="small"
          >删除</el-button
        >
      </template>
    </com-table>
    <add-dialog ref="addRef" />
  </div>
</template>

<style lang="scss" scoped>
.menu-manage {
  .table {
    height: calc(100% - 100px);
  }
}
</style>
