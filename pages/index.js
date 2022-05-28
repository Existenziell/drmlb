import Image from 'next/image'
import Ticker from '../components/Ticker'
import SVGs from '../components/SVGs'
import Trustness from '../components/Trustness'
import Link from 'next/link'
import Waitlist from '../components/Waitlist'

export default function Root() {
  return (
    <div className='flex flex-col items-center text-center min-h-screen'>

      <div className='flex items-center justify-between w-full h-full mb-16 px-8 md:px-16'>
        <div className='text-left flex flex-col h-64 content-between'>
          <div className='flex-grow'>
            <h1 className='text-8xl'>drm&bull;lb</h1>
            <h2>Web3 Technology SaaS Provider</h2>
          </div>
          <div className='flex gap-2 align-baseline'>
            <Link href='/mint'><a className='button block'>Get E1 Token</a></Link>
            <Link href='/docs'><a className='button block'>API Docs</a></Link>
          </div>
        </div>
        <div className='hidden md:block max-w-lg'>
          <img src='/icons/dragon.png' alt='Poly Dragon' />
        </div>
      </div>

      <Trustness />

      <section className='mt-16 mb-16 text-left grid md:grid-cols-2 gap-16 lg:gap-24 px-8 md:px-16'>
        <div>
          <div className='flex items-center space-x-2 mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-dark dark:text-brand" fill="currentColor" viewBox="0 0 512 512" stroke="none" strokeWidth="1">
              <path d="M440.8,216.4a39.3854,39.3854,0,0,0-7.2016.7283l-55.2019-95.6119A39.2352,39.2352,0,0,0,388,95.9586a39.5021,39.5021,0,0,0-76.768-13.2H200.768a39.4766,39.4766,0,1,0-67.1645,38.7578L78.4016,217.1283a39.6017,39.6017,0,1,0,0,77.7434l55.2019,95.6119A39.2467,39.2467,0,0,0,124,416.0414a39.5021,39.5021,0,0,0,76.768,13.2H311.232a39.4766,39.4766,0,1,0,67.1645-38.7578l55.2019-95.6119A39.5692,39.5692,0,1,0,440.8,216.4ZM348.4,376.4414a39.5378,39.5378,0,0,0-37.168,26.4H200.768A38.9366,38.9366,0,0,0,156.4027,377.17l-55.2041-95.6162a38.8052,38.8052,0,0,0,0-51.107l55.202-95.6162a38.9393,38.9393,0,0,0,44.3674-25.6717H311.232A38.9366,38.9366,0,0,0,355.5973,134.83l55.2041,95.6162a38.8052,38.8052,0,0,0,0,51.107L355.5994,377.17A39.3614,39.3614,0,0,0,348.4,376.4414Zm0-293.6828a13.2,13.2,0,1,1-13.2,13.2A13.2144,13.2144,0,0,1,348.4,82.7586Zm-184.8,0a13.2,13.2,0,1,1-13.2,13.2A13.2144,13.2144,0,0,1,163.6,82.7586ZM58,256a13.2,13.2,0,1,1,13.2,13.2A13.2144,13.2144,0,0,1,58,256ZM163.6,429.2414a13.2,13.2,0,1,1,13.2-13.2A13.2144,13.2144,0,0,1,163.6,429.2414Zm184.8,0a13.2,13.2,0,1,1,13.2-13.2A13.2144,13.2144,0,0,1,348.4,429.2414ZM440.8,269.2A13.2,13.2,0,1,1,454,256,13.2144,13.2144,0,0,1,440.8,269.2Z" /><path d="M256,137.2A118.8,118.8,0,1,0,374.8,256,118.93,118.93,0,0,0,256,137.2Zm0,211.2A92.4,92.4,0,1,1,348.4,256,92.5011,92.5011,0,0,1,256,348.4Z" /><path d="M256,225.2a30.5842,30.5842,0,0,1,24.6383,12.3234,13.2017,13.2017,0,1,0,21.1062-15.864A57.558,57.558,0,0,0,269.2,200.3641V194.4a13.2,13.2,0,0,0-26.4,0v5.9984a57.1311,57.1311,0,0,0,0,111.2032V317.6a13.2,13.2,0,0,0,26.4,0v-5.9641a57.569,57.569,0,0,0,32.5445-21.2953,13.2017,13.2017,0,1,0-21.1062-15.864A30.7986,30.7986,0,1,1,256,225.2Z" />
            </svg>
            <h1 className='text-4xl'>DAOs</h1>
          </div>
          <p>Build your Decentralized Autonomous Organization on drm&bull;lb infrastructure including governance and consensus solution plugins. We help you determine if a DAO is the right choice for your project, and find the right tools and resources needed to build a long-lasting organization.</p>
        </div>

        <div>
          <div className='flex items-center space-x-2 mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-dark dark:text-brand" fill="currentColor" viewBox="0 0 512 512" stroke="none" strokeWidth="1">
              <path d="M473.8,336.951c-.0258-.0151-.0559-.0194-.0816-.0344L411.7961,301.173V210.8119L473.7914,175.01a13.1951,13.1951,0,0,0,6.6-11.43l.0086-79.2a13.1949,13.1949,0,0,0-6.6-11.43c-.0258-.0151-.0559-.0194-.0816-.0344L405.2047,33.3682a13.2158,13.2158,0,0,0-13.2,0L323.4008,72.96a13.1947,13.1947,0,0,0-6.6,11.43c0,.0451.0172.0859.0172.1289l.0021,15.6836H195.1885l.0021-15.8125h0v-.0086a13.1947,13.1947,0,0,0-6.6-11.43c-.0172-.0086-.0343-.0129-.0515-.0215L119.9953,33.3682a13.2158,13.2158,0,0,0-13.2,0L38.2,72.96a13.1949,13.1949,0,0,0-6.6,11.43c0,.0451.0172.0859.0172.1289v79.0711a13.1948,13.1948,0,0,0,6.6,11.43l61.9867,35.7973V301.173L38.2,336.96a13.1949,13.1949,0,0,0-6.6,11.43c0,.0451.0172.0859.0172.1289v79.0711a13.1948,13.1948,0,0,0,6.6,11.43l68.5867,39.6086a13.1875,13.1875,0,0,0,13.2,0c.0172-.0086.0279-.0257.0451-.0343L188.582,439.01a13.1949,13.1949,0,0,0,6.6-11.43l.0022-15.7782h121.64l.0022,15.7868a13.1946,13.1946,0,0,0,6.6,11.43l68.5867,39.6086a13.1875,13.1875,0,0,0,13.2,0c.0258-.015.0451-.0386.0709-.0558L473.7914,439.01a13.1951,13.1951,0,0,0,6.6-11.43l.0086-79.2A13.1949,13.1949,0,0,0,473.8,336.951ZM352.2586,112.4758l33.1461,19.1361v48.7137l-42.1781-24.359-.0086-48.7094Zm46.3461,211.5588,42.1867,24.3547-2.7285,1.5748-39.4582,22.78-27.3561-15.791-14.8371-8.5658ZM453.9914,155.958l-42.18,24.359-.0064-48.7051L454,107.2486ZM398.6047,60.0346l42.1867,24.3547-2.7285,1.5748-39.4582,22.78-27.3561-15.791-14.8371-8.5658ZM135.2836,360.1111l-21.88,12.6328-27.356-15.791-14.8372-8.5658,42.1846-24.3525,42.191,24.3525Zm-8.68-228.4992,25.9553-14.99,16.2314-9.3715-.0086,48.7072-42.1781,24.3633ZM113.3953,60.0346l42.191,24.3525-20.3027,11.724-21.88,12.6328-27.356-15.791L71.2107,84.3871ZM58.0172,107.2572,90.826,126.1957l9.3779,5.4162V180.33L58.0172,155.9666Zm0,264L90.826,390.1957l9.3779,5.4162V444.33L58.0172,419.9666Zm68.5867,73.0641V395.6119l25.9553-14.99,16.2314-9.3715-.0086,48.7072Zm68.5824-58.9188.0043-37.0132h0v-.0086a13.1947,13.1947,0,0,0-6.6-11.43c-.0172-.0086-.0343-.0129-.0515-.0215l-61.9352-35.7457V210.8076L188.582,175.01a13.1949,13.1949,0,0,0,6.6-11.43l.0043-36.9789h121.636l.0043,36.9875a13.1946,13.1946,0,0,0,6.6,11.43l61.9695,35.7866v90.3761L323.4008,336.96a13.1947,13.1947,0,0,0-6.6,11.43c0,.0451.0172.0859.0172.1289l.0043,36.8843Zm148.036,13.2387c0-.0129.0043-.0258.0043-.0387s-.0043-.0257-.0043-.0386l-.0043-27.3067,9.0406,5.2186,33.1461,19.1361v48.7137l-42.1781-24.359ZM453.9914,419.958l-42.18,24.359-.0064-48.7051L454,371.2486Z" />
            </svg>
            <h1 className='text-4xl'>Accessibility</h1>
          </div>
          <p>Full blockchain accessibility through the drm&bull;lb API - web3 is for everyone! Powerful solutions to realize complex blockchain projects. We support you with both small and large scale projects</p>
        </div>

        <div>
          <div className='flex items-center space-x-2 mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-dark dark:text-brand" fill="currentColor" viewBox="0 0 512 512" stroke="none" strokeWidth="1">
              <path d="M440.8,216.4a39.4271,39.4271,0,0,0-7.2037.7283l-55.2-95.6119A39.2467,39.2467,0,0,0,388,95.9586a39.5021,39.5021,0,0,0-76.768-13.2H200.768a39.4766,39.4766,0,1,0-67.1645,38.7578L120.81,143.6775a109.8947,109.8947,0,0,0-34.0785,59.0262l-8.3295,14.4246a39.6017,39.6017,0,1,0,0,77.7434l55.2019,95.6119A39.2467,39.2467,0,0,0,124,416.0414a39.5021,39.5021,0,0,0,76.768,13.2H311.232a39.4762,39.4762,0,1,0,67.1623-38.7578l5.44-9.4231a83.5335,83.5335,0,0,0,34.56-59.8554l15.2045-26.3334A39.5692,39.5692,0,1,0,440.8,216.4ZM311.232,402.8414H200.768a38.9421,38.9421,0,0,0-44.37-25.6717l-49.1-85.0459a109.3751,109.3751,0,0,0,144.5856,26.6836,83.6483,83.6483,0,0,0,63.4691,75.5133A39.47,39.47,0,0,0,311.232,402.8414ZM348.4,135.5586a39.3386,39.3386,0,0,0,7.1973-.7283l55.2041,95.6162a38.0348,38.0348,0,0,0-8.8924,32.5789A83.43,83.43,0,0,0,335.2,229.6a82.25,82.25,0,0,0-31.3414,6.3121c.3416-3.5277.5414-7.0963.5414-10.7121,0-59.473-47.474-107.9525-106.5-109.8238a39.1653,39.1653,0,0,0,2.8682-6.2176H311.232A39.5378,39.5378,0,0,0,348.4,135.5586ZM335.2,370.4a57.1485,57.1485,0,0,1-52.4627-79.93,110.055,110.055,0,0,0,9.1695-14.5449A57.1707,57.1707,0,1,1,335.2,370.4ZM194.4,141.6a83.6,83.6,0,1,1-83.6,83.6A83.6951,83.6951,0,0,1,194.4,141.6Zm154-58.8414a13.2,13.2,0,1,1-13.2,13.2A13.2144,13.2144,0,0,1,348.4,82.7586Zm-184.8,0a13.2,13.2,0,1,1-13.2,13.2A13.2144,13.2144,0,0,1,163.6,82.7586ZM58,256a13.2,13.2,0,1,1,13.2,13.2A13.2144,13.2144,0,0,1,58,256ZM163.6,429.2414a13.2,13.2,0,1,1,13.2-13.2A13.2144,13.2144,0,0,1,163.6,429.2414Zm184.8,0a13.2,13.2,0,1,1,13.2-13.2A13.2144,13.2144,0,0,1,348.4,429.2414ZM440.8,269.2A13.2,13.2,0,1,1,454,256,13.2144,13.2144,0,0,1,440.8,269.2Z" /><path d="M383.6,313.2086a13.1949,13.1949,0,0,0-6.6-11.43l-52.8-30.4906a13.2,13.2,0,0,0-19.8,11.43v60.9726a13.1975,13.1975,0,0,0,19.8,11.43l52.8-30.482A13.1949,13.1949,0,0,0,383.6,313.2086Zm-52.8,7.6226V305.5859l13.2,7.6227Z" /><path d="M144.8656,253.8a13.1941,13.1941,0,0,0,18.03,4.83L181.2,248.0615V269.2a13.2,13.2,0,1,0,26.4,0V248.0615L225.9047,258.63a13.1984,13.1984,0,0,0,13.2-22.8594l-18.309-10.57,18.309-10.57a13.1984,13.1984,0,1,0-13.2-22.8594L207.6,202.3385V181.2a13.2,13.2,0,1,0-26.4,0v21.1385L162.8953,191.77a13.1984,13.1984,0,0,0-13.2,22.8594l18.309,10.57-18.309,10.57A13.1949,13.1949,0,0,0,144.8656,253.8Z" />
            </svg>
            <h1 className='text-4xl'>Metaverse</h1>
          </div>
          <p>Marketing is different in the metaverse. We can help you unlock new opportunities and markets by taking your brand into the brave new world.</p>
        </div>

        <div>
          <div className='flex items-center space-x-2 mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-dark dark:text-brand" fill="currentColor" viewBox="0 0 512 512" stroke="none" strokeWidth="1">
              <path d="M445.5008,138.9682,262.6,33.3682a13.2158,13.2158,0,0,0-13.2,0l-182.9008,105.6a13.1949,13.1949,0,0,0-6.6,11.43v211.2a13.1948,13.1948,0,0,0,6.6,11.43L249.4,478.6275a13.1875,13.1875,0,0,0,13.2,0l182.9008-105.6a13.1948,13.1948,0,0,0,6.6-11.43v-211.2A13.1949,13.1949,0,0,0,445.5008,138.9682Zm-19.8,215.007L256,451.9525,86.2992,353.9752V158.0205L256,60.0432l169.7008,97.9773Z" /><path d="M319.1727,147.3127l27.964,16.1455V356.1494a13.2,13.2,0,1,0,26.4,0V178.7014l14.7727,8.5293a13.1984,13.1984,0,0,0,13.2-22.8594l-69.1367-39.918a13.1984,13.1984,0,0,0-13.2,22.8594Z" /><path d="M249.4,84.1744l-34.5641,19.9547a13.1949,13.1949,0,0,0-6.6,11.43V396.4283a13.2,13.2,0,1,0,26.4,0v-127.23h60.3368a13.2,13.2,0,1,0,0-26.4H234.6359V123.1814L256,110.8494l32.3727,18.6828a13.1984,13.1984,0,0,0,13.2-22.8593L262.6,84.1744A13.2158,13.2158,0,0,0,249.4,84.1744Z" /><path d="M177.4359,127.7705a13.2034,13.2034,0,0,0-13.2,13.2V283.6182L129.7148,171.8994a13.2028,13.2028,0,0,0-25.8156,3.9016V336.1947a13.2,13.2,0,0,0,26.4,0V263.2166L164.82,374.9354a13.2115,13.2115,0,0,0,12.607,9.2984,14.0043,14.0043,0,0,0,1.9766-.1461,13.2006,13.2006,0,0,0,11.232-13.0539V140.9705A13.2034,13.2034,0,0,0,177.4359,127.7705Z" />
            </svg>
            <h1 className='text-4xl'>NFT Projects</h1>
          </div>
          <p>drm&bull;lb pioneers NFT technology in areas like ticketing and asset tokenization. Create brand new channels to connect with your community through real digital programmable and provable scarcity.</p>
        </div>
      </section>

      <Waitlist />

    </div>
  )
}
