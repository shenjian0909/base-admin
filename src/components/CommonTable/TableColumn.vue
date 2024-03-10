<template>
  <el-table-column v-bind="column" :show-overflow-tooltip="column.showOverflow">
    <template v-if="column.children && column.children.length > 0">
      <template v-for="item in column.children" :key="item.prop">
        <TableColumn :column="item" />
      </template>
    </template>
    <template v-if="column.slot" #default="scope">
      <slot :name="column.slot" v-bind="scope" />
    </template>
  </el-table-column>
</template>

<script setup lang="ts">
defineOptions({
  name: "TableColumn"
});
defineProps({
  column: Object
});
</script>

<style scoped></style>
