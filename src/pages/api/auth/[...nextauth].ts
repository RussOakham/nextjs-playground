import NextAuth, { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import primsa from '../../../library/prisma/prismadb'

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(primsa),
    providers: [
        EmailProvider({
            server: { host: process.env.EMAIL_SERVER_HOST },
            from: process.env.EMAIL_FROM,
            maxAge: 14 * 24 * 60 * 60, // 14 days
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    debug: true,
}

export default NextAuth(authOptions)
