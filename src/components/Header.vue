<template>
    <header class="main">
        <div class="main__logos">
          <router-link to="/" class="main__logos__enlace"><img class="main__logos__enlace__logo" src="../assets/logo.png" /></router-link>
          <p class="main__logos__nombre">Moto Mundo</p>
        </div>
        <nav class="main__navegacion">
            <ul>
                <li class="main__navegacion__opcion"><router-link to="/listado">Listado</router-link></li>
                <li class="main__navegacion__opcion"><router-link to="/contacto">Contacto</router-link></li>
                <li class="main__navegacion__opcion"><router-link to="/login">Login</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default{
        name: 'headerComponente'
    } 
</script>