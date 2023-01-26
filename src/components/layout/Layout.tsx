import { ReactNode } from 'react'
import { Inter } from '@next/font/google'

import MainNavigation from '@/components/layout/navigation/MainNavigation'
import MainContainer from '@/components/layout/containers/MainContainer'
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
            <MainContainer className={`${inter.variable} font-sans`}>
                {children}
            </MainContainer>
            <Footer className={`${inter.variable} font-sans`} />
        </>
    )
}

export default Layout
