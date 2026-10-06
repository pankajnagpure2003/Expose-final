import { isAddress } from 'ethers'

const env = import.meta.env

const NETWORKS = {
  mainnet: {
    key: 'mainnet',
    chainId: 56,
    hexChainId: '0x38',
    name: 'BNB Smart Chain',
    shortName: 'BSC',
    rpcUrl: 'https://bsc-dataseed.bnbchain.org',
    explorer: 'https://bscscan.com',
    currency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    presaleEnvKey: 'VITE_MAINNET_PRESALE_ADDRESS',
    presaleAddress: env.VITE_MAINNET_PRESALE_ADDRESS,
    tokenAddress: env.VITE_MAINNET_TOKEN_ADDRESS,
    customRpcUrl: env.VITE_MAINNET_RPC_URL,
  },
  testnet: {
    key: 'testnet',
    chainId: 97,
    hexChainId: '0x61',
    name: 'BNB Smart Chain Testnet',
    shortName: 'BSC Testnet',
    rpcUrl: 'https://data-seed-prebsc-1-s1.bnbchain.org:8545',
    explorer: 'https://testnet.bscscan.com',
    currency: { name: 'tBNB', symbol: 'tBNB', decimals: 18 },
    presaleEnvKey: 'VITE_TESTNET_PRESALE_ADDRESS',
    presaleAddress: env.VITE_TESTNET_PRESALE_ADDRESS,
    tokenAddress: env.VITE_TESTNET_TOKEN_ADDRESS,
    customRpcUrl: env.VITE_TESTNET_RPC_URL,
  },
}

const requestedNetwork = (env.VITE_NETWORK || 'testnet').trim().toLowerCase()

if (!NETWORKS[requestedNetwork]) {
  console.warn(`Unsupported VITE_NETWORK "${env.VITE_NETWORK}". Use "testnet" or "mainnet". Falling back to testnet.`)
}

const selected = NETWORKS[requestedNetwork] || NETWORKS.testnet

export const NETWORK = {
  key: selected.key,
  chainId: selected.chainId,
  hexChainId: selected.hexChainId,
  name: selected.name,
  shortName: selected.shortName,
  rpcUrl: selected.customRpcUrl?.trim() || selected.rpcUrl,
  explorer: selected.explorer,
  currency: selected.currency,
}

/** Name of the .env variable that holds the presale address for the selected network. */
export const PRESALE_ENV_KEY = selected.presaleEnvKey

const rawPresaleAddress = (selected.presaleAddress || '').trim()

export const PRESALE_ADDRESS = isAddress(rawPresaleAddress) ? rawPresaleAddress : ''

export const PRESALE_CONFIG_ERROR =
  rawPresaleAddress && !PRESALE_ADDRESS ? `${PRESALE_ENV_KEY} in .env is not a valid address.` : ''

const rawTokenAddress = (selected.tokenAddress || '').trim()

/** EXPOSE token address shown on the website, set manually in .env. */
export const TOKEN_ADDRESS = isAddress(rawTokenAddress) ? rawTokenAddress : ''

if (rawTokenAddress && !TOKEN_ADDRESS) {
  console.warn(`VITE_${selected.key.toUpperCase()}_TOKEN_ADDRESS in .env is not a valid address.`)
}

// Reown's public demo project ID only works on localhost.
const LOCALHOST_PROJECT_ID = 'b56e18d47c72ab683b10814fe9495694'

export const REOWN_PROJECT_ID =
  env.VITE_REOWN_PROJECT_ID?.trim() || (env.DEV ? LOCALHOST_PROJECT_ID : '')

if (!env.VITE_REOWN_PROJECT_ID?.trim()) {
  console.warn('VITE_REOWN_PROJECT_ID is not set in .env. Get one at https://dashboard.reown.com')
}

// Shown before the contract is configured or loaded. Matches the $0.01 planning price.
export const FALLBACK_PRICE = '0.01'
