import Image from "next/image";
export function ClosingCta() {
  return (
    <section id="masuk" className="relative border-t-[3px] border-ink bg-accent-blue px-4 py-24 sm:px-6 sm:py-28">
      <div className="relative mx-auto w-full max-w-3xl text-center">
        <span className="brutal-sm inline-flex items-center gap-2 bg-paper px-4 py-1.5 font-mono text-[0.7rem] font-bold uppercase tracking-wider">
          <span className="blink size-2 bg-accent-pink" />
          gratis selama masa awal ini
        </span>

        <h2 className="mt-7 font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-paper sm:text-6xl">
          Base kampusmu nunggu suara pertamamu.
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-pretty font-mono text-sm leading-relaxed text-paper/85">
          Selama periode awal ini, suzzl.id bisa dipakai gratis — buat, baca, dan nge-post di base kampus sepuasnya.
          Tinggal verifikasi email kampus dan kamu langsung jadi bagian dari dindingnya.
        </p>

        <form className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row" action="#">
          <label htmlFor="campus-email" className="sr-only">
            Email kampus
          </label>
          <input
            id="campus-email"
            type="email"
            required
            placeholder="nama@kampus.ac.id"
            className="brutal w-full flex-1 bg-paper px-5 py-3 font-mono text-sm text-ink placeholder:text-ink/35 focus:bg-accent-yellow focus:outline-none"
          />
          <button
            type="submit"
            className="brutal brutal-hover brutal-press bg-accent-yellow px-6 py-3 font-mono text-sm font-bold uppercase text-ink"
          >
            Verifikasi &amp; masuk
          </button>
        </form>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-paper px-4 py-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs text-ink/60 sm:flex-row">
        <Image src="/logo-tosca.png" alt="suzzl" width={40} height={40} />
        <span className="block text-center uppercase tracking-wide">Dinding suara anonim untuk tiap kampus di Indonesia.</span>
        <span>&copy; {new Date().getFullYear()} suzzl.id</span>
      </div>
    </footer>
  )
}
