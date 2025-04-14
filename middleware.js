import { NextResponse } from 'next/server'

// List of all locales
const locales = ['en', 'ar']

// Get the preferred locale from request headers
function getLocale(request) {
    // Possible locale sources
    const acceptLanguage = request.headers.get('accept-language') || ''
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value

    // Check sources in order of priority
    if (cookieLocale && locales.includes(cookieLocale)) {
        return cookieLocale
    }

    const acceptedLocale = acceptLanguage
        .split(',')
        .map(item => item.split(';')[0].trim())
        .find(item => locales.includes(item))

    return acceptedLocale || 'en' // Default to English
}

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname

    // Skip for non-HTML requests
    if (pathname.match(/\.(jpg|jpeg|png|svg|ico|css|js)$/)) {
        return NextResponse.next()
    }

    // Check if the pathname already has a locale
    const pathnameHasLocale = locales.some(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return NextResponse.next()

    // Redirect if there is no locale
    const locale = getLocale(request)

    // Handle root path specially
    if (pathname === '/') {
        return NextResponse.redirect(new URL(`/${locale}`, request.url))
    }

    // For other paths
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|api|favicon.ico).*)',
    ],
}