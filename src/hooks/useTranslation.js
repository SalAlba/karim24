'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { isRtlLocale } from '../app/i18n-config'

/**
 * Custom hook to handle translations and direction for components
 * 
 * @param {Object} translations - All translations needed for the component
 * @returns {Object} Translation utilities including t function, direction and isRtl
 */
export default function useTranslation(translations) {
    const { locale } = useLanguage()
    const [isRtl, setIsRtl] = useState(isRtlLocale(locale))

    useEffect(() => {
        setIsRtl(isRtlLocale(locale))
    }, [locale])

    /**
     * Translate a key with optional interpolation
     * 
     * @param {string} key - The translation key to lookup
     * @param {Object} params - Optional parameters for interpolation
     * @returns {string} The translated text
     */
    const t = (key, params = {}) => {
        // Split the key to navigate through the translations object
        const keys = key.split('.')
        let result = translations

        // Traverse the translations object
        for (const k of keys) {
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

        // If it's not a string (like an object), return the key
        return key
    }

    return {
        t,
        locale,
        isRtl,
        direction: isRtl ? 'rtl' : 'ltr'
    }
}