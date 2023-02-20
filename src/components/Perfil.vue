<template>
    <headerLogueado/>
    <main class="Perfil">
        <div class="Perfil__Menu">
            <ul>
                <li><router-link to="/perfil">Perfil</router-link></li>
                <li><router-link to="/listadoRegistrado">Listado</router-link></li>
                <li><router-link to="/BuscadorAmigos">Buscador de Usuario</router-link></li>
                <li>Crear club</li>
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
        </div>
        <div class="Perfil__Vacio"></div>
        <img class="Perfil__Imagen" src="../assets/logo.png" /> 
    </main>
</template>

<script>
    import headerLogueado from "./HeaderLogueado.vue";
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
        }
    }
</script>