'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

type Props = {
  label?: string
  className?: string
  url?: string
  /** Optional prefill values you can pass explicitly */
  prefillName?: string
  prefillEmail?: string
  /** If true, disables the button until Calendly script is ready */
  disabledWhileLoading?: boolean
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: Record<string, any>) => void
    }
  }
}

export default function CalendlyButton({
  label = 'Contact',
  className = '',
  url = 'https://calendly.com/natalie-cervantes/discovery-call',
  prefillName,
  prefillEmail,
  disabledWhileLoading = false,
}: Props) {
  // Detect when Calendly's widget script is actually available
  const [isCalendlyReady, setIsCalendlyReady] = useState<boolean>(
    typeof window !== 'undefined' && !!window.Calendly
  )

  useEffect(() => {
    if (isCalendlyReady) return
    let raf = 0
    const check = () => {
      if (typeof window !== 'undefined' && window.Calendly) {
        setIsCalendlyReady(true)
        return
      }
      raf = window.requestAnimationFrame(check)
    }
    raf = window.requestAnimationFrame(check)
    return () => window.cancelAnimationFrame(raf)
  }, [isCalendlyReady])

  // Grab UTMs from the current URL if present
  const utm = useMemo(() => {
    if (typeof window === 'undefined') return undefined
    const qs = new URLSearchParams(window.location.search)
    const get = (k: string) => qs.get(k) ?? undefined
    const maybe = {
      utmSource: get('utm_source'),
      utmMedium: get('utm_medium'),
      utmCampaign: get('utm_campaign'),
      utmTerm: get('utm_term'),
      utmContent: get('utm_content'),
    }
    // Only pass an object if at least one value exists
    return Object.values(maybe).some(Boolean) ? maybe : undefined
  }, [])

  // Prefill only from explicitly passed props
  const prefill = useMemo(() => {
    const name = prefillName || undefined
    const email = prefillEmail || undefined
    return name || email ? { name, email } : undefined
  }, [prefillName, prefillEmail])

  const openCalendly = useCallback(() => {
    if (!window.Calendly) {
      // Graceful no-op if script hasn't loaded
      console.warn('Calendly widget not loaded yet.')
      return
    }
    window.Calendly.initPopupWidget({
      url,
      ...(prefill ? { prefill } : {}),
      ...(utm ? { utm } : {}),
    })
  }, [url, prefill, utm])

  const isDisabled = disabledWhileLoading && !isCalendlyReady

  return (
    <button
      type="button"
      onClick={openCalendly}
      className={className}
      aria-label="Book a call"
      aria-busy={isDisabled ? true : undefined}
      disabled={isDisabled}
    >
      {label}
    </button>
  )
}
