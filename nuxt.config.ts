import colors from 'tailwindcss/colors'

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxtjs/color-mode',
  ],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    config: {
      theme: {
        extend: {
          colors: { primary: colors.green }
        }
      }
    },
    viewer: true,
    exposeConfig: false,
    editorSupport: true,
  },
});
