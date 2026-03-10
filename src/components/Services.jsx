import { useFadeIn } from '../hooks/useFadeIn'
import { useLang } from '../hooks/useLang'
import imgPanelPlc from '../assets/photos/panel-plc.webp'
import imgPanelInverter from '../assets/photos/panel-inverter.webp'
import imgHvac from '../assets/photos/hvac-monitoring.webp'
import imgHmi from '../assets/photos/hmi-panel.webp'
import imgTraining from '../assets/photos/training-kit.webp'
import imgMaintenance from '../assets/photos/field-maintenance.webp'

const galleryImgs = [imgPanelPlc, imgHmi, imgPanelInverter, imgHvac, imgTraining, imgMaintenance]

export default function Services() {
  const ref = useFadeIn()
  const { tx } = useLang()
  const s = tx.services

  return (
    <section id="services" className="px-[6%] py-24 bg-[#111827]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <p className="text-[#00d4ff] text-xs font-semibold uppercase tracking-[3px] mb-3">{s.tag}</p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{s.title}</h2>
        <p className="text-[#9ca3af] max-w-xl mb-12">{s.desc}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.items.map(item => (
            <div key={item.title} className="bg-[#1f2937] border border-[#374151] rounded-2xl p-7 hover:border-[#00d4ff] hover:-translate-y-1 transition-all duration-200 cursor-default group">
              <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-[#00d4ff]/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-[3px] mb-6">{s.galleryLabel}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {s.gallery.map((g, i) => (
              <div key={g.label} className="relative overflow-hidden rounded-xl group aspect-[4/3]">
                <img src={galleryImgs[i]} alt={g.label} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-[#1f2937]" />
                <div className="absolute inset-0 bg-[#0a0f1e]/40 group-hover:bg-[#0a0f1e]/20 transition-colors" />
                <span className="absolute bottom-3 left-3 text-[#f9fafb] text-xs font-semibold bg-[#0a0f1e]/60 px-2 py-1 rounded">{g.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
