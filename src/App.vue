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
header {
  background: var(--rouge-base);
  box-shadow: var(--ombre-legere);
}

nav {
  display: flex;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  align-items: center;
  flex-wrap: wrap;
}

nav a, nav button {
  color: var(--blanc);
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: var(--rayon);
  background: transparent;
}

nav a:hover, nav button:hover {
  background: rgba(255, 255, 255, 0.15);
}

nav a.router-link-active {
  background: var(--blanc);
  color: var(--rouge-base);
}

nav button {
  background: var(--jaune-accent);
  color: var(--noir);
  font-weight: 700;
}

nav button:hover {
  background: var(--jaune-accent);
  opacity: 0.9;
}

main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.5rem;
}
</style>