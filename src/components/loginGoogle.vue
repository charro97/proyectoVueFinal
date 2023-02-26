<script setup>
import { ref } from 'vue'
import { auth } from '../firebase.js'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";



function inicioSesionGoogle() {
    signInWithPopup(auth, new GoogleAuthProvider())
        .then((userCredential) => {
            // Signed in 
            const user = userCredeconsole.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

    /*
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });*/
}

</script>



<template>
    <h1>Iniciar sesión con Cuenta de Google</h1>
    <div class="form">
        <button @click="inicioSesionGoogle" class="btn btn-primary">Iniciar Sesión con Google</button>
    </div>
</template>


<style>

.form{
  margin-top: 20px;
  margin-bottom: 700px;
}

</style>