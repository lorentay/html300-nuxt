// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Bootstrap CSS and JS
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],

  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],

  // Vite configuration with Cocktails API proxy
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'https://www.thecocktaildb.com/api/json/v1/1',
          changeOrigin: true,
        }
      }
    }
  },

  // metadata for SEO
  head: {
    titleTemplate: '%s - Garden & Sips',  

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Garden & Sips - Create a beautiful garden setting and refreshing cocktails for your next gathering.' },
      { name: 'keywords', content: 'gardens, cocktails, entertaining, garden design, drink recipes' }
    ]
  }
});
