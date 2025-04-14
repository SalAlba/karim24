/**
 * Utility functions for handling translations
 */

// Load translation messages for a specific locale
export async function loadMessages(locale) {
    return {
        common: (await import(`../../public/locales/${locale}/common.json`)).default,
        home: (await import(`../../public/locales/${locale}/home.json`)).default,
        privacy: (await import(`../../public/locales/${locale}/privacy.json`)).default,
        terms: (await import(`../../public/locales/${locale}/terms.json`)).default,
    }
}

// Get translations for a specific namespace
export async function getTranslations(locale, namespace) {
    const messages = await loadMessages(locale)
    return messages[namespace]
}

// Simple translation function for use in server components
export async function createServerTranslator(locale) {
    const messages = await loadMessages(locale)

    return {
        t: (key, params = {}) => {
            // Split the key to get namespace and actual key
            const [namespace, actualKey] = key.split(':')

            if (!messages[namespace]) {
                console.warn(`Translation namespace not found: ${namespace}`)
                return key
            }

            let result = messages[namespace]
            const keyParts = actualKey.split('.')

            // Traverse the translations object
            for (const k of keyParts) {
                if (result && result[k]) {
                    result = result[k]
                } else {
                    console.warn(`Translation key not found: ${key}`)
                    return key
                }
            }

            // If result is a string, interpolate any params
            if (typeof result === 'string') {
                return Object.entries(params).reduce((acc, [key, value]) => {
                    return acc.replace(new RegExp(`{{${key}}}`, 'g'), value)
                }, result)
            }

            return key
        }
    }
}

// Get direction based on locale
export function getDirection(locale) {
    return locale === 'ar' ? 'rtl' : 'ltr'
}