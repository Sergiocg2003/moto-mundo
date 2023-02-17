import { createApp } from 'vue'
import { createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import mainPrincipal from './components/MainPrincipal.vue'
import contactoPrincipal from './components/ContactoPrincipal.vue'
import login from './components/Login.vue'

const routes = [
  { path:'/', component: mainPrincipal },
  { path:'/contacto', component: contactoPrincipal },
  { path:'/registro', component: login }    
]

const router = createRouter({
  history: createWebHashHistory(),
  routes})



const app = createApp(App)

app.use(router)


app.mount('#app')
