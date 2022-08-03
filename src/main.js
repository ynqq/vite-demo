import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import "element-plus/lib/theme-chalk/index.css"
import ElementPlus from "element-plus"
import { router } from "./router"
import { store } from "./store"
import { fetch } from "./axios"
import test from "./test"
import baseBtn from "./components/baseBtn.vue"


const app = createApp(App)
app.component("b-b", baseBtn)
app.use(router)
app.use(store)
app.use(ElementPlus, {size: "small"})
app.config.globalProperties.http = () => {
    console.log("http");
}
Object.assign(app.config.globalProperties, {
    $fetch: fetch
})

app.mount('#app')
