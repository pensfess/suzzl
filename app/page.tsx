import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { VerifiedBase } from '@/components/verified-base'
import { Moderation } from '@/components/moderation'
import { ClosingCta, Footer } from '@/components/closing-cta'

export default function Page() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />
      <Hero />
      <Marquee />
      <VerifiedBase />
      <Moderation />
      <ClosingCta />
      <Footer />
    </main>
  )
}
