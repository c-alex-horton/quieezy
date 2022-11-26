import NextAuth, { Awaitable, Session, User } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prismadb'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET!,
  callbacks: {
    session({ session, user }: { session: Session; user: User }) {
      session.user.id = user.id
      return session // The return type will match the one returned in `useSession()`
    },
  },
}
export default NextAuth(authOptions)
