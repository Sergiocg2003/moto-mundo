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
            <p class="registroycontacto__formulario__texto">Correo:</p>
            <input class="registroycontacto__formulario__rellenable" type="text" v-model="correo" name="correo" placeholder="ejemplo@ejemplo.com" required/>
            <p class="registroycontacto__formulario__texto">Usuario:</p>
            <input class="registroycontacto__formulario__rellenable" type="text" v-model="usuario" name="usuario" placeholder="Usuario min 3 caracteres" required/>
            <p class="registroycontacto__formulario__texto">Contraseña:</p>
            <input class="registroycontacto__formulario__rellenable" type="password" v-model="contraseña" name="contraseña" placeholder="Contraseña min 8 caracteres" required/>
            <p class="registroycontacto__formulario__texto">Repite la contraseña:</p>
            <input class="registroycontacto__formulario__rellenable" type="password" v-model="contraseña2" name="contraseña2" placeholder="Contraseña min 8 caracteres" required/>
            <p class="registroycontacto__formulario__texto">Moto:</p>
            <input class="registroycontacto__formulario__rellenable" type="text" v-model="moto" name="moto" placeholder="mt-125" required/>
            <button type="submit" class="registroycontacto__formulario__boton">Enviar</button>
        </form>

        <p class="registroycontacto__opcion">Si ya tienes cuenta, <router-link to="/login">Inicia Sesión</router-link></p>

        <img class="registroycontacto__Imagen" src="../assets/logo.png" />
    </main>
</template>

<script>
import axios from "axios"
import headerLogin from "./HeaderLogin.vue";
    /**
     * @file Registro.vue - Componente que contiene el main de registro de nuestra web
     * @author Sergio Corrales Gonzalez
     * @see <a href="https://github.com/Sergiocg2003/moto-mundo.git" target="_blank">Github</a>
     */
    /**
     * @property {string} name - Nombre del componente
     * @property {Object} components.headerLogin - Componente Header
     * @vue-data {Array} errors - Errores
     * @vue-data {string} correo - Correo intoducido
     * @vue-data {string} usuario - Nombre de usuario intoducido
     * @vue-data {string} contraseña - Contraseña introducida
     * @vue-data {string} contraseña2 - Contraseña introducida
     * @vue-data {string} moto - Moto introducida
    */
    export default{
        name: 'mainLogin',
        components:{
            headerLogin
        },
        data(){
            return{
                errors: [],
                correo: null,
                usuario: null,
                contraseña: null,
                contraseña2: null,
                moto: null
            }
        },
        methods:{
            checkForm: async function(e){
                const expRegCorreo = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/g
                const expRegUsuario = /^[A-Za-z0-9]{3,12}$/g
                const expRegContraseña = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{8,18}$/
                this.errors = [];
                if(this.correo && this.usuario && this.contraseña && this.contraseña2 && this.moto){
                    if(expRegCorreo.test(this.correo)){
                        if(expRegUsuario.test(this.usuario)){
                            if(this.contraseña == this.contraseña2){
                                if(expRegContraseña.test(this.contraseña)){
                                    localStorage.setItem("Usuario", this.usuario)

                                    const NuevoUsuario = {
                                        "correo": this.correo,
                                        "usuario": this.usuario,
                                        "contraseña": this.contraseña,
                                        "moto": this.moto
                                    }

                                    axios.post("http://localhost:3001/api/v1/users", NuevoUsuario)
                                        .then(function (response){
                                            console.log(response)
                                        })
                                    this.$router.push("/Registrado")

                                    // await fetch("http://localhost:3001/api/v1/users", {
                                    //     method: 'post', 
                                    //     headers: {'Content-type': 'application/json'},
                                    //     body: JSON.stringify(NuevoUsuario)})
                                    //         .then(response => response.json())
                                    //         .then(data => {
                                    //             if(Object.keys(data).length > 1){
                                    //                 this.$router.push("/")
                                    //             }
                                    //             else{
                                    //                 this.errors.push(data.message)
                                    //             }
                                    //         })
                                }
                                else{
                                    this.errors.push('La contraseña no cumple los requisitos')
                                }
                            }
                            else{
                                this.errors.push('Las contraseñas no coinciden')
                            }
                        }
                        else{
                            this.errors.push('El usuario no es valido')
                        }
                    }
                    else{
                        this.errors.push('El correo no es valido')
                    }
                }
                else{
                    if(!this.correo || !expRegCorreo.test(this.correo)){
                        this.errors.push('El correo es obligatorio o no es valido')
                    }
                    if(!this.usuario || !expRegUsuario.test(this.usuario)){
                        this.errors.push('El usuario es obligatorio o no es valido')
                    }
                    if(!this.contraseña || !expRegContraseña.test(this.contraseña)){
                        this.errors.push('La contraseña es obligatoria o no cumple los requisitos')
                    }
                    if(!this.contraseña2 || !expRegContraseña.test(this.contraseña)){
                        this.errors.push('La contraseña es obligatoria o no cumple los requisitos')
                    }
                    if(!this.moto){
                        this.errors.push('La moto es obligatoria')
                    }
                }
                e.preventDefault()
            }
        }
    } 
</script>