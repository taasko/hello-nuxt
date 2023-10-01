// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: "/hello-nuxt/",
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
