import { getSession } from 'next-auth/client'

export default async function handler(req, res) {
  const session = await getSession({ req })

  if (session) {
    res.status(200).json({ status: 'ok', user: session.user.name })
  } else {
    res.status(401).json({ status: 'unauthorized' })
  }
}
