import { formatUnits } from 'ethers'

export const ONE = 10n ** 18n

export function shortAddress(address) {
  return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ''
}

export function formatAmount(value, decimals, digits = 4) {
  return Number(formatUnits(value, decimals)).toLocaleString(undefined, { maximumFractionDigits: digits })
}

/** formatUnits without the trailing ".0", for filling inputs. */
export function toInputValue(value, decimals) {
  const text = formatUnits(value, decimals)
  return text.endsWith('.0') ? text.slice(0, -2) : text
}

export function minBig(a, b) {
  return a < b ? a : b
}

/** True when the user cancelled or rejected the request in their wallet. */
export function isUserRejection(error) {
  if (error?.code === 'ACTION_REJECTED' || error?.code === 4001 || error?.info?.error?.code === 4001) return true
  const text = `${error?.shortMessage || ''} ${error?.message || ''}`.toLowerCase()
  return /user rejected|user denied|rejected the request|request rejected|user cancel|cancelled|canceled/.test(text)
}

export function errorText(error) {
  if (error?.code === 'ACTION_REJECTED' || error?.code === 4001) return 'Request rejected in your wallet.'
  return error?.shortMessage || error?.reason || error?.info?.error?.message || error?.message || String(error)
}
