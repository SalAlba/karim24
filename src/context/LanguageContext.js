'use client'

import { createContext, useState, useContext, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const params = useParams()
    const router = useRouter()
    const [locale, setLocale] = useState(params?.locale || 'ar')

    const changeLanguage = (newLocale) => {
        if (newLocale === locale) return

        // Get current path and replace locale
        const currentPath = window.location.pathname
        const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`)

        // Update state and redirect
        setLocale(newLocale)
        router.push(newPath)

        // Save to cookie for persistence
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000` // 1 year
    }

    // Sync context with URL locale param when it changes
    useEffect(() => {
        if (params?.locale && params.locale !== locale) {
            setLocale(params.locale)
        }
    }, [params?.locale])

    return (
        <LanguageContext.Provider value={{ locale, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

export default LanguageContext