<template>
    <headerLogin/>
    <main class="registroycontacto">
        <form class="registroycontacto__formulario">
            <p class="registroycontacto__formulario__texto">Correo:</p>
            <input class="registroycontacto__formulario__rellenable" type="text" name="correo" placeholder="ejemplo@ejemplo.com" required/>
            <p class="registroycontacto__formulario__texto">Usuario:</p>
            <input class="registroycontacto__formulario__rellenable" type="text" name="usuario" placeholder="Usuario min 3 caracteres" required/>
            <p class="registroycontacto__formulario__texto">Contraseña:</p>
            <input class="registroycontacto__formulario__rellenable" type="password" name="contraseña" placeholder="Contraseña min 8 caracteres" required/>
            <p class="registroycontacto__formulario__texto">Repite la contraseña:</p>
            <input class="registroycontacto__formulario__rellenable" type="password" name="contraseña2" placeholder="Contraseña min 8 caracteres" required/>
            <p class="registroycontacto__formulario__texto">Moto:</p>
            <input class="registroycontacto__formulario__rellenable" type="text" name="moto" placeholder="mt-125" required/>
            <button type="submit" class="registroycontacto__formulario__boton">Enviar</button>
        </form>

        <p class="registroycontacto__opcion">Si ya tienes cuenta, <router-link to="/login">Inicia Sesión</router-link></p>

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