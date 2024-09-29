<template>
  <!-- controls the collapsible part of the navbar, which is hidden or shown based on screen size. -->
  <div>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <NuxtLink to="/" class="navbar-brand">Gardens & Sips</NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- provides the links for the router -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <NuxtLink to="/inspiration" class="nav-link text-white"
                >Inspiration</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/cocktails" class="nav-link text-white"
                >Cocktails</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/plants" class="nav-link text-white"
                >Plants</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- routed content appears here -->
    <NuxtPage />

    <footer class="footer bg-dark text-white text-center py-3">
      <div class="container-fluid">
        <p class="mb-0">&copy; 2024 Gardens & Sips. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* styles the background image for cocktails and plants pages */
.background-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.8)
    ),
    url("/images/knot-garden.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
