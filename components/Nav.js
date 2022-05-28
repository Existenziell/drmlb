import { useRouter } from 'next/router'
import { useState } from 'react'

const Nav = () => {
    const paths = [
        { name: 'drm•lb', url: '/' },
        { name: 'TRON', url: '/mint' },
        { name: 'API', url: '/docs' },
        { name: 'About', url: '/about' },
        // { name: 'Team', url: '/team' },
        // { name: 'Connect', url: '/connect' },
    ]

    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const intercept = (e) => {
        e.preventDefault()
        setIsOpen(false)
        router.push(e.target.href)
    }

    return (
        <nav>
            {/* Mobile menu */}
            {isOpen &&
                <ul className='mobile-menu left-0 right-0 top-0 bottom-0 pt-20 z-10 text-brand-dark bg-brand dark:bg-brand-dark dark:text-gray-300 relative h-screen'>
                    {paths.map(path => (
                        <li key={path.name}>
                            <a
                                href={path.url}
                                onClick={intercept}
                                className={`${router.pathname === path.url && 'active-nav shadow-sm'} 
                                w-full block text-2xl md:text-4xl text-center leading-loose px-8 py-2 md:py-8 
                                hover:bg-brand-dark hover:text-brand dark:hover:bg-brand dark:hover:text-brand-dark transition-all`}>
                                {path.name}
                            </a>
                        </li>
                    ))}
                </ul>
            }

            {/* Mobile Hamburger Button */}
            <div className='absolute left-4 top-3 z-20'>
                <button className='mobile-menu-button outline-none' onClick={() => setIsOpen(!isOpen)} aria-label='Open Mobile Navigation'>
                    {!isOpen ?
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-12 w-12 text-brand-dark dark:text-brand hover:opacity-80' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
                            <path d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                        :
                        <svg xmlns='http://www.w3.org/2000/svg' className='absolute top-0 left-0 h-12 w-12 text-brand-dark hover:opacity-80 dark:text-brand' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    }
                </button>
            </div>

        </nav>
    )
}

export default Nav
