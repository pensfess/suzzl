import { approvedFragment } from '@/lib/confessions'
import { ConfessionWall } from './confession-wall'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
      <ConfessionWall />

      <div className="relative z-20 mx-auto w-full max-w-5xl text-center">
        <span className="brutal-sm inline-flex items-center gap-2 bg-accent-cyan px-3 py-1.5 font-mono text-[0.7rem] font-bold uppercase tracking-wider">
          <span className="blink size-2 bg-ink" />
          menfess anonim tiap kampus
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-7xl md:text-8xl">
          Satu dinding.{' '}
          <span
            className="wiggle inline-block bg-accent-pink px-2 text-paper"
            // @ts-expect-error custom property consumed by the wiggle keyframes
            style={{ '--rot': '-2deg' }}
          >
            Ratusan
          </span>{' '}
          suara anonim kampusmu.
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-pretty font-mono text-sm leading-relaxed text-ink/70 sm:text-base">
          Tiap kampus di Indonesia punya <span className="bg-accent-yellow px-1 font-bold text-ink">base</span> sendiri
          &mdash; kayak itbfess buat anak ITB. Nge-post tanpa nama, tetap aman karena tiap suara lewat moderasi dulu.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#masuk"
            className="brutal brutal-hover brutal-press bg-accent-pink px-7 py-4 font-mono text-sm font-bold uppercase text-paper"
          >
            Masuk ke base kampusmu
          </a>
          <a
            href="#moderasi"
            className="brutal brutal-hover brutal-press bg-paper px-6 py-4 font-mono text-sm font-bold uppercase"
          >
            Gimana moderasinya?
          </a>
        </div>

        {/* the one approved fragment — visually explains the outcome */}
        <figure className="mx-auto mt-16 max-w-md -rotate-1">
          <div className="brutal relative bg-paper p-5 text-left">
            <span className="stamp absolute -right-3 -top-4 rotate-6 px-2 py-1 text-[0.6rem] font-bold">
              Lolos moderasi
            </span>
            <p className="font-display text-lg font-medium leading-snug">{approvedFragment.text}</p>
          </div>
          <figcaption className="mt-4 font-mono text-xs uppercase tracking-wide text-ink/55">
            Post aman tampil di base // yang melanggar ditolak
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
