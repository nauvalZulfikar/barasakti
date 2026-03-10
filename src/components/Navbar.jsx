import { useState, useEffect, useRef } from 'react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useLang } from '../hooks/useLang'

const sectionIds = ['about', 'services', 'projects', 'customers', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useScrollSpy(sectionIds)
  const { lang, setLang, tx } = useLang()
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [menuOpen])

  return (
    <nav ref={menuRef} className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-[6%] py-5 transition-all duration-300 ${scrolled ? 'bg-[#0a0f1e]/90 backdrop-blur-md border-b border-[#374151]' : ''}`}>
      <div className="text-[#00d4ff] text-2xl font-black tracking-[4px]">.BARA</div>

      <ul className="hidden md:flex gap-8 list-none">
        {tx.nav.links.map((l, i) => (
          <li key={l}>
            <a href={`#${sectionIds[i]}`}
              className={`text-sm font-medium uppercase tracking-widest transition-colors no-underline ${active === sectionIds[i] ? 'text-[#00d4ff]' : 'text-[#9ca3af] hover:text-[#00d4ff]'}`}>
              {l}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-3">
        <button
          onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
          className="text-xs font-bold border border-[#374151] text-[#9ca3af] hover:border-[#00d4ff] hover:text-[#00d4ff] px-3 py-1.5 rounded-lg transition-all bg-transparent cursor-pointer">
          {lang === 'id' ? 'EN' : 'ID'}
        </button>
        <a href="#contact" className="bg-[#00d4ff] text-[#0a0f1e] text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#00b8d9] transition-all hover:-translate-y-0.5 no-underline">
          {tx.nav.cta}
        </a>
      </div>

      <button
        aria-label="Buka menu navigasi"
        aria-expanded={menuOpen}
        className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-0"
        onClick={() => setMenuOpen(v => !v)}
      >
        <span className={`block w-6 h-0.5 bg-[#f9fafb] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#f9fafb] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#f9fafb] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#111827] border-b border-[#374151] flex flex-col items-center gap-4 py-6 md:hidden">
          {tx.nav.links.map((l, i) => (
            <a key={l} href={`#${sectionIds[i]}`}
              className={`text-sm uppercase tracking-widest no-underline ${active === sectionIds[i] ? 'text-[#00d4ff]' : 'text-[#9ca3af] hover:text-[#00d4ff]'}`}
              onClick={() => setMenuOpen(false)}>{l}</a>
          ))}
          <button
            onClick={() => { setLang(lang === 'id' ? 'en' : 'id'); setMenuOpen(false) }}
            className="text-xs font-bold border border-[#374151] text-[#9ca3af] px-3 py-1.5 rounded-lg bg-transparent cursor-pointer">
            {lang === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}
          </button>
          <a href="#contact" className="bg-[#00d4ff] text-[#0a0f1e] text-sm font-bold px-5 py-2.5 rounded-lg no-underline mt-2" onClick={() => setMenuOpen(false)}>
            {tx.nav.cta}
          </a>
        </div>
      )}
    </nav>
  )
}
