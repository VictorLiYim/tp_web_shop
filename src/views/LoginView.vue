<script setup>
import {ref} from'vue'
import {useRouter} from 'vue-router'

const props = defineProps({
  connecter:{
    type: Function,
    required: true
  }
})

const router = useRouter()
const identifiant = ref('')
const mdp = ref('')

function seCo() {
  props.connecter()
  router.push('/admin')
}
</script>

<template>
  <h1>Connexion</h1>
  <form @submit.prevent="seCo">
    <div class="champ">
      <label for="identifiant">Identifiant</label>
      <input id="identifiant" v-model="identifiant" type="text" required />
    </div>
    <div class="champ">
      <label for="mdp">Mot de passe</label>
      <input id="mdp" v-model="mdp" type="password" required />
    </div>
    <button type="submit">Se connecter</button>
  </form>
</template>

<style scoped>
form { display: flex; flex-direction: column; gap: 1rem; max-width: 300px; }
.champ { display: flex; flex-direction: column; gap: 0.25rem; }
label { font-weight: bold; }
input { padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; }
</style>