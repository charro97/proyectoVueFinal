<script setup>

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, storage } from '../firebase.js'
import { ref } from 'vue'

import { useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, doc, deleteDoc} from "firebase/firestore";
import {ref as ref2,uploadBytes, getDownloadURL} from "firebase/storage" 

const db = useFirestore()
const cursos = useCollection(collection(db, 'cursos'))


var nombreUsuario = ref("");
var categoria = ref(""), nombre = ref(""), horas = ref(""), inscripcion = ref(""), imagen = ref("");
// Permite verificar si un usuario está logueado o no
onAuthStateChanged(auth, (user) => {
    if (user) {
  
      const uid = user.uid;
      nombreUsuario.value = user.email;  

    } else {
    }
  });

  var file = ref()

  // Método para la subida de archivos a Storage en Firebase
  function subirArchivo()
  {
    const storageRef = ref2(storage, file.value.files[0].name);
  
    uploadBytes(storageRef, file.value.files[0]).then((snapshot) =>{
      console.log('Uploaded a blob or file');

      
      getDownloadURL(storageRef)
      .then((url) => {
        imagen.value = url
        console.log(url)
      });

    });
  }

  // Método para añadir nuevo curso a la base de datos en Firebase
  function crearCurso() {
    const docRef = addDoc(collection(db, "cursos"), {
    categoria: categoria.value,
    nombre: nombre.value,
    horas: horas.value,
    inscripcion: inscripcion.value,
    imagen: imagen.value
    
});
  }

  function borrarCurso(id) {
    deleteDoc(doc(db, "cursos", id));
  }



</script>


<template>
    <h1>Zona de Administración</h1>
    <h2>Usuario: {{ nombreUsuario }}</h2>
    <br><br>
    <h2 class="fw-bold">Categorías</h2>
    <table class="table table-striped container-md">
      <thead>
        <th>Categoría</th>
        <th>Curso</th>
      </thead>
      <tbody v-for="curso in cursos">
        <tr v-if="curso.categoria =='Ofimatica'" >
          <td>{{ curso.categoria }}</td>
          <td>{{ curso.nombre }}</td>
          <td><button class="btn btn-danger">Borrar curso</button></td>
        </tr>
      </tbody>
      <tbody v-for="curso in cursos">
        <tr v-if="curso.categoria =='Programacion'" >
          <td>{{ curso.categoria }}</td>
          <td>{{ curso.nombre }}</td>
          <td><button class="btn btn-danger">Borrar curso</button></td>
        </tr>
      </tbody>
      <tbody v-for="curso in cursos">
        <tr v-if="curso.categoria =='SOs'" >
          <td>{{ curso.categoria }}</td>
          <td>{{ curso.nombre }}</td>
          <td><button class="btn btn-danger" @click="borrarCurso(curso.id)">Borrar curso</button></td>
        </tr>
      </tbody>
    </table>

    <h2>Añadir nuevo curso</h2>
    

    Categoría: <input type="text" v-model="categoria"><br><br>
    Nombre: <input type="text" v-model="nombre"><br><br>
    Horas: <input type="number" v-model="horas"><br><br>
    Precio: <input type="number" v-model="inscripcion"><br><br>
    Imagen: <input type="file" name="" ref="file" @change="subirArchivo"><br><br>
    <button @click="crearCurso" class="btn btn-success">Crear curso</button><br><br>

    
</template>