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
    "name": `E1 Token #${id}`,
    "description": "E1 Community Token",
    "image": "https://drmlb.io/e1/E1NFT.mp4",
    "edition": `${id}`,
    "date": Date.now(),
    "external_url": `https://www.drmlb.io/api/${id}`,
    "compiler": "drmlbs"
  }
  res.status(200).json(nft)
}
