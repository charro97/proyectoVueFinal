<script setup>


import { useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, doc, deleteDoc} from "firebase/firestore";

const db = useFirestore()

const recordatorios = useCollection(collection(db, 'recordatorios'))

function nuevaNota(){
  const docRef = addDoc(collection(db, "recordatorios"), {
  titulo: "Segunda nota",
  prioridad: "normal"
});
}

function borrarNota(id){
  deleteDoc(doc(db, "recordatorios", id));
}



defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h3 class="green">{{ msg }}</h3>
    <button @click="nuevaNota">Nueva nota</button>
    <ul>
      <li v-for="record in recordatorios" @click="borrarNota(record.id)" :key="record.id">{{ record.titulo }}</li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
