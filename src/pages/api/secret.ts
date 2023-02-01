import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req })

    if (!session) {
        res.status(401).send('Unauthorized')
        return
    }

    res.send(JSON.stringify(session, undefined, 2))
}
