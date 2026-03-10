import { useFadeIn } from '../hooks/useFadeIn'
import { useLang } from '../hooks/useLang'

const projects = [
  'Integrasi Panel Crane to PC — MRT Mangga Besar',
  'Build Training Kit / Simulator — Jabodetabek, Bandung, Bekasi',
  'Panel MC Drum Test — Karawang Timur',
  'Pemasangan Gas Flow Meter — PT. Otics Indonesia',
  'Program PLC & HMI',
  'Custom Software (Web/Desktop) — Cikarang',
  'Panel Distribusi — Cikarang, Bandung, Bekasi',
  'Panel MC Roll Forming — PT. Budi Jaya Mesindo',
  'Panel Control Monitoring AHU — Jatinegara',
  'Program PLC, HMI, SCADA WWTP — Bandung',
  'Energy Monitoring — Cikarang',
  'Panel Picking Lamp / Smart Rack — Cikarang',
  'Trouble Shooting MC CNC — Setu Bekasi',
  'Trouble Shooting MC Injection Molding — PT. Nihonplast Indonesia',
  'Repair Modul CNC — PT. MAJ Magelang',
  'Repair Modul CNC — PT. CAT, Gunung Putri',
  'Panel Control Lifter Gudang — Batu Ceper',
  'Panel Control Conveyor — Surabaya',
  'Retrofit Panel MC Filling — PT. Meiyume',
  'Retrofit MC Linier Welding — PT. Daytona',
  'Rekondisi Panel Mesin — Cikarang',
  'Overhaul Mini Chiller — PT. GE Nusantara Turbine, Bandung',
  'Panel Starter AHU — GMF',
  'Panel Control LAFU AHU — BIOFARMA',
]

export default function Projects() {
  const ref = useFadeIn()
  const { tx } = useLang()
  const p = tx.projects

  return (
    <section id="projects" className="px-[6%] py-24 bg-[#0a0f1e]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <p className="text-[#00d4ff] text-xs font-semibold uppercase tracking-[3px] mb-3">{p.tag}</p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{p.title}</h2>
        <p className="text-[#9ca3af] max-w-xl mb-12">{p.desc}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-[#111827] border border-[#374151] rounded-xl px-5 py-4 hover:border-[#00d4ff]/50 transition-colors">
              <span className="text-[#00d4ff] font-black text-xs mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[#9ca3af] text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
