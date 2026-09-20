<script setup>
import {ref, watch} from 'vue'
import {RouterLink, RouterView} from 'vue-router'
import {articlesInitiaux} from './data/articles.js'
import {setEstCo} from "./router/index.js";

const articles = ref([...articlesInitiaux])
const panier = ref([])
const estCo = ref(false)


watch(estCo, (valeur) => {
  setEstCo(valeur)
})

function connecter(){
  estCo.value = true
}

function deconnexion(){
  estCo.value = false
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/articles">Articles</RouterLink>
      <RouterLink to="/ajouter">Ajouter</RouterLink>
      <RouterLink to="/panier">Panier</RouterLink>
      <RouterLink to="/admin">Admin</RouterLink>
      <RouterLink v-if="!estCo" to="/login">Connexion</RouterLink>
      <button v-else @click="deconnexion">Déconnexion</button>

    </nav>
  </header>

  <main>
    <RouterView
        :articles="articles"
        :panier="panier"
        :est-connecte="estCo"
        :connecter="connecter"
    />
  </main>
</template>

<style scoped>
nav { display: flex; gap: 1rem; padding: 1rem; background: #f4f4f4; }
nav a { text-decoration: none; color: #333; }
nav a.router-link-active { font-weight: bold; color: #42b883; }
main { padding: 1rem; }
</style>