<template>
  标题 <el-input v-model="title"></el-input> Info
  <el-input v-model="info"></el-input>
  <el-select v-model="articleTypeId">
    <el-option label="vue" :value="1"></el-option>
    <el-option label="css" :value="2"></el-option>
  </el-select>
  <md-editor class="edit-container" v-model="content" />
  <div class="btn-box">
    <el-button>保存草稿箱</el-button>
    <el-button @click="publishFunc" type="primary">发布</el-button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { addArticle } from '@/api/sys'
import { ElMessage } from 'element-plus'
// import cloneDeep from 'lodash.clonedeep'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

export default defineComponent({
  components: { MdEditor },
  setup() {
    const content = ref('')
    const info = ref('123')
    const title = ref('123')
    const articleTypeId = ref(1)
    const publishFunc = async () => {
      const res = await addArticle({
        title: title.value,
        content: content.value,
        article_type_id: articleTypeId.value,
        info: info.value
      })
      console.log(res)
      ElMessage.success(res.msg)
    }
    return {
      content,
      title,
      info,
      articleTypeId,
      publishFunc
    }
  }
})
</script>

<style lang="scss" scoped>
.edit-container {
  // height: calc(100vh - 150px);
}
.btn-box {
  text-align: center;
  padding: 7px 0;
}
</style>
