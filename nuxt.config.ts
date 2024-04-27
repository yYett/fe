// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["./layer-ui", "./layer-login"],
  components: {
    global: true,
    dirs: ["~/components"],
  },
  css: ["~/assets/scss/base/index.scss"],
});
