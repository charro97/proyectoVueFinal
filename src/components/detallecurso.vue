<script setup>

import { useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, doc, deleteDoc} from "firebase/firestore";

const db = useFirestore()

const cursos = useCollection(collection(db, 'cursos'))
</script>

<template>
    <!--Muestra los detalles del curso de con el id pasado como parámetro en la url ($route.params.id)-->
    <div v-for="curso in cursos">
        <div v-if="curso.id == $route.params.id">
            <h1>Categoria: {{ curso.categoria }}</h1>
            <h1 class="fw-bold">Curso de {{ curso.nombre }}</h1>
            <br>
            <img :src="curso.imagen">
            <br><br>
            <p class="fs-3">¡Disponible tan sólo por el módico <b class="text-primary">precio de {{ curso.inscripcion }}€ !</b></p>
            <p class="fs-4">Duración aproximada del curso de {{ curso.horas }} horas</p>
            <h2>Contenidos</h2>
            <p class="fs-4">Para visualizar el índice con los contenidos del curso de {{ curso.nombre }}
            a continuación se encuentra un enlace con un link de descarga a un archivo PDF
            </p>
            <p><a :href="curso.pdf" target="_blank">Archivo PDF {{ curso.nombre }}</a></p>
        </div>
    </div>




</template>

<style>

</style>