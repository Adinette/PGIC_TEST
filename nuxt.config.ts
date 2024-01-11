// import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({

  modules: ['nuxt-icon-tw', '@nuxtjs/tailwindcss'],

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
