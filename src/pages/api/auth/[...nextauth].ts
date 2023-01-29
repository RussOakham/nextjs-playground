import NextAuth, { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import GoogleProvider from 'next-auth/providers/google'
// import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import primsa from '../../../library/prisma/prismadb'

const authOptions: NextAuthOptions = NextAuth({
    adapter: PrismaAdapter(primsa),
    providers: [
        EmailProvider({
            server: { host: process.env.EMAIL_SERVER_HOST },
            from: process.env.EMAIL_FROM,
        }),
    ],
})

export default NextAuth(authOptions)
