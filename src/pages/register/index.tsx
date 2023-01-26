import Head from 'next/head'

import Header from '@/components/layout/headers/Header'
import RegisterWrapper from './components/RegisterWrapper'

const Register = () => {
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
                <RegisterWrapper />
            </div>
        </>
    )
}

export default Register
