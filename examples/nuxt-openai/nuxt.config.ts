// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  nitro: {
    preset: 'vercel', // changed from 'vercel-edge' to avoid rollup inject issue
  },

  runtimeConfig: {
    openaiApiKey: '',
    assistantId: '',
  },

  compatibilityDate: '2024-07-05',
  telemetry: false,
});
