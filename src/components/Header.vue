<template>
    <header class="main">
        <div class="main__logos">
          <router-link to="/" class="main__logos__enlace"><img class="main__logos__enlace__logo" src="../assets/logo.png" /></router-link>
          <p class="main__logos__nombre">Moto Mundo</p>
        </div>
        <nav class="main__navegacion">
            <ul>
                <li class="main__navegacion__opcion"><router-link to="/listado">Listado</router-link></li>
                <li class="main__navegacion__opcion"><router-link to="/login">Login</router-link></li>
            </ul>
            <div @click="toggleMenu">
                <img class="main__navegacion__menu" src="../assets/menu.png" alt="menu desplegable">
            </div>
            <div class="main__navegacion__desplegable">
                <ul v-show="showMenu">
                    <li class="main__navegacion__desplegable__opcion"><router-link to="/listado">Listado</router-link></li>
                    <li class="main__navegacion__desplegable__opcion"><router-link to="/login">Login</router-link></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    /**
     * @file Header.vue - Componente que contiene el header basico de la aplicación
     * @author Sergio Corrales Gonzalez
     * @see <a href="https://github.com/Sergiocg2003/moto-mundo.git" target="_blank">Github</a>
     */
    /**
     * @property {string} name - Nombre del componente
     */
    export default{
        name: 'headerComponente',
        data() {
            return {
            showMenu: false
            };
        },
        methods: {
            toggleMenu() {
            this.showMenu = !this.showMenu;
            }
        }
    } 
</script>