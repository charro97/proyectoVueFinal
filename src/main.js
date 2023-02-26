import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import inicio from './components/inicio.vue'
import cursos from './components/cursos.vue'
import detallecurso from './components/detallecurso.vue'
import registro from './components/registro.vue'
import login from './components/login.vue'
import loginGoogle from './components/loginGoogle.vue'
import privado from './components/privado.vue'
import NotFound from './components/NotFound.vue'
import { firebaseApp } from './firebase.js'
import { VueFire, VueFireAuth } from 'vuefire'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase.js'

import './assets/bootstrap.min.css'
import './assets/bootstrap.bundle.min.js'
//import './assets/base.css'

var estaAutenticado = false;

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      estaAutenticado = true;
      router.push("/") 
      // ...
    } else {
      // User is signed out
      // ...
      estaAutenticado = false;
      router.push("/")    // Cuando el usuario no esté autentificado te redirige a la raíz
    }
  });

const routes = [
    {
        path: '/',
        component: inicio
    },
    {
        path: '/cursos/:curso',
        component: cursos
    },
    {
        path: '/detallecurso/:id',
        component: detallecurso
    },
    {
        path: '/registro',
        component: registro,
        beforeEnter: (to, from) => {
            // reject the navigation
            return !estaAutenticado
        }
    },
    {
        path: '/login',
        component: login,
        beforeEnter: (to, from) => {
            // reject the navigation
            return !estaAutenticado
        }
    },
    {
        path: '/logingoogle',
        component: loginGoogle,
        beforeEnter: (to, from) => {
            // reject the navigation
            return !estaAutenticado
        }
    },
    {
        path: '/privado',
        component: privado,
        beforeEnter: (to, from) => {
            // reject the navigation
            return estaAutenticado
        }
    },
    
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const miapp = createApp(App)


miapp.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })

miapp.use(router)
miapp.mount('#app')