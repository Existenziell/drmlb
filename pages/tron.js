import { useQRCode } from 'react-qrcodes'
import Link from 'next/link'
import Head from 'next/head'
import Wallet from '../components/Wallet'

const Tron = () => {
  const transfer = () => {
    // console.log("Transfer")
  }

  const [qrRef] = useQRCode({
    text: 'https://webisora.com',
    options: {
      level: 'H',
      margin: 1,
      scale: 12,
      width: 256,
      color: {
        dark: '#152238',
        light: '#a6d1c9',
      }
    }
  })

  return (
    <>
      <Head>
        <title>Get Tron | drmlb.io</title>
      </Head>
      <Wallet />

      <div className='min-h-screen flex flex-col items-center'>
        <h1 className='text-4xl md:text-6xl'>Get TRON</h1>

        <p className='mt-4'>TRON is our community token and can be found in{' '}
          <Link href='https://mumbai.polygonscan.com/address/0xF9Fc1C74a1b707b2d88a9eA69238a6A6472073D0'>
            <a className='link inline' target='_blank' rel="noreferrer noopener">Polygonscan</a>
          </Link>
        </p>
        <canvas ref={qrRef} className='my-8' />
        <button className='button' onClick={transfer}>Drop!</button>
      </div>
    </>
  )
}

export default Tron
