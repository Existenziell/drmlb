const { ethers } = require('hardhat')
const fs = require('fs')

async function main() {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying contract with account:', deployer.address)
  console.log('Account balance:', (await deployer.getBalance()).toString())

  // const E1ExclusiveNFT = await ethers.getContractFactory('E1ExclusiveNFT')
  // const e1ExclusiveNft = await E1ExclusiveNFT.deploy('E1 Exclusive NFT', 'E1ENFT', 'https://www.drmlb.io/api/exclusive/')
  // await e1ExclusiveNft.deployed()
  // console.log('E1ExclusiveNFT deployed to:', e1ExclusiveNft.address)

  const E1NFT = await ethers.getContractFactory('E1NFT')
  const e1Nft = await E1NFT.deploy('E1 NFT', 'E1NFT', 'https://www.drmlb.io/api/')
  await e1Nft.deployed()
  console.log('E1NFT deployed to:', e1Nft.address)

  // const E1CommunityToken = await ethers.getContractFactory('E1CommunityToken')
  // const e1Token = await E1CommunityToken.deploy('E1 Community Token', 'E1CT', 'https://www.drmlb.io/api/token/')
  // await e1Token.deployed()
  // console.log('E1CommunityToken deployed to:', e1Token.address)

  const config = `
export const e1NftAddress = '${e1Nft.address}'
  `
  // const config = `
  // export const e1ExclusiveNftAddress = '${e1ExclusiveNft.address}'
  // export const e1NftAddress = '${e1Nft.address}'
  // export const e1TokenAddress = '${e1Token.address}'
  // `

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
