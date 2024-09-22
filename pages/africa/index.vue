<script setup>
import { ref, onMounted } from "vue";


const countries = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/region/Africa"
    );
    countries.value = await response.json();
    console.log(countries.value);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div>
    <h1>Africa Page</h1>
    <p>Welcome to the Africa page!</p>
  </div>
  <ul>
    <li v-for="country in countries" :key="country.cca3">
      <Card
        :name="country.name.common"
        :subregion="country.subregion"
        :flag="country.flags.png"
      />
    </li>
  </ul>
</template>

<style scoped></style>
