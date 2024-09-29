<template>
  <!-- displays the cocktail details and the show/hide button -->
  <div class="d-flex align-items-center">
    <img
      :src="drink.strDrinkThumb"
      :alt="drink.strDrink"
      class="img-fluid me-3"
      style="max-width: 100px"
    />
    <!-- cocktail name and glass type -->
    <div class="cocktail-info">
      <h3 class="fs-5">{{ drink.strDrink }}</h3>
      <p class="text-muted">{{ drink.strGlass }}</p>
      <!-- Glass type -->
    </div>

    <!-- show/hide button details -->
    <button
      class="btn btn-outline-primary ms-auto"
      @click="$emit('toggleDetails')"
    >
      {{ showDetails ? "Hide Details" : "Show Details" }}
    </button>
  </div>

  <!-- displays ingredients and intructions if details are shown -->

  <div v-if="showDetails" class="details mt-2">
    <p><strong>Ingredients:</strong></p>
    <ul>
      <li v-for="(ingredient, i) in getIngredients(drink)" :key="i">
        {{ ingredient }}
      </li>
    </ul>
    <p><strong>Instructions:</strong> {{ drink.strInstructions }}</p>
  </div>
</template>

<script>
// props validation ensures the right data type is passed to the component
export default {
  props: {
    drink: {
      type: Object,
      required: true,
    },
    showDetails: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    getIngredients(drink) {
      let ingredients = [];
      for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}`];
        const measure = drink[`strMeasure${i}`];
        if (ingredient) {
          ingredients.push(`${measure ? measure : ""} ${ingredient}`);
        }
      }
      return ingredients;
    },
  },
};
</script>

<style scoped>
.details {
  background-color: #f8f9fa;
  padding: 10px;
  transition: opacity 0.3s ease;
}
</style>
