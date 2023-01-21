import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@/assets/styles/main.scss'
import store from './store'
import DateFormat from '@voidsolutions/vue-dateformat'



const app = createApp(App)

app.use(router)
app.use(store)
app.use(DateFormat)
app.mount('#app')
