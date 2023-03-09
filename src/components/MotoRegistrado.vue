<template>
    <headerLogueado/>
    <main class="MotoRegistrado">
        <div class="MotoRegistrado__Menu">
            <ul>
                <li><router-link to="/perfil">Perfil</router-link></li>
                <li><router-link to="/listadoRegistrado">Listado</router-link></li>
                <li><router-link to="/BuscadorAmigos">Buscador de Usuario</router-link></li>
                <li><router-link to="/CrearClub">Crear Club</router-link></li>
            </ul>
        </div>
        <div class="MotoRegistrado__Contenedor" >
            <img class="MotoRegistrado__Contenedor__imagen" :src="moto.imagen" alt='moto' />
            <ul class="MotoRegistrado__Contenedor__listado">
                <li class="MotoRegistrado__Contenedor__listado__elemento">Modelo: {{ moto.nombre }}</li>
                <li class="MotoRegistrado__Contenedor__listado__elemento">Precio: {{ moto.precio }}</li>
                <li class="MotoRegistrado__Contenedor__listado__elemento">Centimetros Cúbicos: {{ moto.centimetrosCubicos }}</li>
                <li class="MotoRegistrado__Contenedor__listado__elemento">Tipo de motor: {{ moto.tipoDeMotor }}</li>
                <li class="MotoRegistrado__Contenedor__listado__elemento">Caballaje: {{ moto.caballaje }}</li>
                <li class="MotoRegistrado__Contenedor__listado__elemento">Transmision: {{ moto.transmision }}</li>
                <li class="MotoRegistrado__Contenedor__listado__elemento">Capacidad de combustible: {{ moto.capacidadDeCombustible }}</li>
                <li class="MotoRegistrado__Contenedor__listado__elemento">Peso: {{ moto.peso }}</li>
            </ul>
        </div>
        <div class="MotoRegistrado__Vacio"></div>
        <img class="MotoRegistrado__Imagen" src="../assets/logo.png" /> 
    </main>
</template>

<script>
    import headerLogueado from "./HeaderLogueado.vue";
    /**
     * @file MotoRegistrado.vue - Componente que contiene el main de la visualizacion de una moto de nuestra pagina estando logueado
     * @author Sergio Corrales Gonzalez
     * @see <a href="https://github.com/Sergiocg2003/moto-mundo.git" target="_blank">Github</a>
     */
    /**
     * @property {string} name - Nombre del componente
     * @property {Object} components.headerLogueado - Componente Header
     * @vue-data {Array} moto - Informacion de la moto
    */
    export default{
        name: 'mainMotoRegistrado',
        components: {
            headerLogueado,
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