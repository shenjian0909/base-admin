<template>
  <!-- 表格主体 -->
  <div class="card table-main">
    <!-- 表格头部 操作按钮 -->
    <div class="table-header">
      <div class="header-button-lf">
        <slot name="tableHeader" />
      </div>
      <div v-if="toolButton" class="header-button-ri">
        <slot name="toolButton">
          <el-button
            v-if="showToolButton('refresh')"
            :icon="Refresh"
            circle
            @click="refreshTable"
          />
          <el-button
            v-if="showToolButton('setting') && columns.length"
            :icon="Operation"
            circle
            @click="openColSetting"
          />
        </slot>
      </div>
    </div>
    <!-- 表格主体 -->
    <el-table
      ref="tableRef"
      v-bind="$attrs"
      :data="tableData"
      :border="border"
      :row-key="rowKey"
      @selection-change="handleSelectionChange"
    >
      <!-- 默认插槽 -->
      <slot />
      <template v-for="item in tableColumns" :key="item">
        <!-- selection || radio || index || expand || sort -->
        <el-table-column
          v-if="item.type && columnTypes.includes(item.type)"
          v-bind="item"
          :align="item.align ?? 'center'"
          :reserve-selection="item.type == 'selection'"
        >
          <template #default="scope">
            <!-- expand -->
            <template v-if="item.type == 'expand'">
              <component :is="item.render" v-bind="scope" v-if="item.render" />
              <slot v-else :name="item.type" v-bind="scope" />
            </template>
            <!-- radio -->
            <el-radio
              v-if="item.type == 'radio'"
              v-model="radio"
              :label="scope.row[rowKey]"
            >
              <i />
            </el-radio>
            <!-- sort -->
            <el-tag v-if="item.type == 'sort'" class="move">
              <el-icon> <DCaret /></el-icon>
            </el-tag>
          </template>
        </el-table-column>
        <!-- other -->
        <TableColumn v-if="!item.type && item.prop" :column="item">
          <template v-for="slot in Object.keys($slots)" #[slot]="scope">
            <slot :name="slot" v-bind="scope" />
          </template>
        </TableColumn>
      </template>
      <!-- 插入表格最后一行之后的插槽 -->
      <template #append>
        <slot name="append" />
      </template>
    </el-table>
    <!-- 分页部分 -->
    <div v-if="isPageable" class="paging my10 mt-3">
      <el-pagination
        class="pagination"
        layout="prev, pager, next , total,jumper"
        v-model:page-size="page.pageSize"
        v-model:current-page="page.pageNum"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :total="page.total"
      />
    </div>
  </div>
  <!-- 列设置 -->
  <ColSetting v-if="toolButton" ref="colRef" v-model:col-setting="colSetting" />
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { ElTable } from "element-plus";
import { Refresh, Operation, DCaret } from "@element-plus/icons-vue";
import TableColumn from "./components/TableColumn.vue";
import ColSetting from "./components/ColSetting.vue";
import type {
  ComTableProps,
  TypeProps,
  ColumnProps
} from "@/components/ComTable/interface";
const emits = defineEmits([
  "selection-change",
  "current-change",
  "size-change",
  "refresh-table"
]);
const props = withDefaults(defineProps<ComTableProps>(), {
  columns: () => [],
  isPageable: true,
  pageInfo: () => ({
    pageNum: 1,
    pageSize: 10,
    total: 0
  }),
  tableData: () => [],
  rowKey: "id",
  border: true,
  loading: false,
  toolButton: false
});

// table实例
const tableRef = ref<InstanceType<typeof ElTable>>();

// column 列类型
const columnTypes: TypeProps[] = [
  "selection",
  "radio",
  "index",
  "expand",
  "sort"
];

// 接收 columns 并设置为响应式
const tableColumns = reactive<ColumnProps[]>(props.columns);

// 接收 pageInfo 并设置为响应式
const page = reactive<ComTableProps["pageInfo"]>(props.pageInfo);

// 单选值
const radio = ref("");

// 控制 ToolButton 显示
const showToolButton = (key: "refresh" | "setting" | "search") => {
  return Array.isArray(props.toolButton)
    ? props.toolButton.includes(key)
    : props.toolButton;
};

// 列设置 ==> 需要过滤掉不需要设置的列
const colRef = ref();
const colSetting = tableColumns!.filter(item => {
  const { type, prop, isShow } = item;
  return !columnTypes.includes(type!) && prop !== "operation" && isShow;
});
const openColSetting = () => colRef.value.openColSetting();

// 多选
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

// 刷新表格
const refreshTable = () => {
  emits("refresh-table");
};

defineExpose({
  element: tableRef,
  radio
});
</script>
<style lang="scss"></style>
