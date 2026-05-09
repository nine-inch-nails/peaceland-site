import React, { useMemo, useState } from "react";

const nav = ["journal", "catalog", "radio", "artists", "about"];

const releases = [
  {
    date: "09.05.2026",
    title: "Pour Éliane Radigue",
    artist: "w0rmw00d",
    catalog: "PLR 000",
    format: "Digital Download",
    image: "/pour-eliane.png",
    tracks: ["islas", "anologique"],
    subvert: "https://www.subvert.fm/peaceland/pour-eliane-plr-000",
    credits: "w0rmw00d",
    text: "Created as an homage to Éliane Radigue, Pour Éliane reimagines two of her works through a personal and contemporary lens. Rather than treating the originals as fixed objects, w0rmw00d approaches them as living materials; sources of resonance, patience, and transformation.",
    longText: [
      "Pour Éliane is a quiet act of remembrance; a personal homage to Éliane Radigue, whose work altered the course of electronic and experimental music with uncommon patience, humility, and depth.",
      "Across the EP, w0rmw00d works from fragments of Radigue’s L’Île re-sonante, drawing from its source material to create two loop-based pieces shaped through Neutone VSTs, FX pedals, and subtle processing. Rather than pulling the work away from its origin, these edits remain close to the material itself; stretching, circling, and refracting its tones through contemporary tools. What emerges is neither cover nor quotation in the traditional sense, but a gesture of gratitude toward an artist whose music taught generations how to hear slowness, stillness, and interior movement.",
      "Radigue’s creative path began in the orbit of musique concrète, the post-war French movement associated with Pierre Schaeffer and Pierre Henry, where recorded sound itself became compositional material. Tape, feedback, room tone, machinery, resonance, and accident were no longer peripheral; they became music. From these beginnings, Radigue developed a language entirely her own. Her early work with tape and feedback eventually led to the ARP 2500 synthesizer, through which she created vast, slowly unfolding electronic works of remarkable subtlety. Later, her practice expanded into acoustic composition, most notably through the Occam Ocean series.",
      "Her music asks for attention rather than spectacle. It does not impose itself. It reveals itself over time.",
      "Pour Éliane follows that spirit. The EP moves with restraint, allowing small shifts in tone, texture, and pressure to become the central drama. Sound is approached as something almost physical: a field, a surface, a breath, a current. In making these pieces, w0rmw00d sought not to imitate Radigue, but to honor the freedom she made possible; the permission to work slowly, to listen deeply, and to trust the emotional force of minimal change.",
      "Released in the wake of Radigue’s passing, Pour Éliane is offered with deep respect for her life, her work, and the immense space she opened for artists working with sound.",
      "À rien ne peut m'arrêter maintenant",
    ],
  },
];

const staticSearchItems = [
  {
    type: "page",
    title: "about",
    subtitle: "LISTEN FIRST / まず聴く",
    text: "PeaceLand Records gives singular artists a world around their music: narrative, design, physical releases, community, direct-to-fan relationships, live experiences, and cultural placement. The sound can move across beat music, ambient, left-field electronic, jazz-adjacent music, sample culture, experimental pop, quiet records, loud records, and any other form that feels human, soulful, experimental, and intentional.",
    href: "/#about",
  },
  {
    type: "page",
    title: "catalog",
    subtitle: "PeaceLand Records catalog",
    text: "Release pages, catalog numbers, formats, credits, notes, physical editions, and archive entries.",
    href: "/catalog",
  },
  {
    type: "page",
    title: "artists",
    subtitle: "coming soon",
    text: "Artist worlds, profiles, images, interviews, release histories, and longform notes.",
    href: "/artists",
  },
  {
    type: "page",
    title: "radio",
    subtitle: "coming soon",
    text: "Mixes, record pulls, studio notes, live sessions, and California ⇄ Tokyo dispatches.",
    href: "/radio",
  },
];

function getNavHref(item) {
  if (item === "journal") return "/#journal";
  if (item === "about") return "/#about";
  if (item === "catalog") return "/catalog";
  if (item === "radio") return "/radio";
  if (item === "artists") return "/artists";

  return "/";
}

function normalize(value) {
  return value.toLowerCase().trim();
}

function Header() {
  return (
    <header className="mb-4">
      <div className="mb-3 flex items-end justify-between gap-8">
        <a
          href="/"
          className="text-[22px] font-bold leading-[0.9] tracking-tight"
        >
          PeaceLand
          <br />
          Records
        </a>

        <nav className="hidden gap-8 text-[15px] font-bold lowercase sm:flex">
          {nav.map((item) => (
            <a
              key={item}
              href={getNavHref(item)}
              className="underline decoration-transparent underline-offset-4 hover:decoration-current"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="relative mb-5 h-[210px] w-full overflow-hidden bg-black sm:h-[260px]">
        <img
          src="/mondrian-grid.png"
          alt="PeaceLand Records banner"
          className="h-full w-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-white/10" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="banner-ink text-center leading-[0.9] tracking-tight" />
        </div>
      </div>

      <nav className="mb-9 flex flex-wrap gap-x-7 gap-y-2 border-b-2 border-black pb-3 text-[15px] font-bold lowercase sm:hidden">
        {nav.map((item) => (
          <a
            key={item}
            href={getNavHref(item)}
            className="underline decoration-transparent underline-offset-4 hover:decoration-current"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="border-t-2 border-black py-5 text-[14px] lowercase"
    >
      <div className="flex flex-col justify-between gap-5 sm:flex-row">
        <div>
          <p className="font-bold">© PeaceLand Records</p>
          <p>san francisco / tokyo / global underground</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {["subvert", "bandcamp", "youtube", "instagram", "email"].map(
            (item) => (
              <a
                key={item}
                href={
                  item === "email"
                    ? "mailto:hello@peacelandrecords.com"
                    : item === "subvert"
                    ? "https://www.subvert.fm/peaceland/pour-eliane-plr-000"
                    : "#"
                }
                className="underline decoration-transparent underline-offset-4 hover:decoration-current"
              >
                {item}
              </a>
            ),
          )}
        </nav>
      </div>
    </footer>
  );
}

function ComingSoonPage({ pageTitle }) {
  return (
    <main className="min-h-screen bg-[#eeeeea] text-[#171717] selection:bg-black selection:text-white">
      <div className="mx-auto max-w-[1180px] px-5 py-7">
        <Header />

        <section className="mb-14 grid grid-cols-1 gap-8 border-b-2 border-black pb-14 md:grid-cols-3">
          <div className="text-[15px] font-bold leading-snug lowercase">
            <p>{pageTitle}</p>
            <p>coming soon</p>
          </div>

          <div className="text-[22px] leading-snug md:col-span-2">
            <p>
              This section is coming soon. PeaceLand is opening slowly: first
              the journal, then the archive, then the rooms around it.
            </p>

            <a
              href="/"
              className="mt-6 inline-block border-2 border-black px-4 py-2 text-[14px] font-bold lowercase hover:bg-black hover:text-[#eeeeea]"
            >
              return to journal
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

function CatalogPage() {
  return (
    <main className="min-h-screen bg-[#eeeeea] text-[#171717] selection:bg-black selection:text-white">
      <div className="mx-auto max-w-[1180px] px-5 py-7">
        <Header />

        <section
          id="catalog"
          className="mb-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3"
        >
          {releases.map((release) => (
            <article
              key={release.catalog}
              className="text-[15px] leading-snug md:col-span-3"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                  <p className="mb-2 tabular-nums">{release.catalog}</p>

                  <h1 className="mb-2 text-[22px] font-bold leading-tight">
                    {release.title}
                  </h1>

                  <p className="mb-3 text-[14px] uppercase tracking-[0.12em]">
                    {release.artist}
                  </p>

                  <p>{release.date}</p>
                  <p>{release.format}</p>

                  <div className="mt-5">
                    <p className="font-bold">tracklist</p>
                    <ol className="mt-2 list-decimal pl-5">
                      {release.tracks.map((track) => (
                        <li key={track}>{track}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-5">
                    <p className="font-bold">credits</p>
                    <p>{release.credits}</p>
                  </div>

                  <a
                    href={release.subvert}
                    className="mt-5 inline-block border-2 border-black px-4 py-2 text-[14px] font-bold lowercase hover:bg-black hover:text-[#eeeeea]"
                  >
                    listen / download
                  </a>
                </div>

                <div className="md:col-span-2">
                  <div className="mb-6 w-full overflow-hidden bg-black/10">
                    <img
                      src={release.image}
                      alt={`${release.artist} – ${release.title}`}
                      className="w-full object-cover"
                    />
                  </div>

                  <div className="space-y-5 text-[16px] leading-snug">
                    {release.longText.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <Footer />
      </div>
    </main>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const path = window.location.pathname;

  if (path === "/catalog") {
    return <CatalogPage />;
  }

  if (path === "/radio") {
    return <ComingSoonPage pageTitle="radio" />;
  }

  if (path === "/artists") {
    return <ComingSoonPage pageTitle="artists" />;
  }

  const searchItems = useMemo(() => {
    const releaseItems = releases.map((release) => ({
      type: "journal",
      title: release.title,
      subtitle: release.artist,
      text: `${release.text} ${release.longText.join(" ")} ${release.catalog} ${release.format} ${release.tracks.join(" ")}`,
      href: "/#journal",
    }));

    return [...releaseItems, ...staticSearchItems];
  }, []);

  const results = useMemo(() => {
    const query = normalize(search);

    if (!query) return [];

    return searchItems.filter((item) => {
      const haystack = normalize(
        `${item.type} ${item.title} ${item.subtitle} ${item.text}`,
      );

      return haystack.includes(query);
    });
  }, [search, searchItems]);

  const filteredReleases = useMemo(() => {
    const query = normalize(search);

    if (!query) return releases;

    return releases.filter((release) => {
      const haystack = normalize(
        `${release.date} ${release.title} ${release.artist} ${release.text} ${release.catalog} ${release.format}`,
      );

      return haystack.includes(query);
    });
  }, [search]);

  return (
    <main className="min-h-screen bg-[#eeeeea] text-[#171717] selection:bg-black selection:text-white">
      <div className="mx-auto max-w-[1180px] px-5 py-7">
        <Header />

        <section id="search" className="mb-10 border-b-2 border-black pb-4">
          <div className="flex items-center gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>

            <label htmlFor="site-search" className="sr-only">
              Search PeaceLand Records
            </label>

            <input
              id="site-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="search"
              className="w-full bg-transparent text-[16px] lowercase outline-none placeholder:text-black/45"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="shrink-0 text-[13px] lowercase underline underline-offset-4"
              >
                clear
              </button>
            )}
          </div>

          {search && (
            <div className="mt-4">
              <p className="mb-3 text-[13px] lowercase opacity-70">
                {results.length} result{results.length === 1 ? "" : "s"}
              </p>

              {results.length > 0 ? (
                <div className="border-t border-black/30">
                  {results.map((result) => (
                    <a
                      key={`${result.type}-${result.title}`}
                      href={result.href}
                      className="block border-b border-black/30 py-3 hover:bg-black hover:text-[#eeeeea]"
                    >
                      <p className="text-[13px] lowercase opacity-70">
                        {result.type}
                      </p>

                      <h2 className="text-[18px] font-bold leading-tight">
                        {result.title}
                      </h2>

                      <p className="mt-1 text-[14px] uppercase tracking-[0.12em]">
                        {result.subtitle}
                      </p>

                      <p className="mt-2 max-w-3xl text-[14px] leading-snug">
                        {result.text}
                      </p>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-[15px] leading-snug">
                  no results. try “éliane,” “radigue,” “w0rmw00d,” “plr 000,”
                  or “catalog.”
                </p>
              )}
            </div>
          )}
        </section>

        <section
          id="journal"
          className="mb-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3"
        >
          {filteredReleases.map((release) => (
            <article key={release.catalog} className="text-[15px] leading-snug">
              <p className="mb-2 tabular-nums">{release.date}</p>

              <h2 className="mb-2 text-[18px] font-bold leading-tight">
                <a
                  href="/catalog"
                  className="underline decoration-transparent underline-offset-4 hover:decoration-current"
                >
                  {release.title}
                </a>
              </h2>

              <p className="mb-3 text-[14px] uppercase tracking-[0.12em]">
                {release.artist}
              </p>

              <p className="mb-5">{release.text}</p>

              <div className="mb-3 aspect-[4/3] w-full overflow-hidden bg-black/10">
                <img
                  src={release.image}
                  alt={`${release.artist} – ${release.title}`}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex justify-between border-t border-black/40 pt-2 text-[13px]">
                <span>{release.format}</span>
                <span>{release.catalog}</span>
              </div>
            </article>
          ))}

          {filteredReleases.length === 0 && (
            <div className="text-[15px] leading-snug md:col-span-3">
              <p className="font-bold">no journal entries found.</p>
              <p>clear the search to see all entries.</p>
            </div>
          )}
        </section>

        <section
          id="about"
          className="mb-10 grid grid-cols-1 gap-8 border-t-2 border-black pt-5 md:grid-cols-3"
        >
          <div className="text-[15px] font-bold leading-snug">
            <p>about</p>
            <p>LISTEN FIRST / まず聴く</p>
          </div>

          <div className="text-[18px] leading-snug md:col-span-2">
            <p>
              PeaceLand Records gives singular artists a world around their
              music: narrative, design, physical releases, community,
              direct-to-fan relationships, live experiences, and cultural
              placement.
            </p>

            <p className="mt-5">
              The sound can move across beat music, ambient, left-field
              electronic, jazz-adjacent music, sample culture, experimental pop,
              quiet records, loud records, and any other form that feels human,
              soulful, experimental, and intentional.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
