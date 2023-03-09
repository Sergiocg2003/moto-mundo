<template>
    <headerBasico/>
    <main class="Principal">
        <h1 class="Principal__Titulo">Buscador de motos:</h1>
        <ul class="Principal__Buscador">
            <li><input v-model="modelo" type="text" name='nombre' placeholder='Modelo de una moto' /></li>
            <li><router-link :to="{path: `/moto/${modelo}`, params: {nombre: modelo}}"><img src="../assets/lupa.png" /></router-link></li>
        </ul>
                
        <img class="Principal__Imagen" src="../assets/logo.png" /> 
    </main>
</template>

<script>
    import headerBasico from "./Header.vue";
    /**
     * @file MainPrincipal.vue - Componente que contiene el main principal de nuestra web
     * @author Sergio Corrales Gonzalez
     * @see <a href="https://github.com/Sergiocg2003/moto-mundo.git" target="_blank">Github</a>
     */
    /**
     * @property {string} name - Nombre del componente
     * @property {Object} components.headerBasico - Componente Header
     * @vue-data {string} modelo - Modelo escrito
    */
    export default{
        name: 'mainPrincipal',
        components: {
            headerBasico
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