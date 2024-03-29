import { e1contractAddress } from '../config'

export const addCustomToken = async () => {
  const tokenAddress = e1contractAddress;
  const tokenSymbol = 'E1NFT';
  const tokenDecimals = 0.1;
  const tokenImage = 'https://www.drmlb.io/e1/token.png';

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
