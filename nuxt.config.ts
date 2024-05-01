// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  debug: true,
  devtools: { enabled: true },
  extends: ['./layer-login', './layer-forms'],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  css: ['~/assets/scss/base/index.scss'],
});
