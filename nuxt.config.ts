// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // adds Bootstrap CSS
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],

  // adds Bootstrap JS as a plugin
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],

  // Vite configuration for Nuxt
  vite: {
    server: {
      proxy: {
        // Proxying the Cocktails API requests to avoid CORS issues
        '/api': {
          target: 'https://www.thecocktaildb.com/api/json/v1/1',
          changeOrigin: true,
        }
      }
    }
  },

  // adds fallback (default) metadata for the site
  head: {
    titleTemplate: '%s - Gardens & Sips',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Gardens & Sips - Create a beautiful garden setting and refreshing cocktails for your next gathering.' },
      { name: 'keywords', content: 'gardens, cocktails, entertaining, garden design, drink recipes' },
      { name: 'author', content: 'lorentay' }
    ]
  }
});
