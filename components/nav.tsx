import Image from "next/image";
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center">
  <Image src="/logo-tosca.webp" alt="suzzl" width={48} height={48} priority />
</a>

        <nav className="hidden items-center gap-2 font-mono text-xs font-bold uppercase sm:flex">
          <a className="border-2 border-transparent px-3 py-2 transition-colors hover:border-ink" href="#base">
            Base
          </a>
          <a className="border-2 border-transparent px-3 py-2 transition-colors hover:border-ink" href="#moderasi">
            Moderasi
          </a>
        </nav>

        <a
          href="#masuk"
          className="brutal brutal-hover brutal-press bg-accent-yellow px-4 py-2 font-mono text-xs font-bold uppercase"
        >
          Cari base &rarr;
        </a>
      </div>
    </header>
  )
}
