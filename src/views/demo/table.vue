<template>
  <div class="table-demo">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>

    <el-button type="primary" @click="getTableRef">获取表格实例</el-button>
    <el-button type="primary" @click="getSelectedRow">获取多选数据</el-button>
    <el-button type="primary" @click="selectAllRow">全选</el-button>
    <el-button type="primary" @click="cancelAll">取消全选</el-button>
    <el-button type="primary" @click="selectRow">选中第3行</el-button>
    <div style="height: 500px">
      <com-table
        class="mt-3"
        :table-data="tableData"
        :table-columns="columns"
        ref="tableRef"
        @row-click="handleRowClick"
      />
    </div>
  </div>
</template>

<script setup lang="tsx">
import { ref } from "vue";
// import ComTable from "@/components/ComTable/index.vue";
import ComTable from "@/components/CommonTable/ComTable.vue";

import { ElMessage } from "element-plus";
// import { ColumnProps } from "@/components/ComTable/interface";
import { IColumnProps } from "@/components/CommonTable/interface";
const activeName = ref("first");
const handleClick = () => {};

const handleRowClick = (row: any) => {
  ElMessage.success(`点击了第${row.id}行`);
};

const tableRef = ref();
// 获取表格实例
const getTableRef = () => {
  console.log(tableRef.value?.element);
};
// 全选/取消全选
const selectAllRow = () => {
  tableRef.value.element.clearSelection();
  tableRef.value.element.toggleAllSelection();
};
const cancelAll = () => {
  tableRef.value.element.clearSelection();
};
const getSelectedRow = () => {
  tableRef.value?.getSelectedRow();
};
// 选中第3行
const selectRow = () => {
  const row = tableData[2];
  tableRef.value.element!.toggleRowSelection(row, undefined);
};
const tableData = [
  {
    id: 1,
    username: "zhangsan",
    age: 12,
    title1: "反倒是离开就反倒是离开就反倒是离开就反倒是离开就",
    title2: "反倒是离开就",
    title3: "反倒是离开就"
  },
  {
    id: 2,
    username: "zhangsan",
    age: 12,
    title1: "反倒是离开就",
    title2: "反倒是离开就",
    title3: "反倒是离开就"
  },
  {
    id: 3,
    username: "zhangsan",
    age: 12,
    title1: "反倒是离开就",
    title2: "反倒是离开就",
    title3: "反倒是离开就"
  },
  {
    id: 4,
    username: "zhangsan",
    age: 12,
    title1: "反倒是离开就",
    title2: "反倒是离开就",
    title3: "反倒是离开就"
  },
  {
    id: 5,
    username: "zhangsan",
    age: 12,
    title1: "反倒是离开就",
    title2: "反倒是离开就",
    title3: "反倒是离开就"
  }
];
const columns: IColumnProps[] = [
  { type: "selection", fixed: "left", width: 70 },
  { type: "index", label: "序号", width: 80 },
  { prop: "title1", label: "标题1", width: "280" },
  { prop: "title2", label: "标题2", width: "280" },
  { prop: "title3", label: "标题3", width: "280" },
  { prop: "title4", label: "标题4", width: "280" },
  { prop: "title5", label: "标题5", width: "180" },
  {
    prop: "username",
    label: "用户姓名",
    width: 120
  },
  {
    prop: "age",
    label: "年龄",
    width: "120px",
    fixed: "right"
  },
  {
    prop: "operation",
    label: "操作",
    fixed: "right",
    width: 180
  }
];
</script>

<style lang="scss" scoped>
.table-demo {
  height: 100%;
}
</style>
