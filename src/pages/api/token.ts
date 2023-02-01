import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

const secret = process.env.SECRET

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const token = await getToken({ req, secret })
    res.send(JSON.stringify(token, undefined, 2))
}
