import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//
const appInstance = createApp(App)
appInstance.use(store)
appInstance.use(router)

//
const rootInstance = appInstance.mount('#app')

console.log(appInstance, rootInstance)
