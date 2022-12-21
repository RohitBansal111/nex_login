
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe', apiKey :process.env.API_KEY })
}
