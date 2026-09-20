<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router'
import FormulaireArticle from '../components/FormulaireArticle.vue'

const props = defineProps({
  articles:{
    type: Array,
    required: true
  }
})

const router = useRouter()
const valid = ref(false)

function ajouterArticle(nouvArticle){
  const idMax = props.articles.reduce((max, a) => Math.max(max, a.id), 0)

  props.articles.push({
    id: idMax + 1,
    ...nouvArticle
  })

  valid.value = true
  setTimeout(() => {
    valid.value = false
  }, 1000)
}
</script>

<template>
  <h1>Ajouter un article</h1>

  <p v-if="valid" class="succes">Article ajouté !</p>
  <FormulaireArticle @ajouter-article="ajouterArticle" />
</template>

<style scoped>
.succes {
  background: #e6f9e6;
  color: #2e7d32;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: inline-block;
}
</style>