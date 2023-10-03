// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  app: {
    baseURL: "/hello-nuxt/",
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
