const { ethers } = require('hardhat')
const fs = require('fs')

async function main() {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying contract with account:', deployer.address)
  console.log('Account balance:', (await deployer.getBalance()).toString())

  const E1CommunityToken = await ethers.getContractFactory('E1CommunityToken')
  const e1 = await E1CommunityToken.deploy('E1CommunityToken', 'E1NFT', 'https://www.drmlb.io/api/')
  await e1.deployed()
  console.log('E1CommunityToken deployed to:', e1.address)

  const config = `export const e1contractAddress = '${e1.address}'`

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
