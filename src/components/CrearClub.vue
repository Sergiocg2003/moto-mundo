<template>
    <headerLogueado/>
    <main class="crearClub">
        <div class="crearClub__Menu">
            <ul>
                <li><router-link to="/perfil">Perfil</router-link></li>
                <li><router-link to="/listadoRegistrado">Listado</router-link></li>
                <li><router-link to="/BuscadorAmigos">Buscador de Usuario</router-link></li>
                <li><router-link to="/CrearClub">Crear Club</router-link></li>
            </ul>
        </div>
        <form class="crearClub__formulario" @submit="checkForm">
            <p v-if="errors.length">
                <b>Por favor, corrija el/los siguiente(s) error(es)</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </p>
            <p class="crearClub__formulario__Titulo">Crea tu propio club motero</p>
            <p class="crearClub__formulario__texto">Nombre:</p>
            <input class="crearClub__formulario__rellenable" type="text" v-model="nombre" name="nombre" placeholder="Nombre del club" required/>
            <p class="crearClub__formulario__texto">Descripcion:</p>
            <input class="crearClub__formulario__explicacion" type="text" v-model="descripcion" name="descripcion" placeholder="Descripcion del club" required/>
            <button type="submit" class="crearClub__formulario__boton">Crear</button>
        </form>
        <div class="crearClub__Vacio"></div>
        <img class="crearClub__Imagen" src="../assets/logo.png" />
    </main>
</template>

<script>
import axios from "axios";
import headerLogueado from "./HeaderLogueado.vue";
    /**
     * @file CrearClub.vue - Componente que contiene el main de la pagina para crear un club
     * @author Sergio Corrales Gonzalez
     * @see <a href="https://github.com/Sergiocg2003/moto-mundo.git" target="_blank">Github</a>
     */
    /**
     * @property {string} name - Nombre del componente
     * @property {Object} components.headerLogueado - Componente Header
     * @vue-data {Array} errors - Errores
     * @vue-data {string} nombre - Nombre del club introducido
     * @vue-data {string} descripcion - Descripcion del club introducido
     * @vue-data {Array} existe - Informacion de un club que ya existe
    */
    export default{
        name: 'mainLogin',
        components:{
            headerLogueado
        },
        data(){
            return{
                errors: [],
                nombre: null,
                descripcion: null,
                existe: []
            }
        },
        methods:{
            checkForm: async function(e){
                this.errors = [];
                const nombre = this.nombre
                console.log(nombre)
                console.log(this.descripcion)
                await fetch(`http://localhost:3001/api/v1/clubs/${nombre}`)
                    .then((response) => response.json())
                    .then((data) => (this.existe = data));
                if(nombre == this.existe.nombre){
                    this.errors.push('El nombre del club ya esta usado')
                }
                else{
                    if(!this.descripcion){
                        this.errors.push('No hay descripcion')
                    }
                    else{
                        const NuevoClub = {
                        "nombre": this.nombre,
                        "descripcion": this.descripcion
                        }

                        console.log(NuevoClub)

                        axios.post("http://localhost:3001/api/v1/clubs", NuevoClub)
                            .then(function (response){
                                console.log(response)
                            })
                        this.$router.push("/Registrado")
                    }
                }
                e.preventDefault()
            }
        }
    } 
</script>