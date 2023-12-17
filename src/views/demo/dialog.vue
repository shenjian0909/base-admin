<template>
  <el-card title="二次封装的element-plus的dialog组件">
    <el-space wrap>
      <el-button @click="onBaseClick"> 基本使用 </el-button>
      <el-button @click="onDraggableClick"> 可拖拽 </el-button>
      <el-button @click="onFullscreenClick"> 全屏 </el-button>
      <el-button @click="onFooterRendererClick"> 自定义底部 </el-button>
      <el-button @click="onUpdateClick"> 更改弹框自身属性值 </el-button>
      <el-button @click="onNestingClick"> 嵌套的弹框 </el-button>
      文本内容 <el-input v-model="copyText" />
      <div v-copy="copyText">双击复制</div>
    </el-space>
  </el-card>
</template>

<script setup lang="tsx">
import { h, createVNode, ref } from "vue";
import {
  addDialog,
  closeDialog,
  updateDialog,
  closeAllDialog
} from "@/components/ReDialog";
const copyText = ref("");
function onBaseClick() {
  addDialog({
    title: "基本使用",
    contentRenderer: () => <p>弹框内容-基本使用</p> // jsx 语法 （注意在.vue文件启用jsx语法，需要在script开启lang="tsx"）
  });
}

function onDraggableClick() {
  addDialog({
    title: "可拖拽",
    draggable: true,
    contentRenderer: () => h("p", "弹框内容-可拖拽") // h 渲染函数 https://cn.vuejs.org/api/render-function.html#h
  });
}

function onFullscreenClick() {
  addDialog({
    title: "全屏",
    fullscreen: true,
    contentRenderer: () => createVNode("p", null, "弹框内容-全屏") // createVNode 渲染函数 https://cn.vuejs.org/guide/extras/render-function.html#creating-vnodes
  });
}

function onFooterRendererClick() {
  addDialog({
    title: "自定义底部",
    footerRenderer: ({ options, index }) => (
      <el-button onClick={() => closeDialog(options, index)}>
        {options.title}-{index}
      </el-button>
    ),
    contentRenderer: () => <p>弹框内容-自定义底部</p>
  });
}

// 满足在 contentRenderer 内容区更改弹框自身属性值的场景
function onUpdateClick() {
  const curPage = ref(1);
  addDialog({
    title: `第${curPage.value}页`,
    contentRenderer: () => (
      <>
        <el-button
          disabled={curPage.value > 1 ? false : true}
          onClick={() => {
            curPage.value -= 1;
            updateDialog(`第${curPage.value}页`);
          }}
        >
          上一页
        </el-button>
        <el-button
          onClick={() => {
            curPage.value += 1;
            updateDialog(`第${curPage.value}页`);
          }}
        >
          下一页
        </el-button>
      </>
    )
  });
}

// 这里为了演示方便，使用了嵌套写法，实际情况下最好把 addDialog 函数抽出来 套娃不可取
function onNestingClick() {
  addDialog({
    title: "嵌套的弹框",
    contentRenderer: ({ index }) => (
      <el-button
        onClick={() =>
          addDialog({
            title: `第${index + 1}个子弹框`,
            width: "40%",
            contentRenderer: ({ index }) => (
              <el-button
                onClick={() =>
                  addDialog({
                    title: `第${index + 1}个子弹框`,
                    width: "30%",
                    contentRenderer: () => (
                      <>
                        <el-button round onClick={() => closeAllDialog()}>
                          哎呦，你干嘛，赶快关闭所有弹框
                        </el-button>
                      </>
                    )
                  })
                }
              >
                点击打开第{index + 1}个子弹框
              </el-button>
            )
          })
        }
      >
        点击打开第{index + 1}个子弹框
      </el-button>
    )
  });
}
</script>

<style scoped></style>
