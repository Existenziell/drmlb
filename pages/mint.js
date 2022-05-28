import Link from 'next/link'
import Head from 'next/head'
import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import detectEthereumProvider from '@metamask/detect-provider'
import getContractInfo from '../lib/getContractInfo'
import Tron from '../artifacts/contracts/Tron.sol/Tron.json'
import { tronAddress } from '../config'
import Specs from '../components/Specs'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import Wallet from '../components/Wallet'

const Mint = () => {
  const [loading, setLoading] = useState(true)
  const [contractInfo, setContractInfo] = useState({})
  const [mintAmount, setMintAmount] = useState(1)
  const [walletConnected, setWalletConnected] = useState(false)
  const [userAddress, setUserAddress] = useState('')
  const [provider, setProvider] = useState()
  const [isCorrectChain, setIsCorrectChain] = useState(false)

  const [minting, setMinting] = useState(false)
  const [mintingSuccess, setMintingSuccess] = useState(false)
  const [txHash, setTxHash] = useState('')
  const [feedback, setFeedback] = useState('')
  const [networkInfo, setNetworkInfo] = useState('')

  const chainId = 4 // (Local:1337 | Mumbai: 80001 | Rinkeby: 4)
  const router = useRouter()

  useEffect(() => {
    async function init() {
      const info = await getContractInfo()
      setContractInfo(info)
      setLoading(false)
    }
    init()
  }, [getContractInfo])

  const addCustomTokens = async () => {
    const tokenAddress = tronAddress;
    const tokenSymbol = 'AMP';
    const tokenDecimals = 0.1;
    const tokenImage = 'https://www.drmlb.io/tron/token.png';

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      })

      if (wasAdded) {
        console.log('Thanks for your interest!')
      } else {
        console.log('Your loss!')
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function mint() {
    setMinting(true)
    // Provider is read-only, get a signer for on-chain transactions
    const signer = provider.getSigner()
    // Since the third argument is signer, the contract data can be manipulated
    const contract = new ethers.Contract(tronAddress, Tron.abi, signer)
    // const address = await signer.getAddress()
    const transaction = await contract.mint(mintAmount)

    await transaction.wait()
      .then((receipt) => {
        setMintingSuccess(true)
        setMinting(false)
        setFeedback('Congratulations, you are now the owner of your very own Tron NFT!')
        setTxHash(receipt.transactionHash)
      })
  }

  const checkMintAmount = (amount) => {
    if (amount >= 1 && amount <= 20) {
      setMintAmount(amount)
    }
  }

  if (loading) {
    return (
      <div className='flex flex-col items-center pt-32 bg-brand dark:bg-brand-dark h-screen'>
        <ClimbingBoxLoader color={'white'} size={30} />
        <p className='font-mono text-base relative top-24 left-6 text-white'>Connecting to the blockchain...</p>
      </div>
    )
  }

  if (!loading && contractInfo) {
    const { cost, maxSupply, maxMintAmount } = contractInfo

    return (
      <>
        <Head>
          <title>Get Tron | drmlb.io</title>
        </Head>
        <Wallet
          walletConnected={walletConnected}
          setWalletConnected={setWalletConnected}
          setUserAddress={setUserAddress}
          setProvider={setProvider}
          setNetworkInfo={setNetworkInfo}
          isCorrectChain={isCorrectChain}
          setIsCorrectChain={setIsCorrectChain}
        />

        <div className='flex flex-col md:flex-row justify-center w-full min-h-screen'>

          {(!mintingSuccess && !minting) &&
            <div>
              <h1 className='text-4xl md:text-6xl'>Get TRON</h1>

              <p className='mt-4'>TRON is our community token and can be found on{' '}
                <Link href={`https://rinkeby.etherscan.io/address/${tronAddress}#code`}>
                  <a className='link inline' target='_blank' rel="noreferrer noopener">Etherscan</a>
                </Link>
              </p>
              <p className='mb-12'>We currently operate on the Rinkeby testchain, get free ETH{` `}
                <Link href='https://faucet.rinkeby.io/'>
                  <a className='link inline' target='_blank' rel="noreferrer noopener">here</a>
                </Link>.
              </p>

              <video src='/tron/animation.mp4' controls={false} loop={true} autoPlay={true} muted className='max-w-xs mx-auto mb-8 rounded shadow' />

              {walletConnected && isCorrectChain &&
                <section className='flex flex-col md:flex-row items-center justify-center text-xl p-8'>

                  {/* <p className='absolute top-16 right-4 text-sm'>Connected to wallet: {userAddress}</p> */}

                  <p className='md:mr-4'>Tron Token{' '}</p>
                  <div className='inline-flex flex-col items-center justify-center'>
                    <svg onClick={() => checkMintAmount(mintAmount + 1)} xmlns='http://www.w3.org/2000/svg' className='h-12 w-12 cursor-pointer text-brand-dark dark:text-brand' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
                    </svg>
                    <input type='number' min='1' max={maxMintAmount} value={mintAmount} readOnly onChange={() => { }} className='pl-4 text-4xl text-center text-brand-dark bg-brand dark:text-brand dark:bg-brand-dark' />
                    <svg onClick={() => checkMintAmount(mintAmount - 1)} xmlns='http://www.w3.org/2000/svg' className='h-12 w-12 cursor-pointer text-brand-dark dark:text-brand' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                    </svg>
                  </div>

                  {/* <span className='text-center md:text-left md:ml-8 w-32'>Tron NFT{mintAmount > 1 ? `s` : null}</span> */}

                  <button className='mt-4 md:ml-4 md:mt-0 button flex items-center' onClick={mint}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 mr-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'></path>
                    </svg>
                    <span className='whitespace-nowrap'>Mint</span>
                  </button>

                  <p className='text-sm md:ml-8 mt-4 md:mt-0'>
                    <span className='font-bold block'>Cost:</span>
                    {(mintAmount * ethers.utils.formatEther(cost)).toFixed(6)} ETH<br />+ gas fee.
                  </p>
                </section>
              }

              {networkInfo &&
                <div className='flex flex-col'>
                  <div className='flex items-center justify-center mb-4 gap-4'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-12 w-12' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' />
                    </svg>
                    <p className='font-mono text-center'>{networkInfo}</p>
                  </div>
                </div>
              }

              <div>
                <h2>Tokens minted: </h2>
                <p>{contractInfo.totalSupply.toNumber()}</p>
              </div>
            </div>
          }

          {minting &&
            <div className='flex flex-col items-center justify-center mb-8 flex-grow'>
              <ClimbingBoxLoader color={'white'} loading={minting} size={40} />
              <p className='mt-20 font-mono text-center text-lg'>Minting in progress...<br />Waiting for Network confirmation.</p>
              <p className='font-mono'>{networkInfo}</p>
            </div>
          }

          {mintingSuccess &&
            <div className='text-center font-mono text-sm mt-16'>
              <p className='text-brand-dark dark:text-brand text-2xl max-w-lg mx-auto'>{feedback}</p>
              <p className='my-8'>Transaction hash: (click to verify)<br /><a href={`https://rinkeby.etherscan.io/tx/${txHash}`} target='_blank' rel='noopener noreferrer' className='link'>{txHash}</a></p>
              <div className='flex flex-col items-center justify-center gap-2 mt-4' >
                <button className='button' onClick={addCustomTokens}>Add to MetaMask</button>
                <button onClick={() => setMintingSuccess(false)} className='button block'>Mint More</button>
              </div>
            </div>
          }
        </div>
      </>
    )
  }
}

export default Mint
