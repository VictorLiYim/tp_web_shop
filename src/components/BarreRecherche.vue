<script setup>
defineProps({
  modelValue:{
    type:String,
    default:''
  }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <input
  type="text"
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
  placeholder="Rechercher un article..."
  />
</template>

<style scoped>
input {
  width: 100%;
  max-width: 400px;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>