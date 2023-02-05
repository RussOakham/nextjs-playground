import { getSession, GetSessionParams } from 'next-auth/react'
import Head from 'next/head'

import Header from '@/components/layout/headers/Header'

const index = () => {
    return (
        <>
            <Head>
                <title>Account Created</title>
                <meta name="description" content="Welcome to NextJS Playground" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title="Welcome to the Playground!" />
            <div className="flex items-center justify-center ">
                Congratulations! You are new here!
            </div>
        </>
    )
}

export default index

export async function getServerSideProps(context: GetSessionParams | undefined) {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }
    return {
        props: { session },
    }
}
