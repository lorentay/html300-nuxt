<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <!-- slot for page-header content passed from InspirationPage.vue (parent) -->
    <slot></slot>

    <div class="carousel-inner">
      <!-- loops through the images array -->
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['carousel-item', { active: index === 0 }]"
      >
        <!-- adds a border that toggles when clicked -->
        <img
          :src="image.src"
          class="d-block w-100"
          :alt="image.alt"
          :style="{ border: hasBorder[index] ? '5px solid green' : 'none' }"
          @click="toggleBorder(index)"
        />
        <div
          class="carousel-caption d-block text-center p-4 bg-custom-opacity rounded"
        >
          <h5>{{ image.title }}</h5>
          <p class="lead d-none d-md-block">{{ image.description }}</p>
        </div>
      </div>
    </div>

    <!-- provides carousel controls -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
// imports the mixin
import toggleBorderMixin from "../mixins/toggleBorderMixin";

// props for array of image objects passed from the parent
const props = defineProps({
  images: {
    type: Array,
    required: true,
    validator(images) {
      return images.every(
        (image) =>
          typeof image.src === "string" &&
          typeof image.alt === "string" &&
          typeof image.caption === "string" &&
          typeof image.description === "string"
      );
    },
  },
});

// initializes the mixin for each of the images
const { hasBorder, toggleBorder } = toggleBorderMixin(props.images.length);
</script>

<style scoped>
/* adds a background color to the directional arrows to provide contrast for readability */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 3.125rem;
  height: 3.125rem;
}
/* adds a background color to the text to provide contrast for readability */
.bg-custom-opacity {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
