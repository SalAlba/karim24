'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
    const [locale, setLocale] = useState('ar')
    const params = useParams()

    useEffect(() => {
        // Try to get the locale from the URL
        if (params?.locale && (params.locale === 'en' || params.locale === 'ar')) {
            setLocale(params.locale)
        } else {
            // Try to get from localStorage
            const savedLocale = localStorage.getItem('preferredLocale')
            if (savedLocale) {
                setLocale(savedLocale)
            }
            // Otherwise default is 'ar'
        }
    }, [params])

    const isRtl = locale === 'ar'
    const direction = isRtl ? 'rtl' : 'ltr'

    const content = {
        en: {
            title: "Page Not Found",
            description: "Sorry, we couldn't find the page you're looking for.",
            backToHome: "Back to Homepage"
        },
        ar: {
            title: "الصفحة غير موجودة",
            description: "عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.",
            backToHome: "العودة إلى الصفحة الرئيسية"
        }
    }

    const t = content[locale]

    return (
        <div dir={direction} className={`min-h-screen bg-gray-50 flex items-center justify-center ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="max-w-md w-full px-4 py-10 bg-white shadow-lg rounded-lg">
                <div className="text-center">
                    <h1 className="text-9xl font-bold text-green-600">404</h1>

                    <h2 className="mt-4 text-3xl font-semibold text-gray-800">{t.title}</h2>

                    <p className="mt-2 text-gray-600">{t.description}</p>

                    <div className="mt-8">
                        <Link
                            href={`/${locale}`}
                            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors"
                        >
                            <ArrowLeft size={20} className={`${isRtl ? 'ml-2 rotate-180' : 'mr-2'}`} />
                            {t.backToHome}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}