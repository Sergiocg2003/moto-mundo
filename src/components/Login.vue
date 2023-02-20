<template>
    <headerLogin/>
    <main class="registroycontacto">
        <form class="registroycontacto__formulario" @submit="checkForm">
            <p v-if="errors.length">
                <b>Por favor, corrija el/los siguiente(s) error(es)</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </p>
            <p class="registroycontacto__formulario__texto">Usuario:</p>
            <input class="registroycontacto__formulario__rellenable" type="text" v-model="usuario" name="usuario" placeholder="Usuario min 3 caracteres" required/>
            <p class="registroycontacto__formulario__texto">Contraseña:</p>
            <input class="registroycontacto__formulario__rellenable" type="password" v-model="contraseña" name="contraseña" placeholder="Contraseña min 8 caracteres" required/>
            <button type="submit" class="registroycontacto__formulario__boton">Iniciar Sesión</button>
        </form>

        <p class="registroycontacto__opcion">Si todavía no tienes cuenta, <router-link to="/registro">Registrate</router-link></p>

        <img class="registroycontacto__Imagen" src="../assets/logo.png" />
    </main>
</template>

<script>
    import headerLogin from "./HeaderLogin.vue";
    const md5 = require("md5")
    export default{
        name: 'mainLogin',
        components:{
            headerLogin
        },
        data(){
            return{
                errors: [],
                autentico: [],
                usuario: null,
                contraseña: null,
                cifrada: null
            }
        },
        methods:{
            checkForm: async function(e){
                this.errors = [];
                const nombre = this.usuario
                console.log(nombre)
                await fetch(`http://localhost:3001/api/v1/users/${nombre}`)
                    .then((response) => response.json())
                    .then((data) => (this.autentico = data));

                if(nombre == this.autentico.usuario){
                    this.cifrada = md5(this.contraseña)
                    if(this.cifrada == this.autentico.contraseña){
                        localStorage.setItem("Usuario", nombre)
                        this.$router.push("/registrado")
                    }
                    else{
                        this.errors.push('La contraseña no coincide')
                    }
                }
                else{
                    this.errors.push('El usuario no coincide')
                }
                e.preventDefault()
            }
        },
    } 
</script>