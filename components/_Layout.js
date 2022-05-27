import NextNprogress from 'nextjs-progressbar'
import Footer from './Footer'
import Nav from './Nav'
import DarkModeToggle from './DarkModeToggle'
import Wallet from './Wallet'
import Trustness from './Trustness'

const Layout = ({ children }) => {
  return (
    <>
      <NextNprogress startPosition={0.3} stopDelayMs={100} height={3} showOnShallow={true} color='var(--color-brand)' />

      <Nav />
      <DarkModeToggle />
      {/* <Wallet /> */}

      <main className='w-full py-24 text-center text-brand-dark bg-brand dark:bg-brand-dark dark:text-brand'>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout
