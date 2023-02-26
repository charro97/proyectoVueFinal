import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCLMQ358wMlsED0SqA-M-RUzmN6OoMXDNc",
  authDomain: "proyecto4vue.firebaseapp.com",
  projectId: "proyecto4vue",
  storageBucket: "proyecto4vue.appspot.com",
  messagingSenderId: "571270730764",
  appId: "1:571270730764:web:e7d75c2adc1c468207ca29"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp)