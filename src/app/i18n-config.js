/**
 * i18n configuration for the application
 */

export const i18nConfig = {
    // List of supported locales
    locales: ['en', 'ar'],

    // Default locale
    defaultLocale: 'en',

    // Dictionary of locale display names
    localeNames: {
        en: 'English',
        ar: 'العربية',
    },

    // RTL locales
    rtlLocales: ['ar'],

    // Cookie name for storing locale preference
    cookieName: 'NEXT_LOCALE',

    // Cookie settings
    cookieOptions: {
        path: '/',
        maxAge: 31536000 // 1 year
    }
}

// Check if a locale should use RTL direction
export function isRtlLocale(locale) {
    return i18nConfig.rtlLocales.includes(locale)
}

// Get the display name for a locale
export function getLocaleDisplayName(locale) {
    return i18nConfig.localeNames[locale] || locale
}

// Check if a locale is supported
export function isValidLocale(locale) {
    return i18nConfig.locales.includes(locale)
}