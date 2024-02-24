import { createApp } from 'vue'
import router from './router/index'
import store from './store'
import App from './App.vue'
import './style.css'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')