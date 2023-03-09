<template>
    <headerBasico/>
    <main class="PrincipalMoto">
        <div class="PrincipalMoto__Contenedor" >
            <img class="PrincipalMoto__Contenedor__imagen" :src="moto.imagen" alt='moto' />
            <ul class="PrincipalMoto__Contenedor__listado">
                <li class="PrincipalMoto__Contenedor__listado__elemento">Modelo: {{ moto.nombre }}</li>
                <li class="PrincipalMoto__Contenedor__listado__elemento">Precio: {{ moto.precio }}</li>
                <li class="PrincipalMoto__Contenedor__listado__elemento">Centimetros Cúbicos: {{ moto.centimetrosCubicos }}</li>
                <li class="PrincipalMoto__Contenedor__listado__elemento">Tipo de motor: {{ moto.tipoDeMotor }}</li>
                <li class="PrincipalMoto__Contenedor__listado__elemento">Caballaje: {{ moto.caballaje }}</li>
                <li class="PrincipalMoto__Contenedor__listado__elemento">Transmision: {{ moto.transmision }}</li>
                <li class="PrincipalMoto__Contenedor__listado__elemento">Capacidad de combustible: {{ moto.capacidadDeCombustible }}</li>
                <li class="PrincipalMoto__Contenedor__listado__elemento">Peso: {{ moto.peso }}</li>
            </ul>
        </div>
        <img class="PrincipalMoto__Imagen" src="../assets/logo.png" /> 
    </main>
</template>

<script>
    import headerBasico from "./Header.vue";
    /**
     * @file Moto.vue - Componente que contiene el main de la visualizacion de una moto de nuestra pagina
     * @author Sergio Corrales Gonzalez
     * @see <a href="https://github.com/Sergiocg2003/moto-mundo.git" target="_blank">Github</a>
     */
    /**
     * @property {string} name - Nombre del componente
     * @property {Object} components.headerBasico - Componente Header
     * @vue-data {Array} moto - Informacion de la moto
    */
    export default{
        name: 'mainMoto',
        components: {
            headerBasico,
        },
        data(){
            return{
                moto: []
            };
        },
        async mounted(){
            const url = this.$route.params.nombre
            await fetch(`http://localhost:3001/api/v1/motos/${url}`)
                .then((response) => response.json())
                .then((data) => (this.moto = data));
        }
    }
</script>