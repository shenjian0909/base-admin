<template>
  <div>
    <el-divider>主题色</el-divider>
    <ul class="theme-color">
      <li
        v-for="(item, index) in themeColors"
        :key="index"
        :style="getThemeColorStyle(item.color)"
        @click="setLayoutThemeColor(item.themeColor)"
      >
        <el-icon
          style="margin: 0.1em 0.1em 0 0"
          :size="17"
          :color="getThemeColor(item.themeColor)"
        >
          <IconifyIconOffline :icon="Check" />
        </el-icon>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDataThemeChange } from "@/layout/hooks/useDataThemeChange";
import Check from "@iconify-icons/ep/check";
const { layoutTheme, themeColors, setLayoutThemeColor } = useDataThemeChange();
const getThemeColorStyle = computed(() => {
  return color => {
    return { background: color };
  };
});

/** 主题色 激活选择项 */
const getThemeColor = computed(() => {
  return current => {
    if (
      current === layoutTheme.value.theme &&
      layoutTheme.value.theme !== "light"
    ) {
      return "#fff";
    } else if (
      current === layoutTheme.value.theme &&
      layoutTheme.value.theme === "light"
    ) {
      return "#1d2b45";
    } else {
      return "transparent";
    }
  };
});
</script>

<style scoped lang="scss">
.theme-color {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-top: 20px;

  li {
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 8px;
    margin-right: 8px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    border-radius: 2px;

    &:nth-child(2) {
      border: 1px solid #ddd;
    }
  }
}
</style>
