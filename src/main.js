import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/styles/main.css'
import './assets/styles/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')
