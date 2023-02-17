import { createApp } from 'vue'
import { createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import mainPrincipal from './components/MainPrincipal.vue'
import contactoPrincipal from './components/ContactoPrincipal.vue'
import login from './components/Login.vue'
import registro from './components/Registro.vue'
import listado from './components/Listado.vue'

const routes = [
  { path:'/', component: mainPrincipal },
  { path:'/contacto', component: contactoPrincipal },
  { path:'/login', component: login },
  { path:'/registro', component: registro },
  { path:'/listado', component: listado }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes})



const app = createApp(App)

app.use(router)


app.mount('#app')
