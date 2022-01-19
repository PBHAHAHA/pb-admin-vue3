<template>
  <md-editor class="edit-container" v-model="text" />
  <div class="btn-box">
    <el-button>保存草稿箱</el-button>
    <el-button @click="publishFunc" type="primary">发布</el-button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { addArticle } from '@/api/sys'
// import cloneDeep from 'lodash.clonedeep'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

export default defineComponent({
  components: { MdEditor },
  setup() {
    const text = ref('')
    const publishFunc = async () => {
      const res = await addArticle()
      console.log(res)
    }
    return {
      text,
      publishFunc
    }
  }
})
</script>

<style lang="scss" scoped>
.edit-container {
  height: calc(100vh - 150px);
}
.btn-box {
  text-align: center;
  padding: 7px 0;
}
</style>
