<template>
  <div
    class="background-container d-flex flex-column justify-content-center align-items-center text-left"
  >
    <div class="container my-5 flex-grow-1">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h1 class="text-center">Cocktail Recipe Search</h1>
          <p class="text-center">Search for a cocktail by name or ingredient</p>

          <form @submit.prevent="searchCocktails">
            <div class="input-group mb-3">
              <input
                v-model="searchTerm"
                type="text"
                class="form-control"
                placeholder="Enter cocktail name or ingredient"
              />
              <button type="submit" class="btn btn-primary">Search</button>
            </div>
          </form>

          <div v-if="error" class="text-danger">
            Error fetching data: {{ error }}
          </div>

          <div v-if="results.length">
            <h2>Results:</h2>
            <div v-for="(drink, index) in results" :key="index" class="mb-4">
              <!-- Pass data to CocktailItem component -->
              <CocktailItem
                :drink="drink"
                :showDetails="activeIndex === index"
                @toggleDetails="toggleDetails(index)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CocktailItem from "~/components/CocktailItem.vue"; // imports the cocktailitem component

const searchTerm = ref("");
const results = ref([]);
const error = ref(null);
const activeIndex = ref(null);

const searchCocktails = async () => {
  try {
    error.value = null;
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm.value}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.drinks) {
      results.value = data.drinks; // Store API results
    } else {
      results.value = []; // No results found
    }
  } catch (err) {
    error.value = err.message; // Capture any errors
    console.error("Error fetching data:", err);
  }
};

const toggleDetails = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
}

.details {
  background-color: #f8f9fa;
  padding: 10px;
  transition: opacity 0.3s ease;
}
</style>
