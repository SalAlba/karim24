import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { getTranslations, getDirection } from '../../../utils/i18n'

import { i18nConfig } from '@/app/i18n-config'
// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({
        locale: locale,
    }))
}


export default async function TermsAndConditionsPage({ params }) {
    // const locale = params.locale
    const { locale } = await params
    const direction = getDirection(locale)

    // Load translations
    const commonTranslations = await getTranslations(locale, 'common')
    const termsTranslations = await getTranslations(locale, 'terms')

    return (
        <div className={`min-h-screen bg-gray-50 ${direction === 'rtl' ? 'text-right' : 'text-left'}`} dir={direction}>
            <Header translations={commonTranslations.header} locale={locale} />

            {/* Terms & Conditions Content */}
            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="px-6 py-8">
                        <div className="flex items-center mb-6">
                            <Link
                                href={`/${locale}`}
                                className={`flex items-center text-green-600 hover:text-green-800 ${direction === 'rtl' ? 'ml-4' : 'mr-4'}`}
                            >
                                <ArrowLeft size={20} />
                                <span className="ml-1">{termsTranslations.backToHome}</span>
                            </Link>
                            <h1 className="text-2xl font-bold text-gray-900">{termsTranslations.title}</h1>
                        </div>

                        <p className="text-gray-500 mb-6">{termsTranslations.lastUpdated}</p>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">{termsTranslations.introduction.title}</h2>
                            <p className="text-gray-700">{termsTranslations.introduction.content}</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">{termsTranslations.definitions.title}</h2>
                            <p className="text-gray-700 mb-4">{termsTranslations.definitions.content}</p>

                            <div className="space-y-4">
                                {termsTranslations.definitions.terms.map((term, index) => (
                                    <div key={index}>
                                        <h3 className="font-medium text-gray-900">{term.term}</h3>
                                        <p className="text-gray-700">{term.definition}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">{termsTranslations.accountService.title}</h2>
                            <p className="text-gray-700 mb-4">{termsTranslations.accountService.content}</p>

                            <ul className={`list-disc ${direction === 'rtl' ? 'pr-5' : 'pl-5'} space-y-1 text-gray-700`}>
                                {termsTranslations.accountService.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">{termsTranslations.liability.title}</h2>
                            <p className="text-gray-700">{termsTranslations.liability.content}</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4">{termsTranslations.governing.title}</h2>
                            <p className="text-gray-700">{termsTranslations.governing.content}</p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer translations={commonTranslations.footer} locale={locale} />
        </div>
    )
}