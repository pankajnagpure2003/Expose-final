import { JsonRpcProvider } from 'ethers'
import { NETWORK } from './config.js'

export const readProvider = new JsonRpcProvider(NETWORK.rpcUrl, NETWORK.chainId, { staticNetwork: true })
