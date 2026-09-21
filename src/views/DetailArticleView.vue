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
  <div v-if="articleCourant" class="fiche">
    <RouterLink to="/articles" class="retour">← Retour à la liste</RouterLink>
    <h1>{{ articleCourant.titre }}</h1>
    <span class="categorie">{{ articleCourant.categorie }}</span>
    <p class="prix">{{ articleCourant.prix.toFixed(2) }} €</p>
    <p>{{ articleCourant.description }}</p>
  </div>
  <div v-else class="introuvable">
    <p>Article introuvable</p>
    <RouterLink to="/articles" class="retour">← Retour à la liste</RouterLink>
  </div>
</template>

<style scoped>
.fiche {
  background: var(--blanc);
  border-radius: var(--rayon);
  padding: 2rem;
  box-shadow: var(--ombre-legere);
  max-width: 600px;
  margin: 0 auto;
}

.retour {
  display: inline-block;
  color: var(--rouge-base);
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.retour:hover {
  text-decoration: underline;
}

.fiche h1 {
  margin: 0 0 0.5rem 0;
  font-size: 1.8rem;
}

.categorie {
  display: inline-block;
  background: var(--gris-clair);
  color: var(--gris-fonce);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}

.prix {
  font-weight: 800;
  font-size: 2rem;
  color: var(--rouge-base);
  margin: 0.5rem 0 1.5rem 0;
}

.fiche p:last-child {
  line-height: 1.6;
  color: var(--gris-fonce);
}

.introuvable {
  text-align: center;
  padding: 3rem 1rem;
}
</style>