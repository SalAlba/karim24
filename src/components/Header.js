'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { getDirection } from '../utils/i18n'

export default function Header({ translations, locale }) {
    const router = useRouter()
    const params = useParams()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)

    const direction = getDirection(locale)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen)
    }

    const switchLanguage = (newLocale) => {
        // Get current path and replace locale
        const currentPath = window.location.pathname
        const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`)

        router.push(newPath)
        setIsLanguageMenuOpen(false)
    }

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href={`/${locale}`} className="text-2xl font-bold text-green-600">
                                Karim
                            </Link>
                        </div>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <nav className={`flex ${direction === 'rtl' ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
                            <Link href={`/${locale}`} className="text-gray-500 hover:text-gray-900">
                                {translations.home}
                            </Link>
                            <Link href={`/${locale}#features`} className="text-gray-500 hover:text-gray-900">
                                {translations.features}
                            </Link>
                            <Link href={`/${locale}#pricing`} className="text-gray-500 hover:text-gray-900">
                                {translations.pricing}
                            </Link>
                            <Link href={`/${locale}#about`} className="text-gray-500 hover:text-gray-900">
                                {translations.about}
                            </Link>
                            <Link href={`/${locale}#contact`} className="text-gray-500 hover:text-gray-900">
                                {translations.contact}
                            </Link>
                        </nav>

                        <div className="relative">
                            <button
                                onClick={toggleLanguageMenu}
                                className="flex items-center text-gray-500 hover:text-gray-900"
                            >
                                <Globe size={20} />
                                <span className="mx-1">{locale === 'en' ? 'English' : 'العربية'}</span>
                                <ChevronDown size={16} />
                            </button>

                            {isLanguageMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                    <button
                                        onClick={() => switchLanguage('en')}
                                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 w-full text-left"
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => switchLanguage('ar')}
                                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 w-full text-left"
                                    >
                                        العربية
                                    </button>
                                </div>
                            )}
                        </div>

                        <a
                            href="#download"
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-sm"
                        >
                            {translations.download}
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleLanguageMenu}
                            className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 mr-2"
                        >
                            <Globe size={24} />
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href={`/${locale}`}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {translations.home}
                        </Link>
                        <Link
                            href={`/${locale}#features`}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {translations.features}
                        </Link>
                        <Link
                            href={`/${locale}#pricing`}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {translations.pricing}
                        </Link>
                        <Link
                            href={`/${locale}#about`}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {translations.about}
                        </Link>
                        <Link
                            href={`/${locale}#contact`}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {translations.contact}
                        </Link>
                        <a
                            href="#download"
                            className="block px-3 py-2 rounded-md text-base font-medium bg-green-600 text-white hover:bg-green-700"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {translations.download}
                        </a>
                    </div>
                </div>
            )}

            {/* Mobile language menu */}
            {isLanguageMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <button
                            onClick={() => switchLanguage('en')}
                            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                            English
                        </button>
                        <button
                            onClick={() => switchLanguage('ar')}
                            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                            العربية
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}