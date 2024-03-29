<template>
  <div v-if="columns.length" class="card comnom-search">
    <el-form ref="formRef" :model="searchParam" label-width="100px">
      <Grid
        ref="gridRef"
        :collapsed="collapsed"
        :gap="[20, 0]"
        :cols="searchCol"
      >
        <GridItem
          v-for="(item, index) in columns"
          :key="item.key"
          v-bind="getResponsive(item)"
          :index="index"
        >
          <el-form-item>
            <template #label>
              <el-space :size="4">
                <span>{{ `${item.label}` }}</span>
                <el-tooltip
                  v-if="item.tooltip"
                  effect="dark"
                  :content="item.tooltip"
                  placement="top"
                >
                  <i :class="'iconfont icon-yiwen'" />
                </el-tooltip>
              </el-space>
              <span>:</span>
            </template>
            <SearchFormItem :column="item" :search-param="searchParam" />
          </el-form-item>
        </GridItem>
        <GridItem suffix>
          <div class="operation flex justify-end items-center mb-[20px]">
            <el-button type="primary" :icon="Search" @click="search">
              搜索
            </el-button>
            <el-button :icon="Delete" @click="reset"> 重置 </el-button>
            <el-button
              v-if="showCollapse"
              type="primary"
              link
              class="search-isOpen"
              @click="collapsed = !collapsed"
            >
              {{ collapsed ? "展开" : "合并" }}
              <el-icon class="el-icon--right">
                <component :is="collapsed ? ArrowDown : ArrowUp" />
              </el-icon>
            </el-button>
          </div>
        </GridItem>
      </Grid>
    </el-form>
  </div>
</template>
<script setup lang="ts" name="SearchForm">
import { computed, ref } from "vue";
import { SearchProps } from "./interface";
import { BreakPoint } from "@/components/Grid/interface";
import { Delete, Search, ArrowDown, ArrowUp } from "@element-plus/icons-vue";
import SearchFormItem from "./components/SearchFormItem.vue";
import Grid from "@/components/Grid/index.vue";
import GridItem from "@/components/Grid/components/GridItem.vue";

interface ISearch {
  columns?: SearchProps[]; // 搜索配置列
  searchParam?: { [key: string]: any }; // 搜索参数
  searchCol?: number | Record<BreakPoint, number>;
  search: (params: any) => void; // 搜索方法
  reset: (params: any) => void; // 重置方法
}

// 默认值
const props = withDefaults(defineProps<ISearch>(), {
  columns: () => [],
  searchParam: () => ({}),
  searchCol: () => ({ xs: 1, sm: 2, md: 2, lg: 3, xl: 4 })
});

// 获取响应式设置
const getResponsive = (item: SearchProps) => {
  return {
    span: item?.span,
    offset: item?.offset ?? 0,
    xs: item?.xs,
    sm: item?.sm,
    md: item?.md,
    lg: item?.lg,
    xl: item?.xl
  };
};

// 是否默认折叠搜索项
const collapsed = ref(true);

// 获取响应式断点
const gridRef = ref();
const breakPoint = computed<BreakPoint>(() => gridRef.value?.breakPoint);

// 判断是否显示 展开/合并 按钮
const showCollapse = computed(() => {
  let show = false;
  props.columns.reduce((prev, current) => {
    prev +=
      (current![breakPoint.value]?.span ?? current?.span ?? 1) +
      (current![breakPoint.value]?.offset ?? current?.offset ?? 0);
    if (typeof props.searchCol !== "number") {
      if (prev >= props.searchCol[breakPoint.value]) show = true;
    } else {
      if (prev >= props.searchCol) show = true;
    }
    return prev;
  }, 0);
  return show;
});
</script>
<style lang="scss" scoped>
.comnom-search {
  :deep(.el-form-item__content > *) {
    width: 100%;
  }
}
</style>
