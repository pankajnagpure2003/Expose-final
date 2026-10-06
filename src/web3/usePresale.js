import { useContext } from 'react'
import { PresaleContext } from './presaleContext.js'

export default function usePresale() {
  const context = useContext(PresaleContext)
  if (!context) throw new Error('usePresale must be used inside PresaleProvider')
  return context
}
