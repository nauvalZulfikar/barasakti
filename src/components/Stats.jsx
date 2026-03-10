import { useEffect, useRef, useState } from 'react'
import { useLang } from '../hooks/useLang'

const nums = [
  { num: 24, suffix: '+' },
  { num: 12, suffix: '+' },
  { num: 4, suffix: '' },
  { num: 100, suffix: '%' },
]

function AnimatedNum({ num, suffix }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = num / 40
        const timer = setInterval(() => {
          start += step
          if (start >= num) { setDisplay(num); clearInterval(timer); return }
          setDisplay(Math.floor(start))
        }, 30)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [num])

  return <span ref={ref}>{display}{suffix}</span>
}

export default function Stats() {
  const { tx } = useLang()
  return (
    <div className="bg-[#111827] border-y border-[#374151] px-[6%] py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {nums.map((s, i) => (
        <div key={i}>
          <div className="text-[#00d4ff] text-4xl font-black">
            <AnimatedNum num={s.num} suffix={s.suffix} />
          </div>
          <div className="text-[#9ca3af] text-xs uppercase tracking-widest mt-1">{tx.stats[i].label}</div>
        </div>
      ))}
    </div>
  )
}
