import type { Fragment } from '@/lib/confessions'
import { fragments } from '@/lib/confessions'

const chipColors = ['bg-paper', 'bg-accent-cyan', 'bg-accent-pink text-paper', 'bg-paper']

function Row({ items, reverse }: { items: Fragment[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="flex overflow-hidden">
      <div className={`flex w-max shrink-0 items-stretch gap-4 pr-4 ${reverse ? 'marquee-track-reverse' : 'marquee-track'}`}>
        {doubled.map((f, i) => (
          <span
            key={i}
            className={`brutal-sm shrink-0 whitespace-nowrap px-4 py-2 font-mono text-sm font-medium ${chipColors[i % chipColors.length]}`}
          >
            {f.text}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Marquee() {
  const row1 = fragments.slice(0, 8)
  const row2 = fragments.slice(8, 16)
  return (
    <section
      aria-hidden="true"
      className="marquee-group relative space-y-3 overflow-hidden border-y-[3px] border-ink bg-accent-yellow py-5"
    >
      <Row items={row1} />
      <Row items={row2} reverse />
    </section>
  )
}
