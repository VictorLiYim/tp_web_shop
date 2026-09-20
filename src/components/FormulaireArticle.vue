<script setup>
import {ref} from 'vue'
const emit = defineEmits(['ajouter-article'])

const titre = ref('')
const prix = ref('')
const categorie = ref('')
const description = ref('')

function soumettre(){
  if(!titre.value || !prix.value || !categorie.value) return
  emit('ajouter-article',{
    titre : titre.value,
    prix : Number(prix.value),
    categorie : categorie.value,
    description : description.value
  })

  titre.value = ''
  prix.value = ''
  categorie.value = ''
  description.value = ''
}
</script>

<template>
  <form @submit.prevent="soumettre">
    <div class="champ">
      <label for="titre">Titre</label>
      <input id="titre" v-model="titre" type="text" required />
    </div>
    <div class="champ">
      <label for="prix">Prix (€)</label>
      <input id="prix" v-model="prix" type="number" step="1" min="0" required />
    </div>

    <div class="champ">
      <label for="categorie">Catégorie</label>
      <input id="categorie" v-model="categorie" type="text" required />
    </div>

    <div class="champ">
      <label for="description">Description</label>
      <textarea id="description" v-model="description" rows="3"></textarea>
    </div>
    <button type="submit">Ajouter l'article</button>
  </form>
</template>

<style scoped>
form { display: flex; flex-direction: column; gap: 1rem; max-width: 400px; }
.champ { display: flex; flex-direction: column; gap: 0.25rem; }
label { font-weight: bold; }
input, textarea { padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; }
</style>