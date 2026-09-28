'use client'

import { useMemo, useState } from 'react'

const known: Record<string, string> = {
  'itb.ac.id': 'itbfess',
  'ui.ac.id': 'uifess',
  'ugm.ac.id': 'ugmfess',
  'its.ac.id': 'itsfess',
  'unpad.ac.id': 'unpadfess',
}

const samples = ['nama@itb.ac.id', 'kamu@ugm.ac.id', 'aku@gmail.com']

type Result =
  | { state: 'empty' }
  | { state: 'ok'; base: string; domain: string }
  | { state: 'reject'; domain: string }

function evaluate(email: string): Result {
  const value = email.trim().toLowerCase()
  if (!value.includes('@')) return { state: 'empty' }
  const domain = value.split('@')[1] ?? ''
  if (!domain) return { state: 'empty' }
  if (domain.endsWith('.ac.id')) {
    const base = known[domain] ?? `${domain.split('.')[0]}fess`
    return { state: 'ok', base, domain }
  }
  return { state: 'reject', domain }
}

export function VerifiedBase() {
  const [email, setEmail] = useState('')
  const result = useMemo(() => evaluate(email), [email])

  return (
    <section id="base" className="relative border-t-[3px] border-ink px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-12 lg:grid-cols-2">
        <div>
          <span className="brutal-sm inline-block bg-accent-pink px-3 py-1.5 font-mono text-[0.7rem] font-bold uppercase tracking-wider text-paper">
            Satu base, satu kampus
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Cuma mahasiswa kampus itu yang boleh bersuara.
          </h2>
          <p className="mt-5 max-w-md text-pretty font-mono text-sm leading-relaxed text-ink/70">
            Sebelum bisa nge-post, kamu verifikasi lewat email kampus &mdash; misalnya{' '}
            <span className="bg-accent-yellow px-1 font-bold">@itb.ac.id</span> buat masuk base ITB. Base tetangga? Kamu
            cuma bisa baca. Coba ketik email kampus kamu di sebelah &rarr;
          </p>
        </div>

        {/* interactive email -> base checker */}
        <div className="brutal-lg bg-paper p-6">
          <label htmlFor="check-email" className="font-mono text-xs font-bold uppercase tracking-wider text-ink/60">
            Cek email kampus kamu
          </label>
          <input
            id="check-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nama@kampus.ac.id"
            className="brutal-sm mt-3 w-full bg-paper px-4 py-3 font-mono text-sm text-ink placeholder:text-ink/35 focus:bg-accent-yellow focus:outline-none"
          />

          <div className="mt-3 flex flex-wrap gap-2">
            {samples.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setEmail(s)}
                className="brutal-sm brutal-press bg-paper px-2.5 py-1 font-mono text-xs transition-colors hover:bg-accent-cyan"
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-5 border-t-2 border-dashed border-ink pt-5">
            {result.state === 'empty' && (
              <p className="font-mono text-sm text-ink/50">Menunggu email kampus...</p>
            )}
            {result.state === 'ok' && (
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-xs uppercase text-ink/55">Kamu masuk base</p>
                  <p className="font-display text-2xl font-bold">{result.base}</p>
                </div>
                <span className="brutal-sm bg-accent-cyan px-3 py-2 font-mono text-xs font-bold uppercase">
                  Terverifikasi
                </span>
              </div>
            )}
            {result.state === 'reject' && (
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-xs uppercase text-ink/55">{result.domain}</p>
                  <p className="font-display text-2xl font-bold line-through decoration-4">bukan email kampus</p>
                </div>
                <span className="brutal-sm bg-accent-pink px-3 py-2 font-mono text-xs font-bold uppercase text-paper">
                  Ditolak
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
