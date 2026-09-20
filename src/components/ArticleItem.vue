<script setup>
defineProps({
  article:{
    type: Object,
    required: true
  }
})

const emit = defineEmits(['ajouter-panier'])
</script>

<template>
  <div class="carte">
    <h3>{{article.titre}}</h3>
    <p class="categorie">{{article.category}}</p>
    <p class="prix">{{article.prix}} €</p>

    <div class="action">
      <RouterLink :to="`/article/${article.id}`">Voir détails</RouterLink>
      <button @click="emit('ajouter-panier', article)">Ajouter au panier</button>
    </div>
  </div>
</template>

<style scoped>
.carte {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.categorie { color: #888; font-size: 0.85rem; }
.prix { font-weight: bold; }
.actions { display: flex; justify-content: space-between; align-items: center; }
</style>