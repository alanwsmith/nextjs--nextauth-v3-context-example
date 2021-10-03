export default async function handler(req, res) {
  res.status(200).json({ status: 'ok', note: 'no session data available' })
}
