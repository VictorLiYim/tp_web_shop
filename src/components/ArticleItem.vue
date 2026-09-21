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
  background: var(--blanc);
  border: none;
  border-radius: var(--rayon);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: var(--ombre-legere);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.carte:hover {
  transform: translateY(-4px);
  box-shadow: var(--ombre-marquee);
}

.carte h3 {
  margin: 0;
  font-size: 1.1rem;
  color: var(--noir);
}

.categorie {
  display: inline-block;
  align-self: flex-start;
  background: var(--gris-clair);
  color: var(--gris-fonce);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
}

.prix {
  font-weight: 800;
  font-size: 1.3rem;
  color: var(--rouge-base);
  margin: 0;
}

.action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  gap: 0.5rem;
}

.action a {
  color: var(--rouge-base);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.action a:hover {
  text-decoration: underline;
}

.action button {
  background: var(--rouge-base);
  color: var(--blanc);
  padding: 0.6rem 1rem;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: var(--ombre-legere);
}

.action button:hover {
  background: var(--rouge-fonce);
}
</style>