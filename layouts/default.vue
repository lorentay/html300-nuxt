<template>
    <NuxtLayout>
    <header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Garden & Sips</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/inspiration">Inspiration</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/cocktails">Cocktails</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/plants">Plants</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
   <!-- Renders the content of the active page -->
   <NuxtPage />
  </NuxtLayout>
</template>
