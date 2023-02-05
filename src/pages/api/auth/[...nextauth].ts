import NextAuth, { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'
// import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import primsa from '../../../library/prisma/prismadb'

export type Credentials =
    | Record<'username' | 'email' | 'password', string>
    | undefined

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(primsa),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                },
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
                pathname: { label: 'Pathname', type: 'text' },
            },
            authorize: async (credentials) => {
                if (!credentials?.email && !credentials?.password) {
                    throw new Error('Email and Password are required')
                }

                const user = await primsa.user.findFirst({
                    where: {
                        OR: [
                            { username: credentials?.username },
                            { email: credentials?.email },
                        ],
                    },
                })

                if (!user) {
                    if (credentials?.pathname !== '/register') {
                        throw new Error('User not Found')
                    }

                    if (!credentials?.password) {
                        throw new Error('Password is required')
                    }

                    if (!credentials?.email) {
                        throw new Error('Email is required')
                    }
                    const newUser = await primsa.user.create({
                        data: {
                            username: credentials?.username || '',
                            email: credentials.email,
                            password: credentials.password,
                        },
                    })
                    return newUser
                }

                if (credentials?.pathname !== '/login') {
                    throw new Error('User already exists')
                }

                const isPasswordCorrect = await primsa.user.findFirst({
                    where: {
                        password: credentials?.password,
                    },
                })

                if (!isPasswordCorrect) {
                    throw new Error('Password is incorrect')
                }

                return user
            },
        }),
        EmailProvider({
            server: {
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
            },
            from: process.env.SMTP_FROM,
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
    pages: {
        signIn: '/Login',
        signOut: '/',
    },
}

export default NextAuth(authOptions)
