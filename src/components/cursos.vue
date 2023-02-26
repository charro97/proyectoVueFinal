<script setup>

import { ref } from 'vue'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase.js'
import { useFirestore, useCollection } from 'vuefire'
import { collection} from "firebase/firestore";

const db = useFirestore()
const cursos = useCollection(collection(db, 'cursos'))

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


</script>


<template>
    <h1>Cursos de {{ $route.params.curso }}</h1>

    <table class="table table-striped container-md">
        <!--Muestra los cursos de la categoria pasada como parámetro en la url ($route.params.curso)-->

        <tbody v-for="curso in cursos">
            <tr v-if="curso.categoria == $route.params.curso">
                <td class="align-middle"><img :src="curso.imagen"></td>
                <td class="align-middle"><b>{{ curso.nombre }}</b></td>
                <td class="align-middle">Duración: <b>{{ curso.horas }} horas</b></td>
                <td class="align-middle">Precio: <b>{{ curso.inscripcion }}€</b></td>
                <td class="align-middle"><button class="btn btn-primary btn-md lh-1"><router-link
                            :to="`/detallecurso/${curso.id}`" class="nav-link link-light">Ver curso</router-link></button>
                </td>
                <td class="align-middle" v-if="estaAutenticado"><button class="btn btn-success btn-md lh-1">Inscribirse</button></td>
            </tr>
        </tbody>

    </table>
</template>

<style>

table {
    z-index: 5;
}

</style>