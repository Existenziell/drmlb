import { useEffect } from 'react'

const Ticker = () => {
  const tickerTexts = [
    '...',
    'NFTs',
    'Smart Contracts',
    'DeFi, DAOs',
    'Programmable Blockchains',
    'The decentralized web is here.',
    'We build tools to maximize your vision!',
  ]

  let part = 0
  let partIndex = 0
  let interval

  useEffect(() => {
    const element = document.querySelector('#text')
    const cursor = document.querySelector('#cursor')

    const typeChar = () => {
      // Get substring with 1 characater added
      const text = tickerTexts[part].substring(0, partIndex + 1)
      element.innerHTML = text
      partIndex++

      // If full sentence has been displayed then start to delete the sentence after some time
      if (text === tickerTexts[part]) {
        clearInterval(interval)
        setTimeout(() => {
          interval = setInterval(deleteChar, 30)
        }, 1000)
      }
    }

    const deleteChar = () => {
      // Get substring with 1 characater deleted
      const text = tickerTexts[part].substring(0, partIndex - 1)
      element.innerHTML = text
      partIndex--

      // If sentence has been deleted then start to display the next sentence
      if (text === '') {
        clearInterval(interval)

        // If current sentence was last then display the first one, else move to the next
        if (part === (tickerTexts.length - 1)) {
          part = 0
        } else {
          part++
        }
        partIndex = 0

        // Start to display the next sentence after some time
        setTimeout(() => {
          cursor.style.display = 'inline-block'
          interval = setInterval(typeChar, 100)
        }, 200)
      }
    }

    // Start the typing effect on load
    interval = setInterval(typeChar, 100)
  }, [])

  return (
    <div className='text-center mb-16 h-16'>
      <div id='text' className='text-2xl md:text-4xl text-brand-dark dark:text-brand inline-block align-middle'></div>
      <div id='cursor' className=' inline-block align-middle w-0.5 h-8 bg-brand'></div>
    </div>
  )
}

export default Ticker
