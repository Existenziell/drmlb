const { ethers } = require('hardhat')
const fs = require('fs')

async function main() {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying contract with account:', deployer.address)
  console.log('Account balance:', (await deployer.getBalance()).toString())

  const Tron = await ethers.getContractFactory('Tron')
  const tron = await Tron.deploy('Tron', 'AMP', 'https://www.drmlb.io/api/')
  await tron.deployed()
  console.log('Tron deployed to:', tron.address)

  const config = `export const tronAddress = '${tron.address}'`

  const data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))
  console.log('Config written.')
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
