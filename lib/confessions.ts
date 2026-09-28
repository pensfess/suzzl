export type Fragment = {
  text: string
  /** rough size weight to vary the "voices" */
  scale: number
  rotate: number
  serif?: boolean
  bold?: boolean
  dim?: boolean
}

// Menfess-style snippets — many overlapping anonymous voices.
export const fragments: Fragment[] = [
  { text: 'gais ada yg tau dosen kalkulus 2 kelas pagi killer ga', scale: 1, rotate: -6 },
  { text: 'to him yg pake jaket item di halte kemarin sore, ganteng bgt anjir', scale: 1.15, rotate: 4, serif: true, bold: true },
  { text: 'cape kuliah pengen rebahan seminggu', scale: 0.9, rotate: -3, dim: true },
  { text: 'ada yg mau barengan ke wisuda kating besok?', scale: 0.95, rotate: 7 },
  { text: 'jujur aku kangen masa maba yg polos itu', scale: 1.25, rotate: -4, serif: true },
  { text: 'kantin teknik naik harga lagi ya guys :(', scale: 0.85, rotate: 5, dim: true },
  { text: 'tolong yg nemu kartu tanda mahasiswa a.n. R. di gedung labtek', scale: 0.9, rotate: -8 },
  { text: 'aku minder tiap liat temen udah magang di startup', scale: 1.1, rotate: 3, bold: true },
  { text: 'diam-diam aku suka kamu dari semester 1', scale: 1.3, rotate: -5, serif: true, bold: true },
  { text: 'ada yg jual buku kalkulus bekas ga', scale: 0.8, rotate: 6, dim: true },
  { text: 'first time ngerasa salah jurusan, normal ga sih', scale: 1.05, rotate: -2 },
  { text: 'makasih buat yg kemarin balikin dompetku, kamu baik bgt', scale: 0.95, rotate: 8, serif: true },
  { text: 'wifi perpus lemot parah hari ini', scale: 0.8, rotate: -4, dim: true },
  { text: 'pengen resign dari kepanitiaan tapi ga enak', scale: 1, rotate: 5 },
  { text: 'ada yg ngerasa sepi walau rame temen?', scale: 1.15, rotate: -7, serif: true },
  { text: 'semangat ya semuanya yg lagi skripsian', scale: 0.9, rotate: 4, dim: true },
]

// The single fragment we highlight as "approved / passed moderation".
export const approvedFragment: Fragment = {
  text: 'buat yg lagi berjuang sendirian di kos jauh dari rumah — kamu ga sendiri, kita satu base kok.',
  scale: 1,
  rotate: -2,
  serif: true,
}
