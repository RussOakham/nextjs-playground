import Head from 'next/head'

import Header from '@/components/layout/headers/Header'

const Home = () => {
    return (
        <>
            <Head>
                <title>NextJS Playground</title>
                <meta
                    name="description"
                    content="Application to play around with NextJS and other toolings"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title="NextJS Playground!" />
        </>
    )
}

export default Home
