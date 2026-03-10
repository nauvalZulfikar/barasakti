import { useFadeIn } from '../hooks/useFadeIn'
import { useLang } from '../hooks/useLang'

const customers = [
  { name: 'MRT Jakarta', abbr: 'MRT' },
  { name: 'PT. Otics Indonesia', abbr: 'OTICS' },
  { name: 'Quarta', abbr: 'QUARTA' },
  { name: 'PT. Budi Jaya Mesindo', abbr: 'BJM' },
  { name: 'PT. Nihon Plast Indonesia', abbr: 'NIHON' },
  { name: 'PT. Mekar Armada Jaya', abbr: 'MAJ' },
  { name: 'Meiyume', abbr: 'MEIYUME' },
  { name: 'Daytona', abbr: 'DAYTONA' },
  { name: 'PT. CAT', abbr: 'CAT' },
  { name: 'PT. GE Nusantara Turbine', abbr: 'GE' },
  { name: 'Biofarma', abbr: 'BIOFARMA' },
  { name: 'GMF AeroAsia', abbr: 'GMF' },
]

export default function Customers() {
  const ref = useFadeIn()
  const { tx } = useLang()
  const c = tx.customers

  return (
    <section id="customers" className="px-[6%] py-24 bg-[#111827]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <p className="text-[#00d4ff] text-xs font-semibold uppercase tracking-[3px] mb-3">{c.tag}</p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{c.title}</h2>
        <p className="text-[#9ca3af] max-w-xl mb-12">{c.desc}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {customers.map(item => (
            <div key={item.name} className="bg-[#1f2937] border border-[#374151] rounded-xl px-5 py-5 flex flex-col items-center justify-center text-center gap-1 hover:border-[#ff6b35] hover:-translate-y-1 transition-all duration-200 cursor-default group">
              <div className="text-[#f9fafb] font-black text-sm tracking-wider group-hover:text-[#ff6b35] transition-colors">{item.abbr}</div>
              <div className="text-[#9ca3af] text-xs leading-snug">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
