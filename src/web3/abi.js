export const PRESALE_ABI = [
  'function token() view returns (address)',
  'function usdt() view returns (address)',
  'function owner() view returns (address)',
  'function treasury() view returns (address)',
  'function saleOpen() view returns (bool)',
  'function tokensSold() view returns (uint256)',
  'function usdtRaised() view returns (uint256)',
  'function HARD_CAP() view returns (uint256)',
  'function price() view returns (uint256)',
  'function maxPurchasePerWallet() view returns (uint256)',
  'function purchased(address buyer) view returns (uint256)',
  'function buy(uint256 usdtAmount) returns (uint256)',
]

export const ERC20_ABI = [
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function balanceOf(address account) view returns (uint256)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 value) returns (bool)',
]
