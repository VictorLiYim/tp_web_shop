<script setup>
const props = defineProps({
  articles: { type: Array, required: true }
})

function supprimerArticle(id) {
  if (!confirm('Supprimer cet article ?')) return
  const index = props.articles.findIndex(a => a.id === id)
  if (index !== -1) props.articles.splice(index, 1)
}
</script>

<template>
  <h1>Administration</h1>
  <ul class="liste-admin">
    <li v-for="article in articles" :key="article.id">
      <span>{{ article.titre }} — {{ article.prix.toFixed(2) }} €</span>
      <button @click="supprimerArticle(article.id)">Supprimer</button>
    </li>
  </ul>
</template>

<style scoped>
.liste-admin {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.liste-admin li {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>