<script setup>
    import { ref } from 'vue'
    import { onAuthStateChanged, signOut } from "firebase/auth";
    import { auth } from '../firebase.js'
    

    
    // Permite verificar si un usuario esta logueado o no
    
    var estaAutenticado = ref("false");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        estaAutenticado.value = true;
        
        
        
        // ...
      } else {
        // User is signed out
        // ...
        estaAutenticado.value = false;
        
          // Cuando el usuario no esté autentificado te redirige a la raíz
      }
      });


        // Permite cerrar la sesion de un usuario
    function cerrarSesion(){
        signOut(auth).then(() => {
    // Sign-out successful.
        }).catch((error) => {
        // An error happened.
      });
  }


</script>



<template>
<!--Menú de navegación realizado con Bootstrap
Dependiendo de si estas logueado o no, te muestra unos enlaces u otros
-->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link active fw-bold" aria-current="page">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cursos/Ofimatica" class="nav-link fw-bold">Ofimática</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cursos/Programacion" class="nav-link fw-bold">Programación</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cursos/SOs" class="nav-link fw-bold">SOs</router-link>
            </li>
            <li class="nav-item">
              <button class="btn btn-success btn-sm lh-1" v-if="!estaAutenticado"><router-link to="/registro" class="nav-link link-light">Registro</router-link></button>
            </li><span>&nbsp;</span>
            <li class="nav-item">
              <button class="btn btn-success btn-sm lh-1" v-if="!estaAutenticado"><router-link to="/login" class="nav-link link-light">Login</router-link></button>
            </li><span>&nbsp;</span>
            <li class="nav-item">
              <button class="btn btn-primary btn-sm lh-1" v-if="!estaAutenticado"><router-link to="/logingoogle" class="nav-link link-light">Login con Google</router-link></button>
            </li>
            <li class="nav-item">
              <router-link to="/privado" class="nav-link fw-bold" v-if="estaAutenticado">Administración</router-link>
            </li>
            <li class="nav-item">
              <button class="btn btn-danger btn-sm lh-1" v-if="estaAutenticado" @click="cerrarSesion"><span class="nav-link link-light">Cerrar sesión</span></button>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>


    <!--
    <router-link to="/">Inicio |</router-link>
    <router-link to="/welcome">Welcome |</router-link>
    <router-link to="/registro" v-if="!estaAutenticado">Registro |</router-link>
    <router-link to="/login" v-if="!estaAutenticado">Login |</router-link>
    <router-link to="/logingoogle" v-if="!estaAutenticado">Login con Google |</router-link>
    <router-link to="/privado" v-if="estaAutenticado">Zona privada</router-link> 
    -->
</template>


