import { ReactNode } from 'react'
import { Inter } from '@next/font/google'

import MainNavigation from '@/components/layout/navigation/MainNavigation'
import Footer from '@/components/layout/footer/Footer'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

type PropTypes = {
    children: ReactNode
}

const Layout = ({ children }: PropTypes) => {
    return (
        <>
            <MainNavigation className={`${inter.variable} font-sans`} />
            <main className={`${inter.variable} font-sans`}>{children}</main>
            <Footer className={`${inter.variable} font-sans`} />
        </>
    )
}

export default Layout
