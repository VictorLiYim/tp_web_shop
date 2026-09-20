<script setup>
import { ref, computed } from "vue";
import ListeArticles from "../components/ListeArticles.vue";
import BarreRecherche from "../components/BarreRecherche.vue";
const props = defineProps({
  articles: {
    type: Array,
    required: true,
  },
  panier:{
    type: Array,
    required: true,
  }
})

function ajouterAuPanier(article){
  props.panier.push(article)
}

const recherche = ref('')

const articlesFiltre = computed(() =>{
  const texte = recherche.value.toLowerCase().trim()
  if (!texte) return props.articles
  return props.articles.filter(article => article.titre.toLowerCase().includes(texte))
})

const pageActuelle = ref(1)
const pag = 5

const totalP = computed(()=> Math.ceil(articlesFiltre.value.length / pag))

const articlesPag = computed(() => {
  const debut = (pageActuelle.value - 1) * pag
  return articlesFiltre.value.slice(debut, debut + pag)
})

function pageAvant(){
  if(pageActuelle.value > 1) pageActuelle.value --
}

function pageApres(){
  if(pageActuelle.value < totalP.value) pageActuelle.value ++
}
</script>

<template>
  <h1>Articles</h1>

  <BarreRecherche v-model="recherche" />

  <ListeArticles
      :articles="articlesPag"
      @ajouter-panier="ajouterAuPanier"
  />

  <div class="pagination" v-if="totalP > 1">
    <button @click="pageAvant" :disabled="pageActuelle === 1">Précédent</button>
    <span>Page {{ pageActuelle }} / {{ totalP }}</span>
    <button @click="pageApres" :disabled="pageActuelle === totalP">Suivant</button>
  </div>
</template>