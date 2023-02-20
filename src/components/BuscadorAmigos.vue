<template>
    <headerLogueado/>
    <main class="Registrado">
        <div class="Registrado__Menu">
            <ul>
                <li><router-link to="/perfil">Perfil</router-link></li>
                <li><router-link to="/listadoRegistrado">Listado</router-link></li>
                <li><router-link to="/BuscadorAmigos">Buscador de Usuario</router-link></li>
                <li>Crear club</li>
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
    export default{
        name: 'mainRegistrado',
        components: {
            headerLogueado
        },
        data(){
            return{
                nombre: "",
                info: []
            };
        },
        watch:{
            modelo: function(){
                this.$root.$emit("send",this.nombre)
            }
        },
        async mounted(){
            await fetch(`http://localhost:3001/api/v1/users/${this.nombre}`)
                .then((response) => response.json())
                .then((data) => (this.info = data));
        }
    }
</script>