<script setup>
import { computed} from 'vue'
const props = defineProps({
  panier:{
    type: Array,
    required: true
  }
})

const emit = defineEmits(['retirer-article'])
const total = computed(() => props.panier.reduce((somme, article) => somme + article.prix, 0))
</script>

<template>
  <div v-if="panier.length === 0">
    <p>Votre panier est vide</p>
  </div>

  <ul v-else class="liste-panier">
    <li v-for="(article, index) in panier" :key="index">
      <span>{{ article.titre }} — {{ article.prix.toFixed(2) }} €</span>
      <button @click="emit('retirer-article', index)">Retirer</button>
    </li>
  </ul>

  <p v-if="panier.length > 0" class="total">
    Total : {{ total.toFixed(2) }} €
  </p>
</template>

<style scoped>
.liste-panier {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.liste-panier li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.total {
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 1rem;
}
</style>