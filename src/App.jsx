import React from "react";

const nav = ["journal", "catalog", "shop", "artists", "about", "contact"];

const releases = [
  {
    title: "Dusk Index / Morning Static",
    artist: "PeaceLand Ensemble",
    format: "LP + Digital",
    catalog: "PLR 001",
    note: "A slow-burning collection of dusty loops, soft electronics, and room-tone meditations.",
  },
  {
    title: "Listen First: Live at Midnite Haze",
    artist: "Cleo & The House Band",
    format: "Cassette",
    catalog: "PLR 002",
    note: "A late-night document of improvised keys, vinyl fragments, and broken-beat percussion.",
  },
  {
    title: "雨の記憶 / Rain Memory",
    artist: "Vic Ruiz",
    format: "Digital",
    catalog: "PLR 003+",
    note: "Field recordings, piano sketches, and small sounds from the edge of the city.",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] text-[#171717] font-serif selection:bg-black selection:text-white">
      <div className="mx-auto max-w-5xl px-5 py-6 sm:px-8 sm:py-8">
        <header className="mb-20 sm:mb-28">
          <div className="flex items-start justify-between gap-6">
            <a
              href="#"
              className="text-lg leading-none tracking-tight hover:italic"
            >
              PeaceLand
              <br />
              Records
            </a>

            <nav className="hidden gap-5 text-sm lowercase sm:flex">
              {nav.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="underline decoration-transparent underline-offset-4 hover:decoration-current"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <nav className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm lowercase sm:hidden">
            {nav.map((item) => (
              <a
                key={item}
                href="#"
                className="underline decoration-transparent underline-offset-4 hover:decoration-current"
              >
                {item}
              </a>
            ))}
          </nav>
        </header>

        <section className="mb-20 grid grid-cols-1 gap-10 sm:mb-28 lg:grid-cols-[1.05fr_1.95fr] lg:gap-16">
          <aside className="text-sm leading-relaxed lowercase">
            <p>artist page</p>
            <p>san francisco / tokyo / wherever the record finds you</p>

            <div className="mt-8">
              <p>listen first</p>
              <p>まず聴く</p>
            </div>
          </aside>

          <div>
            <h1 className="mb-8 text-4xl font-normal leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              PeaceLand Ensemble
            </h1>

            <p className="max-w-2xl text-xl leading-snug tracking-tight sm:text-2xl">
              What does a label sound like before it becomes a label? A back
              room with a turntable. A half-remembered melody. A stack of
              records waiting to be touched. PeaceLand Ensemble is less a band
              than a gathering point: musicians, friends, samples, field
              recordings, and strange little loops that ask you to listen before
              you name them.
            </p>
          </div>
        </section>

        <section aria-label="Releases" className="border-t border-black/40">
          {releases.map((release, index) => (
            <article
              key={release.catalog}
              className="group grid grid-cols-1 gap-3 border-b border-black/40 py-5 md:grid-cols-[120px_1fr_160px_120px] md:gap-6"
            >
              <div className="text-sm tabular-nums opacity-70">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <a
                  href="#"
                  className="text-2xl leading-tight tracking-tight underline decoration-transparent underline-offset-4 group-hover:decoration-current sm:text-3xl"
                >
                  {release.title}
                </a>

                <p className="mt-1 text-sm uppercase tracking-[0.16em] opacity-70">
                  {release.artist}
                </p>

                <p className="mt-4 max-w-xl text-base leading-relaxed opacity-80">
                  {release.note}
                </p>
              </div>

              <div className="text-base md:text-lg">{release.format}</div>

              <div className="text-base tabular-nums md:text-lg">
                {release.catalog}
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-20 flex flex-col justify-between gap-8 text-sm lowercase sm:mt-28 sm:flex-row">
          <div>
            <p>© PeaceLand Records</p>
            <p>records, rooms, residue</p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {["about", "contact", "imprint", "privacy", "shipping", "login"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="underline decoration-transparent underline-offset-4 hover:decoration-current"
                >
                  {item}
                </a>
              ),
            )}
          </nav>
        </footer>
      </div>
    </main>
  );
}
