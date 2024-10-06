import 'bootstrap';

<template>
  <client-only>
    <div>
      <!-- creates the container for the background with a full-screen height, 
     centering all its content both vertically and horizontally. -->
      <div
        class="background-container d-flex flex-column justify-content-center align-items-center text-center"
      >
        <div
          class="text-container p-4 bg-custom-opacity text-white rounded mt-5 mt-md-3"
        >
          <h1 class="display-6 text-center text-white">Gardens & Sips</h1>
          <p class="lead text-white">
            Where the beauty of the garden pairs perfectly with cocktails,
            friends, and fun.
          </p>
        </div>
        <NuxtLink
          to="/inspiration"
          class="btn btn-dark text-light mt-4 custom-btn"
        >
          Get Inspired
        </NuxtLink>
      </div>
    </div>
  </client-only>
</template>

<script setup>

</script>

<style scoped>
/* adds a background color to the text to provide contrast for readability */
.bg-custom-opacity {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
