<template>
    <headerBasico/>
    <main class="PrincipalListado">
        <div class='PrincipalListado__contenedor'>
            <div class='PrincipalListado__contenedor__carta' v-for="moto in motos" :key="moto.nombre" @click="$event => verMoto(moto.nombre)">
                <img class="PrincipalListado__contenedor__carta__foto" :src="moto.imagen" alt='moto' />
                <h5 class='PrincipalListado__contenedor__carta__nombre'>{{ moto.nombre }}</h5>
            </div>
        </div>
                
        <img class="PrincipalListado__Imagen" src="../assets/logo.png" /> 
    </main>
</template>

<script>
    import headerBasico from "./Header.vue";
    /**
     * @file Listado.vue - Componente que contiene el main del listado de nuestra pagina
     * @author Sergio Corrales Gonzalez
     * @see <a href="https://github.com/Sergiocg2003/moto-mundo.git" target="_blank">Github</a>
     */
    /**
     * @property {string} name - Nombre del componente
     * @property {Object} components.headerBasico - Componente Header
     * @vue-data {Array} motos - Informacion de las motos
    */
    export default{
        name: 'mainListado',
        components: {
            headerBasico
        },
        data(){
            return{
                motos: []
            };
        },
        async mounted(){
            await fetch("http://localhost:3001/api/v1/motos")
                .then((response) => response.json())
                .then((data) => (this.motos = data));
        },
        methods: {
            verMoto(nombre){
                this.$router.push(`moto/${nombre}`)
            }
        }
    }
</script>