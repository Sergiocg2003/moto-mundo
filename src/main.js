import { createApp } from 'vue'
import { createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import mainPrincipal from './components/MainPrincipal.vue'
import login from './components/Login.vue'
import registro from './components/Registro.vue'
import listado from './components/Listado.vue'
import moto from './components/Moto.vue'
import registrado from './components/Registrado.vue'
import listadoReg from './components/ListadoRegistrado.vue'
import motoRegistrado from './components/MotoRegistrado.vue'
import perfil from './components/Perfil.vue'
import buscadorAmigos from './components/BuscadorAmigos.vue'
import crearClub from './components/CrearClub.vue'

const routes = [
  { path:'/', component: mainPrincipal },
  { path:'/login', component: login },
  { path:'/registro', component: registro },
  { path:'/listado', component: listado },
  { path:'/moto/:nombre', component: moto },
  { path:'/registrado', component: registrado },
  { path:'/listadoRegistrado', component: listadoReg },
  { path:'/motoRegistrado/:nombre', component: motoRegistrado },
  { path:'/perfil', component: perfil },
  { path:'/BuscadorAmigos', component: buscadorAmigos },
  { path:'/CrearClub', component: crearClub}

]

const router = createRouter({
  history: createWebHashHistory(),
  routes})



const app = createApp(App)

app.use(router)


app.mount('#app')
