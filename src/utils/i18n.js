import { createIntl } from 'next-intl'

export async function loadMessages(locale) {
    return {
        common: (await import(`../../public/locales/${locale}/common.json`)).default,
        home: (await import(`../../public/locales/${locale}/home.json`)).default,
        privacy: (await import(`../../public/locales/${locale}/privacy.json`)).default,
        terms: (await import(`../../public/locales/${locale}/terms.json`)).default,
    }
}

export async function getTranslations(locale, namespace) {
    const messages = await loadMessages(locale)
    return messages[namespace]
}

export async function createTranslator(locale) {
    const messages = await loadMessages(locale)
    const intl = createIntl({ locale, messages })

    return {
        t: (key, params = {}) => {
            // Split the key to get namespace and actual key
            const [namespace, actualKey] = key.split(':')
            return intl.formatMessage({ id: `${namespace}.${actualKey}` }, params)
        }
    }
}

// Get direction based on locale
export function getDirection(locale) {
    return locale === 'ar' ? 'rtl' : 'ltr'
}