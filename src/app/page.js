import { redirect } from 'next/navigation'

export default function RootPage() {
    // This is a fallback that shouldn't normally get executed
    // because middleware should handle the redirect first
    redirect('/en')

    // This return is just to satisfy React's requirement for a component to return something
    // It will never be rendered because of the redirect above
    return null
}