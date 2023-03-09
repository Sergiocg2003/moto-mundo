<template>
    <headerLogueado/>
    <main class="Perfil">
        <div class="Perfil__Menu">
            <ul>
                <li><router-link to="/perfil">Perfil</router-link></li>
                <li><router-link to="/listadoRegistrado">Listado</router-link></li>
                <li><router-link to="/BuscadorAmigos">Buscador de Usuario</router-link></li>
                <li><router-link to="/CrearClub">Crear Club</router-link></li>
            </ul>
        </div>
        <div class="Perfil__Contenedor" >
            <ul class="Perfil__Contenedor__listado">
                <li class="Perfil__Contenedor__listado__elemento">Correo: {{ info.correo }}</li>
                <li class="Perfil__Contenedor__listado__elemento">Usuario: {{ info.usuario }}</li>
                <li class="Perfil__Contenedor__listado__elemento">Contraseña: {{ info.contraseña }}</li>
                <li class="Perfil__Contenedor__listado__elemento">Amigos: {{ info.amigos }}</li>
                <li class="Perfil__Contenedor__listado__elemento">Moto: {{ info.moto }}</li>
            </ul>
            <div class="Perfil__Contenedor__botones">
                <a class="Perfil__Contenedor__botones__boton" @click="$event => CerrarSesion()">Cerrar Sesion</a>
                <a class="Perfil__Contenedor__botones__boton" @click="$event => BorrarUsuario(info.usuario)">Borrar usuario</a>
            </div>
        </div>
        <div class="Perfil__Vacio"></div>
        <img class="Perfil__Imagen" src="../assets/logo.png" /> 
    </main>
</template>

<script>
    import axios from "axios";
    import headerLogueado from "./HeaderLogueado.vue";
    /**
     * @file Perfil.vue - Componente que contiene el main de la pagina de perfil
     * @author Sergio Corrales Gonzalez
     * @see <a href="https://github.com/Sergiocg2003/moto-mundo.git" target="_blank">Github</a>
     */
    /**
     * @property {string} name - Nombre del componente
     * @property {Object} components.headerLogueado - Componente Header
     * @vue-data {Array} info - Informacion del usuario
    */
    export default{
        name: 'mainMotoRegistrado',
        components: {
            headerLogueado,
        },
        data(){
            return{
                info: []
            };
        },
        async mounted(){
            const url = localStorage.getItem("Usuario")
            await fetch(`http://localhost:3001/api/v1/users/${url}`)
                .then((response) => response.json())
                .then((data) => (this.info = data));
        },
        methods: {
            BorrarUsuario(nombre){
                axios.delete(`http://localhost:3001/api/v1/users/${nombre}`)
                localStorage.removeItem("Usuario")
                this.$router.push("/")
            },
            CerrarSesion(){
                localStorage.removeItem("Usuario")
                this.$router.push("/")
            }
        }
    }
</script>