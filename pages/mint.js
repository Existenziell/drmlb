import { ethers } from 'ethers'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import detectEthereumProvider from '@metamask/detect-provider'
import getContractInfo from '../lib/getContractInfo'
import Tron from '../artifacts/contracts/Tron.sol/Tron.json'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import Wallet from '../components/Wallet'
import { addCustomToken } from '../lib/addCustomToken'
import { AppContext } from '../context/AppContext'
import { tronAddress } from '../config'

const Mint = () => {
  const appCtx = useContext(AppContext)
  const {
    walletConnected, setWalletConnected,
    walletAddress, setWalletAddress,
    provider, setProvider,
    isCorrectChain, setIsCorrectChain,
    feedback, setFeedback,
    networkInfo, setNetworkInfo
  } = appCtx

  const [contractInfo, setContractInfo] = useState({})
  const [mintAmount, setMintAmount] = useState(1)
  const [loading, setLoading] = useState(true)
  const [minting, setMinting] = useState(false)
  const [mintingSuccess, setMintingSuccess] = useState(false)
  const [txHash, setTxHash] = useState('')

  const chainId = 4 // (Local:1337 | Mumbai: 80001 | Rinkeby: 4)
  const router = useRouter()

  useEffect(() => {
    async function init() {
      const info = await getContractInfo()
      setContractInfo(info)
      setLoading(false)
    }
    init()
  }, [])

  async function mint() {
    setMinting(true)
    // Provider is read-only, get a signer for on-chain transactions
    const signer = provider.getSigner()
    // Since the third argument is signer, the contract data can be manipulated
    const contract = new ethers.Contract(tronAddress, Tron.abi, signer)

    try {
      const transaction = await contract.mint(mintAmount)
      await transaction.wait()
        .then((receipt) => {
          setMintingSuccess(true)
          setMinting(false)
          setFeedback('Congratulations, you are now the owner of your very own E1 Token(s)!')
          setTxHash(receipt.transactionHash)
        })
    } catch (error) {
      // Catch if user rejects transaction
      setNetworkInfo(error.message)
      setMinting(false)
    }
  }

  const checkMintAmount = (amount) => {
    if (amount >= 1 && amount <= 20) {
      setMintAmount(amount)
    }
  }

  if (loading) {
    return (
      <div className='flex flex-col items-center pt-32 bg-brand dark:bg-brand-dark min-h-screen'>
        <div className='hidden dark:block'>
          <ClimbingBoxLoader color={'var(--color-brand)'} size={30} />
        </div>
        <div className='block dark:hidden'>
          <ClimbingBoxLoader color={'var(--color-brand-dark)'} size={30} />
        </div>
        <p className='font-mono text-base relative top-24 left-6 text-brand-dark dark:text-brand'>Connecting to the blockchain...</p>
      </div>
    )
  }

  if (!loading && contractInfo) {
    const { cost, maxSupply, maxMintAmount } = contractInfo

    return (
      <>
        <Head>
          <title>Get E1 Community Token | drmlb.io</title>
        </Head>

        <Wallet />

        <div className='flex flex-col md:flex-row justify-center w-full min-h-screen'>

          {(!mintingSuccess && !minting) &&
            <div>
              <h1 className='text-4xl md:text-6xl'>E1 Community Token</h1>

              <p className='mt-4'>Our E1 Community Token can be found on{' '}
                <Link href={`https://rinkeby.etherscan.io/address/${tronAddress}#code`}>
                  <a className='link inline' target='_blank' rel="noreferrer noopener">Etherscan</a>
                </Link>
              </p>
              <p className='mb-12'>We currently operate on the Rinkeby testchain, get free ETH{` `}
                <Link href='https://faucet.rinkeby.io/'>
                  <a className='link inline' target='_blank' rel="noreferrer noopener">on this faucet</a>
                </Link>.
              </p>

              <video src='/tron/animation.mp4' controls={false} loop={true} autoPlay={true} muted className='max-w-xs mx-auto mb-8 rounded shadow' />

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

              {walletConnected && isCorrectChain &&
                <section className='flex flex-col md:flex-row items-center justify-center text-xl p-8'>

                  <p className='md:mr-4'>E1 Token{' '}</p>
                  <div className='inline-flex flex-col items-center justify-center'>
                    <svg onClick={() => checkMintAmount(mintAmount + 1)} xmlns='http://www.w3.org/2000/svg' className='h-12 w-12 cursor-pointer text-brand-dark dark:text-brand' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
                    </svg>
                    <label htmlFor='mintAmount'>
                      <input type='number' name='mintAmount' id='mintAmount' readOnly
                        min='1'
                        max={maxMintAmount}
                        value={mintAmount}
                        onChange={() => { }}
                        className='pl-4 text-4xl text-center text-brand-dark bg-brand dark:text-brand dark:bg-brand-dark'
                      />
                    </label>
                    <svg onClick={() => checkMintAmount(mintAmount - 1)} xmlns='http://www.w3.org/2000/svg' className='h-12 w-12 cursor-pointer text-brand-dark dark:text-brand' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                    </svg>
                  </div>

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
            </div>
          }

          {mintingSuccess &&
            <div className='text-center font-mono flex flex-col items-center text-sm mt-4'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mb-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className='text-brand-dark dark:text-brand text-2xl max-w-lg'>{feedback}</p>
              <p className='my-8'>Transaction hash: (click to verify)<br /><a href={`https://rinkeby.etherscan.io/tx/${txHash}`} target='_blank' rel='noopener noreferrer' className='link'>{txHash}</a></p>
              <div className='flex flex-col items-center justify-center gap-2 mt-4' >
                <button className='button' onClick={addCustomToken}>Add to MetaMask</button>
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
