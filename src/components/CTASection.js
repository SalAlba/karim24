'use client'

import Image from 'next/image'
import { useLanguage } from '../context/LanguageContext'
import { isRtlLocale } from '../app/i18n-config'

export default function CTASection({ translations }) {
    const { locale } = useLanguage()
    const isRtl = isRtlLocale(locale)

    return (
        <div id="download" className="bg-blue-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-xl overflow-hidden">
                    <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-16">
                        <div className="lg:w-0 lg:flex-1">
                            <h2 className="text-3xl font-extrabold tracking-tight text-white">
                                {translations.title}
                            </h2>
                            <p className="mt-4 max-w-3xl text-lg text-blue-100">
                                {translations.subtitle}
                            </p>
                        </div>
                        <div className={`mt-8 lg:mt-0 ${isRtl ? 'lg:mr-8' : 'lg:ml-8'}`}>
                            <div className="sm:flex">
                                <div className="rounded-md shadow">
                                    <a
                                        href="#"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                                    >
                                        {translations.buttonText}
                                    </a>
                                </div>
                            </div>
                            <div className={`mt-4 flex justify-center ${isRtl ? 'space-x-reverse' : ''} space-x-4`}>
                                <div className="relative h-10 w-32">
                                    <Image
                                        src="/images/app-store.png"
                                        alt="App Store"
                                        fill
                                        sizes="128px"
                                        className="object-contain"
                                    />
                                </div>
                                <div className="relative h-10 w-32">
                                    <Image
                                        src="/images/play-store.png"
                                        alt="Play Store"
                                        fill
                                        sizes="128px"
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}