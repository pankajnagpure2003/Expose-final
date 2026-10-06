import { useContext } from 'react'
import { WalletContext } from './walletContext.js'

export default function useWallet() {
  const context = useContext(WalletContext)
  if (!context) throw new Error('useWallet must be used inside WalletProvider')
  return context
}
