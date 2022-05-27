import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Ticker from '../components/Ticker'
import PacmanLoader from 'react-spinners/PacmanLoader'

const Connect = () => {
  const [formData, setFormData] = useState()
  const [sending, setSending] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  function setData(e) {
    const { name, value } = e.target
    setFormData({ ...formData, ...{ [name]: value } })
  }

  const submitForm = async e => {
    e.preventDefault()
    setSending(true)

    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      res.ok ?
        setErrorMsg('That was successful, thank you!') && setIsSuccess(true)
        // Router.push('/success')
        :
        setErrorMsg(`Sorry, an error occured: ${res.statusText}`)
    } catch (error) {
      setErrorMsg('Sorry, an error occured. Have you tried turning it off and on again?')
    }
  }

  return (
    <>
      <Head>
        <title>About | drmlb.io</title>
      </Head>

      <div className='flex flex-col items-center px-4 md:px-8 lg:w-2/3 lg:mx-auto'>

        <h1 className='text-4xl md:text-6xl'>Meet the Team</h1>
        <p className='my-12 max-w-lg mx-auto text-justify'>drm&bull;lb consists of blockchain and Web3 enthusiasts with a combined 30 years plus of experience in Programming. We want to help you understand and leverage the possibilities of this emerging space.</p>

        <Ticker />

        <div className='shadow w-full bg-cover bg-no-repeat bg-poly rounded-lg text-left text-brand'>
          <form onSubmit={submitForm} className='px-4 pt-8 pb-0 sm:px-12 rounded'>

            <div className='relative mb-8'>
              <input id='name' name='name' type='text' onChange={setData} required disabled={sending || isSuccess} className='peer h-10 w-full placeholder-transparent focus:outline-none bg-black/10 backdrop-blur-md rounded pl-4' placeholder='Name' />
              <label htmlFor='name'
                className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-brand-dark peer-focus:text-sm'>Name</label>
            </div>
            <div className='relative mb-8'>
              <input id='email' type='email' name='email' onChange={setData} required disabled={sending || isSuccess} className='peer h-10 w-full placeholder-transparent focus:outline-none bg-black/10 backdrop-blur-md rounded pl-4' placeholder='Email' />
              <label htmlFor='email'
                className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-brand-dark peer-focus:text-sm'>Email</label>
            </div>
            <div className='relative'>
              <textarea id='message' name='message' onChange={setData} rows='10' required disabled={sending} className='peer h-full w-full placeholder-transparent focus:outline-none bg-black/10 backdrop-blur-md rounded pl-4 py-4' placeholder='Message'></textarea>
              <label htmlFor='message'
                className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-brand-dark peer-focus:text-sm'>Message</label>
            </div>

            {errorMsg ?
              <div className='text-left bg-brand-dark  text-brand -dark p-4 mb-8 mt-4'>
                {errorMsg}
              </div>
              :
              sending ?
                <div className='my-8 h-16 mr-16 opacity-60 mb-8 mt-4'>
                  <PacmanLoader color={'white'} size={30} />
                </div>
                :
                <input type='submit' className='button mb-8 mt-4' aria-label='Send Contact Form' value='Send'></input>
            }
          </form>
        </div>
      </div>
    </>
  )
}

export default Connect
