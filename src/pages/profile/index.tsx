import Head from 'next/head'

import Header from '@/components/layout/headers/Header'

const index = () => {
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
            <Header title="Logged In!" />
            <div className="flex items-center justify-center ">
                Congratulations! You are logged in!
            </div>
        </>
    )
}

export default index
