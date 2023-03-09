<template>
    <headerLogueado/>
    <main class="Registrado">
        <div class="Registrado__Menu">
            <ul>
                <li><router-link to="/perfil">Perfil</router-link></li>
                <li><router-link to="/listadoRegistrado">Listado</router-link></li>
                <li><router-link to="/BuscadorAmigos">Buscador de Usuario</router-link></li>
                <li><router-link to="/CrearClub">Crear Club</router-link></li>
            </ul>
        </div>
        <div class="Registrado__Contenedor">
            <h1 class="Registrado__Contenedor__Titulo">Buscador de motos:</h1>
            <ul class="Registrado__Contenedor__Buscador">
                <li><input v-model="modelo" type="text" name='nombre' placeholder='Modelo de una moto'/></li>
                <li><router-link :to="{path: `/motoRegistrado/${modelo}`, params: {nombre: modelo}}"><img src="../assets/lupa.png" /></router-link></li>
            </ul>
        </div>
        <div class="Registrado__Vacio"></div>
                
        <img class="Registrado__Imagen" src="../assets/logo.png" /> 
    </main>
</template>

<script>
    import headerLogueado from "./HeaderLogueado.vue";
    /**
     * @file Registrado.vue - Componente que contiene el main principal estando registrado de nuestra web
     * @author Sergio Corrales Gonzalez
     * @see <a href="https://github.com/Sergiocg2003/moto-mundo.git" target="_blank">Github</a>
     */
    /**
     * @property {string} name - Nombre del componente
     * @property {Object} components.headerLogueado - Componente Header
     * @vue-data {string} modelo - Modelo escrito
    */
    export default{
        name: 'mainRegistrado',
        components: {
            headerLogueado
        },
        data(){
            return{
                modelo: "",
            };
        },
        watch:{
            modelo: function(){
                this.$root.$emit("send",this.modelo)
            }
        }
    }
</script>