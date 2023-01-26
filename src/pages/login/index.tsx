import Head from 'next/head'

import Header from '@/components/layout/headers/Header'
import LoginWrapper from './components/LoginWrapper'

const Login = () => {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login to your Account" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title="Login to your Account" />
            <div className="flex items-center justify-center ">
                <LoginWrapper />
            </div>
        </>
    )
}

export default Login
