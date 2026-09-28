const steps = [
  {
    step: '01',
    title: 'AI cek tiap post seketika',
    body: 'Begitu kamu kirim, AI langsung baca. Pelanggaran yang jelas — ujaran kebencian, doxxing, konten seksual — ditolak saat itu juga, sebelum ada yang lihat.',
    tag: 'otomatis',
    color: 'bg-accent-cyan',
  },
  {
    step: '02',
    title: 'Yang abu-abu diserahkan ke admin manusia',
    body: 'Kalau AI ragu, post masuk antrean admin manusia. Konteks, sindiran, kasus sensitif — diputus orang, bukan tebakan mesin.',
    tag: 'ditinjau manusia',
    color: 'bg-accent-pink text-paper',
  },
]

export function Moderation() {
  return (
    <section id="moderasi" className="relative border-t-[3px] border-ink bg-paper-dim px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <span className="brutal-sm inline-block bg-accent-yellow px-3 py-1.5 font-mono text-[0.7rem] font-bold uppercase tracking-wider">
            Moderasi dua lapis
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Anonim bukan berarti tanpa aturan.
          </h2>
          <p className="mt-5 text-pretty font-mono text-sm leading-relaxed text-ink/70">
            Tiap suara lewat dua lapis sebelum tampil di dinding. Cepat karena AI, adil karena tetap ada manusia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.step} className={`brutal brutal-hover ${s.color} p-8`}>
              <div className="flex items-baseline justify-between">
                <span className="font-display text-6xl font-bold">{s.step}</span>
                <span className="brutal-sm bg-paper px-3 py-1 font-mono text-xs font-bold uppercase text-ink">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold uppercase leading-tight">{s.title}</h3>
              <p className="mt-3 font-mono text-sm leading-relaxed opacity-80">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 flex flex-wrap items-center gap-3 font-mono text-sm text-ink/70">
          <span className="stamp px-2.5 py-1 text-[0.6rem] font-bold">hasil</span>
          Cuma post yang lolos dua lapis ini yang muncul di base — sisanya berhenti sebelum sempat terbaca.
        </p>
      </div>
    </section>
  )
}
