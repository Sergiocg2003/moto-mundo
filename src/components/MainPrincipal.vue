<template>
    <main class="Principal">
        <h1 class="Principal__Titulo">Buscador de motos:</h1>
        <ul class="Principal__Buscador">
            <li><input type="text" name='nombre' placeholder='Modelo de una moto' /></li>
            <li><a><img src="../assets/lupa.png" /></a></li>
        </ul>
                
        <img class="Principal__Imagen" src="../assets/logo.png" /> 
    </main>
</template>

<script>
    export default{
        name: 'mainPrincipal'
    } 
</script>