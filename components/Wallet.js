
import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { ethers } from 'ethers'
import { hasEthereum } from '../lib/ethereum'
import { ConnectWallet } from './ConnectWallet'
import { AppContext } from '../context/AppContext'
import { chains } from '../lib/chains'

const Wallet = () => {
  const appCtx = useContext(AppContext)
  const {
    walletConnected, setWalletConnected,
    walletAddress, setWalletAddress,
    provider, setProvider,
    isCorrectChain, setIsCorrectChain,
    feedback, setFeedback,
    networkInfo, setNetworkInfo
  } = appCtx

  const router = useRouter()
  const chainId = 4 // (Local:1337 | Mumbai: 80001 | Rinkeby: 4)

  useEffect(() => {
    const getNameFromChainId = (chainId) => {
      if (chainId === 1337) return 'Local (1337)'
      const network = chains.filter(c => (c.chainId === chainId))
      return network[0].name
    }

    async function setAddress() {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const userNetwork = await provider.getNetwork()
      const signer = provider.getSigner()
      const networkName = getNameFromChainId(userNetwork.chainId)

      if (userNetwork.chainId === chainId) {
        setIsCorrectChain(true)
        setProvider(provider)
        // set
      } else {
        setNetworkInfo(`Connected to ${networkName}. Please change network to Rinkeby in Metamask.`)
        setIsCorrectChain(false)
      }

      try {
        const signerAddress = await signer.getAddress()
        setWalletAddress(signerAddress)
        setWalletConnected(true)
      } catch {
        setWalletConnected(false)
        setWalletAddress('')
      }
    }

    if (hasEthereum()) setAddress()

    window.ethereum?.on('connect', (accounts) => {
      // console.log('Connected:', accounts, getNameFromChainId(parseInt(accounts.chainId, 16)))
      router.reload(window.location.pathname)
    })

    window.ethereum?.on('accountsChanged', (accounts) => {
      // console.log('accountsChanged', accounts)
      router.reload(window.location.pathname)
    })

    window.ethereum?.on('chainChanged', (chainId) => {
      // console.log('Chain changed:', getNameFromChainId(parseInt(chainId, 16)))
      router.reload(window.location.pathname)
    })
  }, [walletAddress])

  return (
    <div className='absolute top-4 right-20 text-right'>
      {walletConnected ?
        <div className='dark:text-brand'>
          {walletAddress.substring(0, 5)}&#8230;{walletAddress.slice(walletAddress.length - 4)}
        </div>
        :
        hasEthereum() ?
          <ConnectWallet />
          :
          <a href='https://metamask.io/download/' target='_blank' rel="noreferrer noopener">Install MetaMask</a>
      }
    </div>
  )
}

export default Wallet
