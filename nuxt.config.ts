// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n'
  ],
  // @ts-ignore
  i18n: {
    // locales: ['en', 'fr', 'es'],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    lazy: true,
    vueI18n: './i18n.config.ts',
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    locales: [
      {
          code: 'en',
          iso: 'en-US',
          name: 'English(US)',
          files: ['en.json', 'en-about.json' ]
      },
      {
          code: 'es',
          iso: 'es-ES',
          name: 'Spanish(SN)',
          file: 'es.json'
      },
      {
          code: 'fr',
          iso: 'fr-FR',
          name: 'French(FR)',
          file: 'fr.json'
      }
    ]
  }
})
