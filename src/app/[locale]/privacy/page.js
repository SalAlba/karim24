import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { getTranslations, getDirection } from '../../../utils/i18n'

export default async function PrivacyPolicyPage({ params }) {
    const { locale } = await params
    const direction = getDirection(locale)

    // Load translations
    const commonTranslations = await getTranslations(locale, 'common')
    const privacyTranslations = await getTranslations(locale, 'privacy')

    return (
        <div className={`min-h-screen bg-gray-50 ${direction === 'rtl' ? 'text-right' : 'text-left'}`} dir={direction}>
            <Header translations={commonTranslations.header} locale={locale} />

            {/* Privacy Policy Content */}
            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="px-6 py-8">
                        <div className="flex items-center mb-6">
                            <Link
                                href={`/${locale}`}
                                className={`flex items-center text-blue-600 hover:text-blue-800 ${direction === 'rtl' ? 'ml-4' : 'mr-4'}`}
                            >
                                <ArrowLeft size={20} />
                                <span className="ml-1">{privacyTranslations.backToHome}</span>
                            </Link>
                            <h1 className="text-2xl font-bold text-gray-900">{privacyTranslations.title}</h1>
                        </div>

                        <p className="text-gray-500 mb-6">{privacyTranslations.lastUpdated}</p>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">{privacyTranslations.introduction.title}</h2>
                            <p className="text-gray-700">{privacyTranslations.introduction.content}</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">{privacyTranslations.dataCollection.title}</h2>
                            <p className="text-gray-700 mb-4">{privacyTranslations.dataCollection.content}</p>

                            <div className="space-y-4">
                                {privacyTranslations.dataCollection.items.map((item, index) => (
                                    <div key={index}>
                                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                                        <p className="text-gray-700">{item.content}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">{privacyTranslations.dataUse.title}</h2>
                            <p className="text-gray-700 mb-4">{privacyTranslations.dataUse.content}</p>

                            <ul className={`list-disc ${direction === 'rtl' ? 'pr-5' : 'pl-5'} space-y-1 text-gray-700`}>
                                {privacyTranslations.dataUse.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">{privacyTranslations.dataSecurity.title}</h2>
                            <p className="text-gray-700">{privacyTranslations.dataSecurity.content}</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4">{privacyTranslations.contactUs.title}</h2>
                            <p className="text-gray-700 mb-4">{privacyTranslations.contactUs.content}</p>
                            <div className="text-gray-700">
                                <p><strong>Email:</strong> {privacyTranslations.contactUs.email}</p>
                                <p><strong>Phone:</strong> {privacyTranslations.contactUs.phone}</p>
                                <p><strong>Address:</strong> {privacyTranslations.contactUs.address}</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer translations={commonTranslations.footer} locale={locale} />
        </div>
    )
}