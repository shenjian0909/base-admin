<script setup lang="ts">
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
</script>

<template>
  <div>
    <el-table :data="tableData" style="height: 500px">
      <el-table-column type="selection" fixed="left" />
      <el-table-column prop="title1" fixed="left" label="标题1" width="280" />
      <el-table-column prop="title2" label="标题2" width="280" />
      <el-table-column prop="title3" label="标题3" width="280" />
      <el-table-column prop="title4" label="标题4" width="280" />
      <el-table-column prop="title5" label="标题5" width="280" />
      <el-table-column prop="title6" label="标题6" width="280" />
      <el-table-column prop="title1" label="标题7" width="280" />
      <el-table-column prop="username" label="用户姓名" width="280" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="operation" fixed="right" label="操作" />
    </el-table>
  </div>
</template>

<style lang="scss" scoped></style>
