<template>
  <div class="table-demo">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
    <com-table :table-data="tableData" :columns="columns" />
  </div>
</template>

<script setup lang="tsx">
import { ref } from "vue";
import ComTable from "@/components/ComTable/index.vue";
import { ElMessage } from "element-plus";
import { ColumnProps } from "@/components/ComTable/interface";
const activeName = ref("first");
const handleClick = () => {};
const tableData = [{ id: 1, username: "zhangsan", age: 12 }];
const columns: ColumnProps[] = [
  { type: "selection", fixed: "left", width: 70 },
  { type: "sort", label: "Sort", width: 80 },
  { type: "expand", label: "Expand", width: 85 },
  {
    prop: "username",
    label: "用户姓名",
    isShow: true,
    render: scope => {
      return (
        <el-button
          type="primary"
          link
          onClick={() => ElMessage.success("我是通过 tsx 语法渲染的内容")}
        >
          {scope.row.username}
        </el-button>
      );
    }
  },
  {
    prop: "age",
    label: "年龄",
    width: "120px",
    isShow: true
  }
];
</script>

<style lang="scss" scoped>
.table-demo {
  height: 100%;
}
</style>
