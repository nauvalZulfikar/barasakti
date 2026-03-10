import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { useLang } from '../hooks/useLang'

export default function Contact() {
  const ref = useFadeIn()
  const [submitted, setSubmitted] = useState(false)
  const { tx } = useLang()
  const c = tx.contact

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); e.target.reset() }, 3000)
  }

  return (
    <section id="contact" className="px-[6%] py-24 bg-[#0a0f1e]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <p className="text-[#00d4ff] text-xs font-semibold uppercase tracking-[3px] mb-3">{c.tag}</p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{c.title}</h2>
        <p className="text-[#9ca3af] max-w-xl mb-12">{c.desc}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact info + Maps */}
          <div className="flex flex-col gap-4">
            <a href="tel:+628122188882"
              className="flex items-center gap-4 bg-[#1f2937] border border-[#374151] rounded-xl px-6 py-5 hover:border-[#00d4ff] transition-colors no-underline">
              <span className="text-2xl">📞</span>
              <div>
                <div className="text-[#9ca3af] text-xs uppercase tracking-widest mb-0.5">{c.labels.phone}</div>
                <div className="text-[#f9fafb] font-semibold text-sm">+62 812-2188-2882</div>
              </div>
            </a>
            <a href="https://wa.me/628122188882" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#1f2937] border border-[#374151] rounded-xl px-6 py-5 hover:border-[#00d4ff] transition-colors no-underline">
              <span className="text-2xl">💬</span>
              <div>
                <div className="text-[#9ca3af] text-xs uppercase tracking-widest mb-0.5">{c.labels.whatsapp}</div>
                <div className="text-[#f9fafb] font-semibold text-sm">+62 812-2188-2882</div>
              </div>
            </a>
            <a href="mailto:barasaktiziwaabadi@gmail.com"
              className="flex items-center gap-4 bg-[#1f2937] border border-[#374151] rounded-xl px-6 py-5 hover:border-[#00d4ff] transition-colors no-underline">
              <span className="text-2xl">✉️</span>
              <div>
                <div className="text-[#9ca3af] text-xs uppercase tracking-widest mb-0.5">{c.labels.email}</div>
                <div className="text-[#f9fafb] font-semibold text-sm">barasaktiziwaabadi@gmail.com</div>
              </div>
            </a>
            <div className="bg-[#1f2937] border border-[#374151] rounded-xl px-6 py-5">
              <div className="text-[#9ca3af] text-xs uppercase tracking-widest mb-2">{c.labels.address}</div>
              <div className="text-[#f9fafb] text-sm leading-relaxed">{c.address}</div>
            </div>
            <div className="bg-[#1f2937] border border-[#374151] rounded-xl px-6 py-5">
              <div className="text-[#9ca3af] text-xs uppercase tracking-widest mb-2">{c.labels.company}</div>
              <div className="text-[#f9fafb] font-bold">PT. Bara Sakti Ziwa Abadi</div>
              <div className="text-[#9ca3af] text-sm mt-1">HVAC | Automation Control | Panel Maker | Design & Engineering</div>
            </div>
            <div className="overflow-hidden rounded-xl border border-[#374151]">
              <iframe
                title="Lokasi PT. Bara Sakti Ziwa Abadi"
                src="https://maps.google.com/maps?q=Jl.+Permai+7+B+II+No.+26,+Leuwigajah,+Cimahi+Selatan,+Cimahi,+Jawa+Barat+40543&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#1f2937] border border-[#374151] rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="flex flex-col gap-1.5">
                  <span className="text-[#9ca3af] text-xs uppercase tracking-widest">{c.form.name}</span>
                  <input required type="text" placeholder={c.form.namePh}
                    className="bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-[#f9fafb] text-sm outline-none focus:border-[#00d4ff] transition-colors placeholder:text-[#4b5563]" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[#9ca3af] text-xs uppercase tracking-widest">{c.form.company}</span>
                  <input type="text" placeholder={c.form.companyPh}
                    className="bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-[#f9fafb] text-sm outline-none focus:border-[#00d4ff] transition-colors placeholder:text-[#4b5563]" />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="text-[#9ca3af] text-xs uppercase tracking-widest">{c.form.email}</span>
                <input required type="email" placeholder={c.form.emailPh}
                  className="bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-[#f9fafb] text-sm outline-none focus:border-[#00d4ff] transition-colors placeholder:text-[#4b5563]" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[#9ca3af] text-xs uppercase tracking-widest">{c.form.message}</span>
                <textarea placeholder={c.form.messagePh} rows={4}
                  className="bg-[#111827] border border-[#374151] rounded-lg px-4 py-3 text-[#f9fafb] text-sm outline-none focus:border-[#00d4ff] transition-colors resize-y placeholder:text-[#4b5563]" />
              </label>
              <button type="submit"
                className={`w-full py-4 rounded-lg font-bold text-sm transition-all duration-300 ${submitted ? 'bg-emerald-500 text-white' : 'bg-[#00d4ff] text-[#0a0f1e] hover:bg-[#00b8d9] hover:-translate-y-0.5'}`}>
                {submitted ? c.form.sent : c.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
