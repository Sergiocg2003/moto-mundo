<template>
    <headerBasico/>
    <main class="registroycontacto">
        <form class="registroycontacto__formulario">
            <p class="registroycontacto__formulario__texto">Correo:</p>
            <input class="registroycontacto__formulario__rellenable" type="email" name="correo" placeholder="Correo" required/>
            <p class="registroycontacto__formulario__texto">Usuario:</p>
            <input class="registroycontacto__formulario__rellenable" type="text" name="usuario" placeholder="Usuario min 3 caracteres" required/>
            <p class="registroycontacto__formulario__texto">Numero de Telefono:</p>
            <input class="registroycontacto__formulario__rellenable" type="tel" name="telefono" placeholder="XXXXXXXXX" required/>
            <p class="registroycontacto__formulario__texto">Descripcion:</p>
            <textarea class="registroycontacto__formulario__explicacion" required/>
            <button type="submit" class="registroycontacto__formulario__boton">Enviar</button>
        </form>

        <img className="registroycontacto__Imagen" src="../assets/logo.png" />
    </main>
</template>

<script>
    import headerBasico from "./Header.vue";
    export default{
        name: 'contacoComponente',
        components: {
            headerBasico
        }
    } 
</script>