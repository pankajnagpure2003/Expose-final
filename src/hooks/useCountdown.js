import { useEffect, useState } from 'react'

/**
 * Illustrative countdown. Starts at the given days/hours/minutes/seconds
 * and ticks down every second, purely for visual effect — the real
 * presale date is still to be announced.
 */
export default function useCountdown({ days = 12, hours = 8, minutes = 45, seconds = 30 } = {}) {
  const [remaining, setRemaining] = useState(
    () => ((days * 24 + hours) * 60 + minutes) * 60 + seconds
  )

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const d = Math.floor(remaining / 86400)
  const h = Math.floor((remaining % 86400) / 3600)
  const m = Math.floor((remaining % 3600) / 60)
  const s = remaining % 60

  const pad = (n) => String(n).padStart(2, '0')

  return {
    days: pad(d),
    hours: pad(h),
    minutes: pad(m),
    seconds: pad(s),
  }
}
