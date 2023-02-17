<template>
    <headerBasico/>
    <main class="PrincipalListado">
        
                
        <img class="PrincipalListado__Imagen" src="../assets/logo.png" /> 
    </main>
</template>

<script>
    import headerBasico from "./Header.vue";
    export default{
        name: 'mainPrincipal',
        components: {
            headerBasico
        },
        methods:{
            async getAllMotos(){
                
            }
        }
    }
</script>