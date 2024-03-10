<template>
  <div class="search-demo">
    <!--搜索条件-->
    <div>searchForm: {{ searchParam }}</div>
    <SearchForm
      :columns="searchColumns"
      :search-param="searchParam"
      :search="search"
      :reset="reset"
    />

    <IconSelect />
  </div>
</template>

<script setup lang="tsx">
import { ref } from "vue";
import { SearchProps } from "@/components/SearchForm/interface";
import IconSelect from "@/components/IconSelect/index.vue";

const searchParam = ref({});
const searchColumns: SearchProps[] = [
  { el: "input", label: "用户姓名", key: "username", prop: "username" },
  { el: "input", label: "身份证", key: "idCard", prop: "username" },
  { el: "input", label: "职业", key: "job", prop: "username" },
  {
    el: "commonSelect",
    label: "订单状态",
    key: "orderStatus",
    selectType: "PAY_STATUS"
  },
  {
    label: "性别",
    key: "gender",
    el: "select",
    fieldNames: { label: "label", value: "value" },
    optionList: [
      { label: "男", value: 1 },
      { label: "女", value: 2 }
    ]
  },
  {
    label: "年龄",
    render: ({ searchParam }) => {
      return (
        <div class="flex justify-center items-center">
          <el-input vModel_trim={searchParam.minAge} placeholder="最小年龄" />
          <span class="mr10 ml10">-</span>
          <el-input vModel_trim={searchParam.maxAge} placeholder="最大年龄" />
        </div>
      );
    }
  },
  {
    label: "树结构",
    el: "tree-select",
    key: "treeId",
    optionList: [
      {
        label: "一级 1",
        value: 1,
        children: [
          {
            label: "二级 1-1",
            value: 2,
            children: [
              {
                label: "三级 1-1-1",
                value: 3
              }
            ]
          }
        ]
      }
    ],
    props: { filterable: true }
  },
  {
    el: "date-picker",
    label: "订单日期",
    key: "orderDate",
    props: { type: "daterange", valueFormat: "YYYY-MM-DD" },
    defaultValue: ["2022-11-12", "2022-12-12"]
  }
];

const search = (params: any) => {
  console.log(params);
};
const reset = (params: any) => {
  console.log(params);
};
</script>

<style scoped></style>
