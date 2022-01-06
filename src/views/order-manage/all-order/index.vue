<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      :editorId="editorId"
      :defaultConfig="toolbarConfig"
      :mode="mode"
      style="border-bottom: 1px solid #ccc"
    />
    <Editor
      :editorId="editorId"
      :defaultConfig="editorConfig"
      :defaultContent="getDefaultContent"
      :mode="mode"
      style="height: 500px"
    />
  </div>
  <div>
    <el-button>添加</el-button>
  </div>
</template>

<script>
import { computed, onBeforeUnmount } from 'vue'
import {
  Editor,
  Toolbar,
  getEditor,
  removeEditor
} from '@wangeditor/editor-for-vue'
import cloneDeep from 'lodash.clonedeep'

export default {
  components: { Editor, Toolbar },
  setup() {
    // 【注意】编辑器 id ，要全局唯一
    const editorId = `w-e-${Math.random().toString().slice(-5)}`

    const defaultContent = [
      { type: 'paragraph', children: [{ text: '一行文字' }] }
    ]
    const getDefaultContent = computed(() => cloneDeep(defaultContent)) // 注意，要深拷贝 defaultContent ，否则报错

    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容...' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = getEditor(editorId)
      if (editor == null) return

      editor.destroy()
      removeEditor(editorId)
    })

    return {
      editorId,
      mode: 'default',
      getDefaultContent,
      toolbarConfig,
      editorConfig
    }
  }
}
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style></style>
