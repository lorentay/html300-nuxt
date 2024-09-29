// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // adds Bootstrap CSS
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],

  // adds Bootstrap JS as a plugin (optional, only if you need Bootstrap JavaScript features)
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
  }
});
