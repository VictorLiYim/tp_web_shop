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

const categorieChoisie = ref('')

const categories = computed(() => {
  const all = props.articles.map(a => a.categorie)
  return [...new Set(all)]
})

const articlesFiltre = computed(() => {
  const texte = recherche.value.toLowerCase().trim()

  return props.articles.filter(article => {
    const correspondTexte = !texte || article.titre.toLowerCase().includes(texte)
    const correspondCategorie = !categorieChoisie.value || article.categorie === categorieChoisie.value
    return correspondTexte && correspondCategorie
  })
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

  <div class="filtres">
    <BarreRecherche v-model="recherche" />

    <select v-model="categorieChoisie">
      <option value="">Toutes les catégories</option>
      <option v-for="cat in categories" :key="cat" :value="cat">
        {{ cat }}
      </option>
    </select>
  </div>

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

<style scoped>
.filtres {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}
select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.pagination {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
}
</style>