import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { bsc, bscTestnet } from '@reown/appkit/networks'
import { NETWORK, REOWN_PROJECT_ID } from './config.js'

const METAMASK_WALLET_ID = 'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96'

const baseNetwork = NETWORK.chainId === 56 ? bsc : bscTestnet

export const appNetwork = {
  ...baseNetwork,
  rpcUrls: { ...baseNetwork.rpcUrls, default: { http: [NETWORK.rpcUrl] } },
}

createAppKit({
  adapters: [new EthersAdapter()],
  networks: [appNetwork],
  defaultNetwork: appNetwork,
  projectId: REOWN_PROJECT_ID,
  metadata: {
    name: 'EXPOSE',
    description: 'EXPOSE token presale',
    url: window.location.origin,
    icons: [`${window.location.origin}/assets/expose-logo.png`],
  },
  featuredWalletIds: [METAMASK_WALLET_ID],
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#9b4dff',
  },
  features: {
    analytics: true,
    email: false,
    socials: false,
    swaps: false,
    onramp: false,
  },
})
