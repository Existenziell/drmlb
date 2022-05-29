import { ethers } from 'ethers'
import { e1contractAddress } from '../config'
import E1Contract from '../artifacts/contracts/E1CommunityToken.sol/E1CommunityToken.json'

async function getContractInfo() {
  // local:
  // const provider = new ethers.providers.JsonRpcProvider()

  // const moralisId = process.env.NEXT_PUBLIC_MORALIS_ID
  // const nodeUrl = `https://speedy-nodes-nyc.moralis.io/661d2cac001d8e6c33d63f3a/polygon/mumbai`
  // const nodeUrl = `https://speedy-nodes-nyc.moralis.io/${moralisId}/eth/ropsten`
  const nodeUrl = `https://speedy-nodes-nyc.moralis.io/661d2cac001d8e6c33d63f3a/eth/rinkeby`
  const provider = new ethers.providers.JsonRpcProvider(nodeUrl)

  // If the third argument is provider, the contract is read-only
  const contract = new ethers.Contract(e1contractAddress, E1Contract.abi, provider)

  const [totalSupply, cost, maxSupply, maxMintAmount] =
    await Promise.all([
      contract.totalSupply(),
      // contract.baseURI(),
      contract.cost(),
      contract.maxSupply(),
      contract.maxMintAmount(),
    ])

  const info = {
    address: contract.address,
    totalSupply,
    // baseUri: baseURI,
    cost,
    maxSupply,
    maxMintAmount,
  }

  return info
}

export default getContractInfo
