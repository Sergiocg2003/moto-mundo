<template>
    <headerLogin/>
    <main class="registroycontacto">
        <form class="registroycontacto__formulario">
            <p class="registroycontacto__formulario__texto">Usuario:</p>
            <input class="registroycontacto__formulario__rellenable" type="text" name="usuario" placeholder="Usuario min 3 caracteres" required/>
            <p class="registroycontacto__formulario__texto">Contraseña:</p>
            <input class="registroycontacto__formulario__rellenable" type="password" name="contraseña" placeholder="Contraseña min 8 caracteres" required/>
            <button type="submit" class="registroycontacto__formulario__boton">Iniciar Sesión</button>
        </form>

        <p class="registroycontacto__opcion">Si todavía no tienes cuenta, <router-link to="/registro">Registrate</router-link></p>

        <img class="registroycontacto__Imagen" src="../assets/logo.png" />
    </main>
</template>

<script>
    import headerLogin from "./HeaderLogin.vue";
    export default{
        name: 'mainLogin',
        components:{
            headerLogin
        }
    } 
</script>