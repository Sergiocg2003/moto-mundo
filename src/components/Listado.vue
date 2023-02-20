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