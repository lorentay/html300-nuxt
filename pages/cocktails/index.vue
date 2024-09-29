<template>
  <!-- creates the container for the background with a full-screen
      height, centering all its content both vertically and horizontally. -->
  <div
    class="background-container d-flex flex-column justify-content-center align-items-center text-center"
  >
    <div class="container my-5 flex-grow-1 overflow-auto">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="accordion" id="recipeAccordion">
            <div
              class="accordion-item"
              v-for="(recipe, index) in recipes"
              :key="index"
            >
              <h2 class="accordion-header" :id="'heading' + index">
                <button
                  class="accordion-button"
                  type="button"
                  @click="toggleCollapse(index)"
                  :aria-expanded="isOpen(index) ? 'true' : 'false'"
                  :aria-controls="'collapse' + index"
                >
                  <img
                    :src="recipe.image"
                    class="img-fluid me-3"
                    :alt="recipe.alt"
                    style="max-width: 300px"
                  />
                  {{ recipe.name }}
                </button>
              </h2>
              <div
                :id="'collapse' + index"
                class="accordion-collapse collapse"
                :class="{ show: isOpen(index) }"
                :aria-labelledby="'heading' + index"
              >
                <div class="accordion-body text-start">
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item"
                      v-for="(ingredient, i) in recipe.ingredients"
                      :key="i"
                    >
                      {{ ingredient }}
                    </li>
                  </ul>

                  <div v-if="recipe.name === 'Mojito Cocktail Recipe'">
                    <p class="ms-3 text-success">
                      <strong>Note:</strong> A Mojito cocktail is traditionally
                      served in a tall "collins" glass.
                    </p>
                  </div>

                  <p class="ms-3">
                    <strong>Method:</strong> {{ recipe.method }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- button to navigate to cocktails-api page -->
          <div class="row justify-content-center mt-4">
            <div class="col-md-8 text-center">
              <NuxtLink to="/cocktails-api">
                <button class="btn btn-primary">Cocktail Recipe Search</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// recipe data
const recipes = ref([
  {
    name: "Mojito Cocktail Recipe",
    image: "/images/mojito.jpeg",
    alt: "A silver tray holds multiple glasses of mojitos with a lime circle on the rim and mint",
    ingredients: [
      "2 ounces white rum",
      "1/2 ounce simple syrup",
      "3/4 ounce lime juice",
      "3-4 mint leaves",
      "Club soda",
    ],
    method:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, adipisci asperiores!",
  },
  {
    name: "Vodka & Ginger Lime Cocktail",
    image: "/images/vodka-ginger-lime.jpeg",
    alt: "Two tall lime-etched glasses, with mint filling the top and wedges of lime sitting on a wicker tray at the bottom",
    ingredients: [
      "2 ounces vodka",
      "1 ounce ginger liqueur",
      "1 ounce lime juice",
      "Sparkling water",
      "Lime wheel & fresh mint for garnish",
    ],
    method:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, adipisci asperiores!",
  },
  {
    name: "Not Just Prosecco",
    image: "/images/not-just-prosecco.jpeg",
    alt: "A glass of rosé prosecco in a champagne flute sit on a glass table with a white Maltese dog looking at it",
    ingredients: [
      "1 champagne flute",
      "5 ounces prosecco, rosé or blanco",
      "White dog, optional",
    ],
    method:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, adipisci asperiores!",
  },
]);

// tracks which accordion items are open
const openItems = ref([]); // Array to store the open accordion indexes

// toggles the collapse of an accordion item
const toggleCollapse = (index) => {
  if (openItems.value.includes(index)) {
    // If the item is already open, close it
    openItems.value = openItems.value.filter((i) => i !== index);
  } else {
    // Otherwise, open it
    openItems.value.push(index);
  }
};

// checks if an accordion item is open
const isOpen = (index) => {
  return openItems.value.includes(index);
};
</script>
