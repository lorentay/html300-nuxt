<script setup>

// defines the props passed from the parent component
const props = defineProps({
  cycle: String,
  watering: String, 
  sunlight: String,
  image: String
});
</script>

<template>
  <div class="card">
    <img :src="image" alt="Plant Image" v-if="image" /> 
    <h3>Cycle: {{ cycle }}</h3> 
    <p>Watering: {{ watering }}</p>
    <p>Sunlight: {{ sunlight }}</p>
  </div>
</template>

<style scoped></style>
