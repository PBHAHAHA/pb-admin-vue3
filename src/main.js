import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import { ElMessage } from 'element-plus'
import './permission'
import './styles/index.scss'
// 导入svgicon
import installIcons from '@/icons'
const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.provide('$message', ElMessage)
app.use(store).use(router).mount('#app')
