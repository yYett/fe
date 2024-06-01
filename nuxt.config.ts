// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  debug: true,
  devtools: { enabled: true },
  extends: ['./layer-login', './layer-forms', './layer-ui'],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/abstracts/index.scss" as *;',
        },
      },
    },
  },
  css: ['~/assets/scss/base/index.scss'],
  runtimeConfig: {
    public: {
      API: process.env.API,
    },
  },
});
