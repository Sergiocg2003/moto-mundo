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