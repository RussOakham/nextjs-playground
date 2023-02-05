import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import ToastProvider from '@/library/context/ToastProvider'

import Layout from '@/components/layout/Layout'
import Toast from '@/components/UX/notifications/Toast'

import '@/styles/globals.css'



const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    return (
        <SessionProvider session={session}>
            <ToastProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <Toast />
            </ToastProvider>
        </SessionProvider>
    )
}

export default App
