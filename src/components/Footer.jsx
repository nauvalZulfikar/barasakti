import { useLang } from '../hooks/useLang'

export default function Footer() {
  const { tx } = useLang()
  return (
    <footer className="bg-[#111827] border-t border-[#374151] px-[6%] py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-[#00d4ff] text-xl font-black tracking-[4px] mb-1">.BARA</div>
          <div className="text-[#9ca3af] text-xs">PT. Bara Sakti Ziwa Abadi</div>
        </div>
        <div className="text-[#9ca3af] text-xs text-center">{tx.footer.tagline}</div>
        <p className="text-[#9ca3af] text-xs">{tx.footer.copy}</p>
      </div>
    </footer>
  )
}
