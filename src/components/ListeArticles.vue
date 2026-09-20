<script setup>
import {defineComponent} from "vue";
import ArticleItem from "./ArticleItem.vue";

defineProps({
  articles:{
    type: Array,
    required: true
  }
})

const emit = defineEmits(['ajouter-panier'])
</script>

<template>
  <div class="tableau">
    <ArticleItem
        v-for="article in articles"
        :key="article.id"
        :article="article"
        @ajouter-panier="emit('ajouter-panier', $event)"
    />
  </div>
</template>
<style scoped>
.tableau {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
</style>
