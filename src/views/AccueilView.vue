<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  articles: { type: Array, required: true }
})
</script>

<template>
  <div class="accueil">
    <h1>Bienvenue sur la boutique</h1>
    <p>
      Parcourez mon catalogue de jeux vidéos principalement de jeux de Nintendo Switch et ajoutez les vôtres
    </p>

    <div class="actions">
      <RouterLink to="/articles" class="bouton-principal">
        Voir les articles
      </RouterLink>
      <RouterLink to="/ajouter" class="bouton-secondaire">
        Ajouter un article
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.accueil {
  text-align: center;
  padding: 3rem 1rem;
}
.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
.bouton-principal, .bouton-secondaire {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
}
.bouton-principal {
  background:red;
  color: white;
}
.bouton-secondaire {
  background: #eee;
  color: #333;
}
</style>