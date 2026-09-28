import { fragments } from '@/lib/confessions'

// A few voices scattered in the hero's corners — decorative, edge-anchored so
// they frame the headline instead of covering it. Hidden on small screens.
const decor = [
  { i: 1, top: '6%', left: '-1%', rot: -7, cls: 'bg-accent-yellow' },
  { i: 8, top: '14%', right: '-1%', rot: 6, cls: 'bg-accent-cyan' },
  { i: 5, bottom: '10%', left: '1%', rot: 5, cls: 'bg-paper' },
  { i: 3, bottom: '4%', right: '2%', rot: -5, cls: 'bg-accent-pink text-paper' },
] as const

export function ConfessionWall({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 hidden overflow-hidden md:block ${className ?? ''}`}
    >
      {decor.map((d) => {
        const fragment = fragments[d.i]
        return (
          <div
            key={d.i}
            className={`fragment wiggle absolute max-w-[15rem] font-mono text-sm ${d.cls}`}
            style={{
              top: 'top' in d ? d.top : undefined,
              bottom: 'bottom' in d ? d.bottom : undefined,
              left: 'left' in d ? d.left : undefined,
              right: 'right' in d ? d.right : undefined,
              // @ts-expect-error custom property consumed by the wiggle keyframes
              '--rot': `${d.rot}deg`,
              animationDelay: `${(d.i % 4) * 0.5}s`,
            }}
          >
            {fragment.text}
          </div>
        )
      })}
    </div>
  )
}
