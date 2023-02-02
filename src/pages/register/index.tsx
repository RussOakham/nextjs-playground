import Head from 'next/head'
import {
    ClientSafeProvider,
    getCsrfToken,
    getProviders,
    LiteralUnion,
} from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers'

import Header from '@/components/layout/headers/Header'
import RegisterWrapper from './components/RegisterWrapper'

type RegisterProps = {
    providers: Record<
        LiteralUnion<BuiltInProviderType, string>,
        ClientSafeProvider
    > | null
    loginError: string
    csrfToken: string
}


const Register = ({ providers, loginError, csrfToken }: RegisterProps) => {
    return (
        <>
            <Head>
                <title>Register</title>
                <meta name="description" content="Register an account" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title="Register" />
            <div className="flex items-center justify-center ">
                <RegisterWrapper
                    providers={providers}
                    csrfToken={csrfToken}
                    loginError={loginError}
                />
            </div>
        </>
    )
}

export default Register


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
