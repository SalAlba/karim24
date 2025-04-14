'use client'

import { useState, useRef, useEffect } from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { i18nConfig, getLocaleDisplayName } from '../app/i18n-config'

export default function LanguageSwitcher({ className = '' }) {
    const { locale, changeLanguage } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleLanguageChange = (newLocale) => {
        changeLanguage(newLocale)
        setIsOpen(false)
    }

    return (
        <div className={`relative ${className}`} ref={menuRef}>
            <button
                onClick={toggleMenu}
                className="flex items-center text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md transition-colors"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <Globe size={20} className="flex-shrink-0" />
                <span className="mx-2">{getLocaleDisplayName(locale)}</span>
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
                    {i18nConfig.locales.map((lang) => (
                        <button
                            key={lang}
                            onClick={() => handleLanguageChange(lang)}
                            className={`block w-full text-left px-4 py-2 text-sm ${lang === locale
                                ? 'bg-blue-50 text-blue-700 font-medium'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            {getLocaleDisplayName(lang)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}