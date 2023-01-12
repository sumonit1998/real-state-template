import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@/assets/styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faFacebookF,faLinkedinIn,faVimeoV } from '@fortawesome/free-brands-svg-icons'



library.add(faBars,faTwitter,faFacebookF,faLinkedinIn,faVimeoV,faChevronDown)
const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
