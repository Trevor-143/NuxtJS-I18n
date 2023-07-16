// nuxt.d.ts
import { NuxtConfig } from '@nuxt/types'
import { NuxtVueI18n } from 'nuxt-i18n'

declare module '@nuxt/types' {
    interface NuxtConfig {
        // This adds the `i18n` property to the existing `NuxtConfig` type
        i18n?: NuxtVueI18n.Options.AllOptionsInterface
    }
}
