import { useEffect, useRef } from 'react'
import heroBg from '../assets/photos/hero-panel-work.webp'
import { useLang } from '../hooks/useLang'

export default function Hero() {
  const titleRef = useRef(null)
  const { tx } = useLang()

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-[6%] pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" loading="eager" decoding="async" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#0a0f1e]/80" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00d4ff]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-[#ff6b35]/8 rounded-full blur-[100px]" />
      </div>

      <div ref={titleRef} className="relative max-w-3xl">
        <div className="inline-block bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-semibold tracking-[3px] uppercase px-5 py-2 rounded-full mb-6">
          {tx.hero.badge}
        </div>

        <h1 className="text-[clamp(3rem,9vw,6.5rem)] font-black leading-none tracking-tight mb-6">
          {tx.hero.title1}<br />
          <span className="text-[#00d4ff]">{tx.hero.title2}</span><br />
          {tx.hero.title3}
        </h1>

        <p className="text-[#9ca3af] text-lg max-w-lg mx-auto mb-10">
          {tx.hero.desc}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#services" className="bg-[#00d4ff] text-[#0a0f1e] font-bold px-8 py-3.5 rounded-lg hover:bg-[#00b8d9] hover:-translate-y-1 transition-all no-underline text-sm">
            {tx.hero.btnServices}
          </a>
          <a href="#contact" className="border border-[#374151] text-[#f9fafb] font-semibold px-8 py-3.5 rounded-lg hover:border-[#00d4ff] hover:text-[#00d4ff] hover:-translate-y-1 transition-all no-underline text-sm">
            {tx.hero.btnContact}
          </a>
        </div>
      </div>
    </section>
  )
}
