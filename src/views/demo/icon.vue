<template>
  <div>
    <h2 class="mb-4">iconfont格式引入图标</h2>
    <div class="w-52 flex justify-between">
      <FontIcon icon="pure-iconfont-tabs" />
      <FontIcon icon="pure-iconfont-logo" />
      <FontIcon icon="pure-iconfont-new" />
    </div>
    <h2 class="my-4">svg格式引入图标</h2>
    <div class="w-52 flex justify-between">
      <BackTop />
      <Dark />
    </div>
    <h2 class="my-4">iconify 相关图标的引入（离线图标：需要安装对应的依赖）</h2>
    <div class="w-52 flex justify-between">
      <IconifyIconOffline :icon="Edit" color="#409EFC" />
      <IconifyIconOffline :icon="Delete" color="#409EFC" />
    </div>
    <h2 class="my-4">iconify 相关图标的引入（在线图标）</h2>
    <div class="w-52 flex justify-between">
      <IconifyIconOnline
        icon="tdesign:barcode"
        color="#409EFC"
        width="60px"
        height="60px"
      />
      <IconifyIconOnline
        icon="tdesign:chart-area"
        color="#409EFC"
        width="60px"
        height="60px"
      />
    </div>
    <h2 class="my-4">通用图标（useRenderIcon）</h2>
    <div class="w-96 flex justify-between">
      <!--传入svg图标-->
      <component :is="useRenderIcon(BackTop)" />

      <!--传入iconify图标-->
      <el-input :prefix-icon="useRenderIcon(Delete)" />
      <el-button type="primary" :icon="useRenderIcon(Search)">查询</el-button>
      <el-button type="primary" :icon="BackTop">查询</el-button>

      <!-- 传在线图标 -->
      <el-input :prefix-icon="useRenderIcon('ep:camera-filled')" />

      <!-- 传自定义的iconfont图标，分font-class、unicode、symbol三种模式，需要注意的是这三种模式都需要在图标名称最前面加上 IF- 以区别它们是iconfont图标 -->
      <!-- 默认font-class模式 -->
      <component :is="useRenderIcon('IF-pure-iconfont-tabs')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BackTop from "@/assets/svg/back_top.svg?component";
import Dark from "@/assets/svg/dark.svg?component";
import Edit from "@iconify-icons/ep/edit";
import Delete from "@iconify-icons/ep/delete";
import Search from "@iconify-icons/ep/search";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
defineOptions({
  name: ""
});
</script>

<style lang="scss" scoped></style>
