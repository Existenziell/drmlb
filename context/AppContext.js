import { useState } from "react"
import { createContext, useContext, useEffect } from 'react'

const AppContext = createContext({})

const AppWrapper = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState('')
  const [walletConnected, setWalletConnected] = useState(false)
  const [isCorrectChain, setIsCorrectChain] = useState(false)
  const [provider, setProvider] = useState()
  const [feedback, setFeedback] = useState('')
  const [networkInfo, setNetworkInfo] = useState('')

  const [loading, setLoading] = useState(false)
  const [notificationMsg, setNotificationMsg] = useState('')

  useEffect(() => {

  }, [])

  let app = {
    walletAddress,
    walletConnected,
    isCorrectChain,
    provider,
    feedback,
    networkInfo,
    loading,
    notificationMsg,
    setWalletAddress,
    setWalletConnected,
    setIsCorrectChain,
    setProvider,
    setFeedback,
    setNetworkInfo,
    setLoading,
    setNotificationMsg
  }

  return (
    <AppContext.Provider value={app}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppWrapper, useAppContext }
