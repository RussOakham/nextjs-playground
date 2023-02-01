import Head from 'next/head'
import {
    ClientSafeProvider,
    getCsrfToken,
    getProviders,
    LiteralUnion,
} from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers'

import Header from '@/components/layout/headers/Header'
import LoginWrapper from './components/LoginWrapper'

type LoginProps = {
    providers: Record<
        LiteralUnion<BuiltInProviderType, string>,
        ClientSafeProvider
    > | null
    loginError: string
    csrfToken: string
}

const Login = ({ providers, loginError, csrfToken }: LoginProps) => {
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
                <LoginWrapper
                    providers={providers}
                    csrfToken={csrfToken}
                    loginError={loginError}
                />
            </div>
        </>
    )
}

export default Login

export async function getServerSideProps(context: {
    query: any
    res: any
    req: any
}) {
    const { query } = context
    let error = ''
    if (query.error) {
        error = query.error
    }

    try {
        const csrfToken = await getCsrfToken(context)

        return {
            props: {
                providers: await getProviders(),
                loginError: error,
                csrfToken,
            },
        }
    } catch (e) {
        return {
            props: {
                providers: await getProviders(),
                loginError: error,
                csrfToken: '',
            },
        }
    }
}
