import { useFadeIn } from '../hooks/useFadeIn'
import imgMrt from '../assets/photos/mrt-project.webp'
import { useLang } from '../hooks/useLang'

export default function About() {
  const ref = useFadeIn()
  const { tx } = useLang()
  const a = tx.about

  return (
    <section id="about" className="px-[6%] py-24 bg-[#0a0f1e]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#00d4ff] text-xs font-semibold uppercase tracking-[3px] mb-3">{a.tag}</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{a.title}</h2>
            <p className="text-[#9ca3af] mb-4 leading-relaxed">
              <span className="text-[#f9fafb] font-semibold">PT. Bara Sakti Ziwa Abadi</span> {a.p1}
            </p>
            <p className="text-[#9ca3af] leading-relaxed mb-4">{a.p2}</p>
            <p className="text-[#9ca3af] leading-relaxed">{a.p3}</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl">
              <img src={imgMrt} alt={a.imgAlt} loading="lazy" decoding="async" className="w-full object-cover aspect-[4/3] bg-[#1f2937]" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {a.cards.map(item => (
                <div key={item.title} className="bg-[#1f2937] border border-[#374151] rounded-2xl p-5 flex flex-col gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-[#f9fafb] font-semibold text-sm">{item.title}</h3>
                  <p className="text-[#9ca3af] text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-[3px] mb-6">{a.videoLabel}</p>
          <div className="overflow-hidden rounded-2xl bg-[#1f2937]">
            <video
              controls
              className="w-full aspect-video"
              preload="metadata"
            >
              <source src="/src/assets/video/Company Profile PT.BARA.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
