import { ArrowRight, Gift, CreditCard, Smartphone, Shield, Clock } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getTranslations, getDirection } from '../../utils/i18n'

export default async function HomePage({ params }) {
    // Make sure params is properly awaited
    const { locale } = await params
    const direction = getDirection(locale)

    // Load translations
    const commonTranslations = await getTranslations(locale, 'common')
    const homeTranslations = await getTranslations(locale, 'home')

    return (
        <div className={`min-h-screen bg-gray-50 text-gray-800 ${direction === 'rtl' ? 'text-right' : 'text-left'}`} dir={direction}>
            <Header translations={commonTranslations.header} locale={locale} />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-500 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className={`lg:w-1/2 ${direction === 'rtl' ? 'lg:order-last' : ''}`}>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                {homeTranslations.hero.title}
                            </h1>
                            <p className="mt-4 text-xl text-green-100">
                                {homeTranslations.hero.subtitle}
                            </p>
                            <div className={`mt-8 flex flex-wrap gap-4 ${direction === 'rtl' ? 'justify-end sm:justify-start' : 'justify-start'}`}>
                                <a
                                    href="#download"
                                    className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-md shadow-sm font-medium flex items-center"
                                >
                                    {homeTranslations.hero.downloadBtn}
                                    {direction === 'rtl' ?
                                        <ArrowRight className="mx-2" size={16} /> :
                                        <ArrowRight className="mx-2" size={16} />
                                    }
                                </a>
                                <a
                                    href="#features"
                                    className="bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-md font-medium"
                                >
                                    {homeTranslations.hero.learnMoreBtn}
                                </a>
                            </div>
                        </div>
                        <div className={`lg:w-1/2 mt-10 lg:mt-0 ${direction === 'rtl' ? 'lg:order-first' : ''}`}>
                            <div className="relative mx-auto w-full max-w-md">
                                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                                    <img src="/images/250x450.svg" alt="App screenshot" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-2 shadow-lg">
                                    <Gift size={24} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            {homeTranslations.features.title}
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                            {homeTranslations.features.subtitle}
                        </p>
                    </div>

                    <div className="mt-12">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {homeTranslations.features.cards.map((card, index) => {
                                // Map index to icons
                                const icons = [
                                    <CreditCard key="card" className="text-green-500" />,
                                    <Smartphone key="phone" className="text-green-500" />,
                                    <Shield key="shield" className="text-purple-500" />,
                                    <Clock key="clock" className="text-orange-500" />
                                ];

                                return (
                                    <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-white mx-auto">
                                            {icons[index]}
                                        </div>
                                        <h3 className="mt-5 text-lg font-medium text-gray-900 text-center">{card.title}</h3>
                                        <p className="mt-2 text-sm text-gray-500 text-center">{card.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div id="download" className="bg-green-50">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-green-600 to-indigo-700 rounded-3xl shadow-xl overflow-hidden">
                        <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-16">
                            <div className="lg:w-0 lg:flex-1">
                                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                                    {homeTranslations.cta.title}
                                </h2>
                                <p className="mt-4 max-w-3xl text-lg text-green-100">
                                    {homeTranslations.cta.subtitle}
                                </p>
                            </div>
                            <div className={`mt-8 lg:mt-0 ${direction === 'rtl' ? 'lg:mr-8' : 'lg:ml-8'}`}>
                                <div className="sm:flex">
                                    <div className="rounded-md shadow">
                                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10">
                                            {homeTranslations.cta.buttonText}
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-center space-x-4">
                                    <img src="/images/play-store.png" alt="Play Store" className="h-10" />
                                    <img src="/images/apple-store.png" alt="App Store" className="h-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer translations={commonTranslations.footer} locale={locale} />
        </div>
    );
}