import { useFadeIn } from '../hooks/useFadeIn'
import { useLang } from '../hooks/useLang'

import logoMRT from '../assets/logos/MRT-Jakarta.png'
import logoOtics from '../assets/logos/otics.png'
import logoBJM from '../assets/logos/BJM-Budi-Jaya-Mesindo.png'
import logoNihon from '../assets/logos/pt-nihon-plast-indonesia.png'
import logoMekar from '../assets/logos/Mekar-Armada-Jaya.png'
import logoMeiyume from '../assets/logos/Meiyume.png'
import logoCat from '../assets/logos/pt-caterpillar-inc.png'
import logoGE from '../assets/logos/GE.png'
import logoBiofarma from '../assets/logos/Biofarma.png'
import logoGMF from '../assets/logos/gmf-aeroasia.png'

const customers = [
  { name: 'MRT Jakarta', abbr: 'MRT', logo: logoMRT },
  { name: 'PT. Otics Indonesia', abbr: 'OTICS', logo: logoOtics },
  { name: 'Quarta', abbr: 'QUARTA', logo: null },
  { name: 'PT. Budi Jaya Mesindo', abbr: 'BJM', logo: logoBJM },
  { name: 'PT. Nihon Plast Indonesia', abbr: 'NIHON', logo: logoNihon },
  { name: 'PT. Mekar Armada Jaya', abbr: 'MAJ', logo: logoMekar },
  { name: 'Meiyume', abbr: 'MEIYUME', logo: logoMeiyume },
  { name: 'Daytona', abbr: 'DAYTONA', logo: null },
  { name: 'PT. CAT', abbr: 'CAT', logo: logoCat },
  { name: 'PT. GE Nusantara Turbine', abbr: 'GE', logo: logoGE },
  { name: 'Biofarma', abbr: 'BIOFARMA', logo: logoBiofarma },
  { name: 'GMF AeroAsia', abbr: 'GMF', logo: logoGMF },
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
            <div key={item.name} className="bg-white rounded-xl px-5 py-5 flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00d4ff]/20 transition-all duration-200 cursor-default group">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="h-10 w-auto object-contain"
                />
              ) : (
                <div className="text-[#0a0f1e] font-black text-sm tracking-wider">{item.abbr}</div>
              )}
              <div className="text-[#6b7280] text-xs leading-snug">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
