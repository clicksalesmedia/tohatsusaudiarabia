import NextAuth, { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@tohatsu.local'
        const adminPassword = process.env.ADMIN_PASSWORD || 'change-me-strong'
        if (
          credentials?.email === adminEmail &&
          credentials?.password === adminPassword
        ) {
          return { id: 'admin', name: 'Admin', email: adminEmail }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }


