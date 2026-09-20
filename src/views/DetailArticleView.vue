<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const props = defineProps({
  articles: {
    type: Array,
    required: true
  }
})

const route = useRoute()

const articleCourant = computed(() =>
    props.articles.find(a => a.id === Number(route.params.id))
)
</script>

<template>
  <div v-if="articleCourant">
    <RouterLink to="/articles">← Retour à la liste</RouterLink>
    <h1>{{ articleCourant.titre }}</h1>
    <p class="categorie">{{ articleCourant.categorie }}</p>
    <p class="prix">{{ articleCourant.prix.toFixed(2) }} €</p>
    <p>{{ articleCourant.description }}</p>
  </div>
  <div v-else>
    <p>Article introuvable</p>
    <RouterLink to="/articles">← Retour à la liste</RouterLink>
  </div>
</template>