<template>
    <header class="main">
        <div class="main__logos">
          <router-link to="/registrado" class="main__logos__enlace"><img class="main__logos__enlace__logo" src="../assets/logo.png" /></router-link>
          <p class="main__logos__nombre">Moto Mundo</p>
        </div>
    </header>
</template>

<script>
    /**
     * @file HeaderLogueado.vue - Componente que contiene el header que se mostrara cuando estes logueado en la aplicación
     * @author Sergio Corrales Gonzalez
     * @see <a href="https://github.com/Sergiocg2003/moto-mundo.git" target="_blank">Github</a>
     */
    /**
     * @property {string} name - Nombre del componente
    */
    export default{
        name: 'headerLogueadoComponente'
    } 
</script>