<template>
  <!-- creates the container for the background with a full-screen
      height, centering all its content both vertically and horizontally. -->
  <div
    class="background-container d-flex flex-column justify-content-center align-items-center text-center"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img
              src="/images/thrillers.jpeg"
              class="card-img-top"
              alt="Picture of big fern as the centerpiece in a black flowerpot with white flowers peeking through the leaves"
            />
            <div class="card-body">
              <h5 class="card-title">Thrillers</h5>
              <p class="card-text">
                Thrillers are tall plants that provide a focal point. They are typically placed in
                the center or back of the container. Examples include ornamental grasses, tall
                flowering plants like cannas, or foliage plants like ferns (shown).
              </p>
              <a
                href="#"
                class="btn btn-success text-light"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Click to learn more about thriller plants"
              >More</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img
              src="/images/fillers.jpeg"
              class="card-img-top"
              alt="Picture of a tray of white violas at a flower market"
            />
            <div class="card-body">
              <h5 class="card-title">Fillers</h5>
              <p class="card-text">
                Fillers are medium-height plants that fill the space between the thriller and the
                spillers. Fillers complement the thriller and the spillers, with complementary
                colors and textures. Examples include begonias, petunias, impatiens, and violas.
              </p>
              <a
                href="#"
                class="btn btn-success text-light"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Click to learn more about filler plants"
              >More</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <img
              src="/images/spillers.jpeg"
              class="card-img-top"
              alt="Picture of creeping jenny trailing over the sides of a black flowerpot filled with white flowers and a fern centerpiece"
            />
            <div class="card-body">
              <h5 class="card-title">Spillers</h5>
              <p class="card-text">
                Spillers are cascading plants that hang over the edges of the container. They add a
                dramatic element and are usually placed around the outer edges, so they can spill
                over the sides. Examples include trailing ivy, sweet potato vine, and creeping jenny
                (shown).
              </p>
              <a
                href="#"
                class="btn btn-success text-light"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Click to learn more about spiller plants"
              >More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// ensures that the DOM is loaded before tooltips initialize
import { onMounted } from 'vue'

let tooltipInstances = []

// initializes tooltips only on the client side
onMounted(() => {
  if (process.client) {
    import('bootstrap/js/dist/tooltip').then(({ default: Tooltip }) => {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        const tooltipInstance = new Tooltip(tooltipTriggerEl)
        tooltipInstances.push(tooltipInstance)
      })
    })
  }
})
</script>

<style scoped>
/* adds a box shadow to the cards */
.card {
  box-shadow: 0 0.5rem 0.5rem -0.25rem rgba(0, 0, 0, 0.5);
}


/* adds stronger specificity within the .tooltip class directly */
.tooltip .tooltip-inner {
  background-color: #198754 !important; 
  color: white !important;
}

.tooltip .tooltip-arrow::before {
  border-top-color: #198754 !important;
}

</style>
