<template>
  <div class="detail-container">
    <div class="hljs" ref="hlDiv" v-html="codes"></div>
  </div>
</template>

<script setup>
import { getArticleDetail } from '@/api/sys'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
let codes = '```javascript\nfunction(){\n\tconsole.log(123)\n}\n```'
// 获取文章详情

const { data } = await getArticleDetail({
  id: 3
})
console.log(data.content)
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code) {
    return hljs.highlightAuto(code).value
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})
codes = marked(data.content)
console.log(codes)

// console.log(marked.parse(code))
</script>

<style lang="scss" scoped>
.detail-container {
  background-color: #fff;
  padding: 10px 20px;
}
</style>
