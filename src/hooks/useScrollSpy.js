import { useEffect, useState } from 'react'

export function useScrollSpy(ids, offset = 80) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      let current = ''
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= offset) {
          current = ids[i]
          break
        }
      }
      setActive(current)
      const hash = current ? `#${current}` : ' '
      history.replaceState(null, '', hash)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, offset])

  return active
}
