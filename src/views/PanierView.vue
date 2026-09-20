<script setup>
import Panier from '../components/Panier.vue'

const props = defineProps({
  articles: {
    type: Array,
    required: false
  },
  panier:{
    type: Array,
    required: true
  }
})

function retirerArticle(i){
  props.panier.splice(i, 1)
}
</script>

<template>
  <h1>Mon panier</h1>
  <Panier
      :panier="panier"
      @retirer-article="retirerArticle"
  />
</template>