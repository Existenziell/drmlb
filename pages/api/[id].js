import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async (req, res) => {

  // Run the middleware
  await runMiddleware(req, res, cors)

  const {
    query: { id },
  } = req

  const nft = {

    "name": `Tron NFT #${id}`,
    "description": "Tron <3 Amp",
    "image": "https://drmlb.io/tron/token.png",
    "edition": `${id}`,
    "date": Date.now(),
    "external_url": "https://drmlbio/tron/api/",
    "compiler": "drmlbs"

  }
  res.status(200).json(nft)
}
