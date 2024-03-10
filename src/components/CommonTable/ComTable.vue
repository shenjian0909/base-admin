<template>
  <div class="com-table">
    <el-table
      :data="tableData"
      class="table-main"
      :class="{ 'page-table': isPageable }"
      border
      style="width: 100%"
      v-loading="loading"
      element-loading-text="数据正在加载中"
      :header-cell-style="headerCellStyle"
      @select="select"
      @selection-change="handleSelectionChange"
    >
      <template v-for="c in tableColumns" :key="c">
        <el-table-column
          v-if="c.type && columnTypes.includes(c.type)"
          v-bind="c"
        >
          <template #default="scope">
            <template v-if="c.type === 'expand'">
              <slot :name="c.type" v-bind="scope" />
            </template>
          </template>
        </el-table-column>
        <TableColumn v-if="!c.type && c.prop" :column="c">
          <template v-for="(_, name) in $slots" #[name]="scope">
            <slot :name="name" v-bind="scope" :colProp="c.prop" />
          </template>
        </TableColumn>
      </template>
    </el-table>
    <div v-if="isPageable" class="paging my10">
      <el-pagination
        class="paginatios-item"
        layout="prev, pager, next , total,jumper"
        v-model:page-size="page.pageSize"
        v-model:current-page="page.pageNum"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :total="page.total"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import TableColumn from "./TableColumn.vue";
import type { IPage, IComTableProps } from "./interface/index";
const emits = defineEmits([
  "select",
  "current-change",
  "size-change",
  "selection-change"
]);
/////////////////////////////////////////////////////////////////////////
const props = withDefaults(defineProps<IComTableProps>(), {
  tableColumns: () => [],
  isPageable: true,
  pageInfo: () => ({
    pageNum: 1,
    pageSize: 10,
    total: 0
  }),
  tableData: () => [],
  headerCellStyle: () => ({
    background: "#f4f4f5",
    borderColor: "#ebeef5"
  })
});
const columnTypes = ["selection", "index", "expand"];

// 接收 pageInfo 并设置为响应式
const page = reactive<IPage>(props.pageInfo);
//方法
////用户手动选择数据行
const select = (selection: any, row: any) => {
  emits("select", selection, row);
};

const handleSelectionChange = (rows: any) => {
  emits("selection-change", rows);
};

// 点击翻页
const handleCurrentChange = (value: number) => {
  emits("current-change", value);
};
// 点击改变每页展示条数
const handleSizeChange = (value: number) => {
  emits("size-change", value);
};
</script>

<style lang="scss" scoped>
.com-table {
  height: 100%;
  font-size: 14px;

  // background-color: #fff;
  .table-main {
    height: 100%;
    &.page-table {
      height: calc(100% - 52px);
    }
  }
  :deep(.el-table--default .el-table__cell) {
    padding: 5px 0;
    color: #666666;
  }
  :deep(.el-table--default .cell) {
    font-size: 14px;
    font-weight: 400;
  }
  :deep(.ope-btn) {
    padding: 0 5px;
    font-size: 12px;
    color: #ffffff;
  }
}
</style>
