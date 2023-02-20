<template>
    <headerLogueado/>
    <main class="ListadoRegistrado">
        <div class="ListadoRegistrado__Menu">
            <ul>
                <li>Perfil</li>
                <li><router-link to="/listadoRegistrado">Listado</router-link></li>
                <li>Buscador de Usuario</li>
                <li>Crear club</li>
            </ul>
        </div>
        <div class='ListadoRegistrado__contenedor'>
            <div class='ListadoRegistrado__contenedor__carta' v-for="moto in motos" :key="moto.nombre" @click="$event => verMoto(moto.nombre)">
                <img class="ListadoRegistrado__contenedor__carta__foto" :src="moto.imagen" alt='moto' />
                <h5 class='ListadoRegistrado__contenedor__carta__nombre'>{{ moto.nombre }}</h5>
            </div>
        </div>

        <div class="Registrado__Vacio"></div>
                
        <img class="ListadoRegistrado__Imagen" src="../assets/logo.png" /> 
    </main>
</template>

<script>
    import headerLogueado from "./HeaderLogueado.vue";
    export default{
        name: 'mainListadoLogueado',
        components: {
            headerLogueado
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
                this.$router.push(`motoRegistrado/${nombre}`)
            }
        }
    }
</script>