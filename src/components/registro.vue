<script setup>
import { ref } from 'vue'
import { auth } from '../firebase.js'
import { createUserWithEmailAndPassword } from "firebase/auth";

var usuario = ref(""), contrasena = ref("");

// Función para registrar un usuario
function altaUsuario(){
    createUserWithEmailAndPassword(auth, usuario.value, contrasena.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

</script>


<template>
  <h1>Registro</h1>
  <div class="form">
    Email: <input type="text" v-model="usuario"><br><br>
    Contraseña: <input type="password" v-model="contrasena"><br><br>
    <button @click="altaUsuario" class="btn btn-success">Registrarse</button>
  </div>
   
</template>


<style>

.form{
  margin-top: 20px;
  margin-bottom: 700px;
}

</style>