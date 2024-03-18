<template>
    <headerLogueado/>
    <main class="Registrado">
        <div @click="toggleMenu" class="Registrado__boton">
            <img class="Registrado__boton__menu" src="../assets/menu.png" alt="menu desplegable">
        </div>
        <div class="Registrado__Menu">
            <ul>
                <li><router-link to="/perfil">Perfil</router-link></li>
                <li><router-link to="/listadoRegistrado">Listado</router-link></li>
                <li><router-link to="/BuscadorAmigos">Buscador de Usuario</router-link></li>
                <li><router-link to="/CrearClub">Crear Club</router-link></li>
            </ul>
        </div>
        <div class="Registrado__MenuDesplegable" v-show="showMenu">
            <ul>
                <li><router-link to="/perfil">Perfil</router-link></li>
                <li><router-link to="/listadoRegistrado">Listado</router-link></li>
                <li><router-link to="/BuscadorAmigos">Buscador de Usuario</router-link></li>
                <li><router-link to="/CrearClub">Crear Club</router-link></li>
            </ul>
        </div>
        <div class="Registrado__Contenedor">
            <h1 class="Registrado__Contenedor__Titulo">Buscador de amigos:</h1>
            <ul class="Registrado__Contenedor__Buscador">
                <li><input v-model="nombre" type="text" name='nombre' placeholder='Nombre de usuario'/></li>
                <li><a><img src="../assets/lupa.png" /></a></li>
            </ul>
        </div>
        <div class="Registrado__Vacio"></div>
                
        <img class="Registrado__Imagen" src="../assets/logo.png" /> 
    </main>
</template>

<script>
    import headerLogueado from "./HeaderLogueado.vue";
    /**
     * @file BuscadorAmigos.vue - Componente que contiene el main de la pagina para buscar amigos
     * @author Sergio Corrales Gonzalez
     * @see <a href="https://github.com/Sergiocg2003/moto-mundo.git" target="_blank">Github</a>
     */
    /**
     * @property {string} name - Nombre del componente
     * @property {Object} components.headerLogueado - Componente Header
     * @vue-data {string} nombre - Nombre del club introducido
     * @vue-data {Array} existe - Informacion del usuario buscado
    */
    export default{
        name: 'mainRegistrado',
        components: {
            headerLogueado
        },
        data(){
            return{
                nombre: "",
                info: [],
                showMenu: false,
            };
        },
        watch:{
            modelo: function(){
                this.$root.$emit("send",this.nombre)
            }
        },
        methods: {
            toggleMenu() {
            this.showMenu = !this.showMenu;
            }
        },
        async mounted(){
            await fetch(`http://localhost:3001/api/v1/users/${this.nombre}`)
                .then((response) => response.json())
                .then((data) => (this.info = data));
        }
    }
</script>