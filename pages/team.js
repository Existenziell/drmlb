import Link from 'next/link'
import Head from 'next/head'
import Ticker from '../components/Ticker'

const Team = () => {

  return (
    <>
      <Head>
        <title>Team | drmlb.io</title>
      </Head>

      <div className='min-h-screen text-left px-8 md:px-16'>
        <h1 className='text-4xl md:text-6xl'>Meet the Team</h1>
        <p className='mt-8'>drm&bull;lb consists of blockchain and Web3 enthusiasts with a combined 30 years plus of experience in Programming. We want to help you understand and leverage the possibilities of this emerging space.</p>
        <Link href='/connect'><a className='link mt-4 mb-16 inline-block'>Connect with us</a></Link> to explore further options.
        <Ticker />
      </div>
    </>
  )
}

export default Team
