<template>
  <div class="inspiration-background">
    <!-- passed the header content to CarouselImages.vue using a slot -->
    <Carousel :images="images">
      <h1 class="page-header">Inspiration</h1>
    </Carousel>
  </div>
</template>

<script setup>
// imports the Carousel component and Vue's ref function to manage reactivity
import Carousel from "~/components/Carousel.vue";
import { ref } from "vue";

// array of images for the carousel that will display in the carousel component
const images = ref([
  {
    src: "/images/plant-a-pot.jpeg",
    alt: "A flowerpot with purple petunias, white mandevilla, and creeping jenny",
    title: "Plant a Pot",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/images/dress-the-table.jpeg",
    alt: "White begonias and purple petunias in terra cotta pots with a small vase of fuchsia roses",
    title: "Dress the Table",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    src: "/images/light-it-up.jpeg",
    alt: "A garden with strings of white lights",
    title: "Light It Up",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
]);

// logs the image array to the console for debugging purposes
console.log(images.value);
</script>

<style scoped>
.page-header {
  text-align: center;
  font-size: 24px;
  color: white;
  padding-top: 10px;
  margin-bottom: 10px;
}
/* adds a background color rather than a background image */
.inspiration-background {
  background-color: #2d462f;
  min-height: 100vh;
}
</style>
