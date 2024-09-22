<script setup>
import {defineProps} from "vue";
import Card from "@/components/Card.vue";

const props = defineProps({
  name: String,
  subregion: String,
  flag: String,
})
</script>

<template>
  <div class="card">
    <h3>{{ props.name }}</h3>
    <p>
      {{ props.subregion }}
    </p>
    <img :src="props.flag" alt="Country Flag" />
  </div>
</template>

<style scoped></style>
