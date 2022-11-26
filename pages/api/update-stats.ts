import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth]'
import { PrismaClient } from '@prisma/client'

type Data = {
  message: string
}

type Body = {}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  const prisma = new PrismaClient()
  const { correct, questions } = req.body

  console.log(req.body)

  if (session) {
    // Signed in
    await prisma.user.update({
      where: {
        id: session?.user.id,
      },
      data: {
        totalCorrect: { increment: correct },
        totalQuestions: { increment: questions },
        totalQuizes: { increment: 1 },
      },
    })
    res.status(200).json({ message: 'User Stats Updated' })
  } else {
    // Not Signed in
    res.status(403).json({ message: 'Not Signed in, no session found' })
  }
}

export default handler
