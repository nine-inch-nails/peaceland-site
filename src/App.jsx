import React, { useMemo, useState } from "react";

// ============================================================
// NAVIGATION
// ============================================================

const nav = [
  "journal",
  "catalogue",
  "artists",
  "radio",
  "tv",
  "about",
];

function getNavHref(item) {
  if (item === "journal") return "/#journal";
  if (item === "catalogue") return "/catalog";
  if (item === "artists") return "/artists";
  if (item === "radio") return "/radio";
  if (item === "tv") return "/tv";
  if (item === "about") return "/#about";

  return "/";
}

// ============================================================
// JOURNAL
// ============================================================

const journal = [
  {
    date: "05.11.2026",
    title: "PeaceLand Records Launch",
    artist: "PeaceLand Records",
    text: "I'm excited to announce the launch of PeaceLand Records. Lots in store, lots of works and things coming soon. LISTEN FIRST.",
    image: null,
  },
];

// ============================================================
// ARTISTS
// ============================================================

const artists = [
  {
    name: "AshTreJinkins",
    images: [
      "/ashtrejinkins.jpg",
      "/ashtrejinkins.png",
      "/AshTreJinkins.jpg",
      "/AshTreJinkins.png",
      "/ashtre.jpg",
      "/ashtre.png",
    ],
  },
  {
    name: "Trip Shrubb",
    images: [
      "/trip-shrubb.jpg",
      "/trip-shrubb.png",
      "/tripshrubb.jpg",
      "/tripshrubb.png",
      "/NÜJJE!_Cover_front_s.jpg",
    ],
  },
  {
    name: "Swarvy",
    images: [
      "/swarvy-image.jpg",
      "/swarvy-image.png",
      "/swarvy image.jpg",
      "/swarvy image.png",
    ],
  },
];

// ============================================================
// RADIO
// ============================================================

const radioSets = [
  {
    title: "Bluntsgiving",
    href: "https://on.soundcloud.com/cCH4DXclqoZzfHcyUm",
  },
  {
    title: "Knxmas",
    href: "https://on.soundcloud.com/w0hNscmRMmiLodk6bi",
  },
  {
    title: "Radio Al Haara 003",
    href: "https://on.soundcloud.com/Z2sP7uxckd5DEZVLqR",
  },
  {
    title: "Radio Al Haara 004",
    href: "https://on.soundcloud.com/EWU66sn8UTdB7MiiAL",
  },
  {
    title: "Radio Al Haara 005",
    href: "https://on.soundcloud.com/auMPoknfgEDaFSfcLC",
  },
  {
    title: "Ras G",
    href: "https://on.soundcloud.com/UPaa3koYwgDQNTb4RS",
  },
  {
    title: "Madlib Jazz",
    href: "https://on.soundcloud.com/1Vd5N3uO0XDaYd6uCQ",
  },
  {
    title: "Éliane",
    href: "https://on.soundcloud.com/ign93075Oqdz2o3Rvn",
  },
  {
    title: "420",
    href: "https://on.soundcloud.com/AYVwc7XcXsTV2eqaox",
  },
  {
    title: "bebop al haara",
    href: "https://on.soundcloud.com/GbuC7IJBq3xrXU5z3B",
    images: [
      "/bebop al haara.png",
      "/bebop-al-haara.png",
      "/bebop al haara.jpg",
    ],
  },
];

// ============================================================
// SEARCH
// ============================================================

const staticSearchItems = [
  {
    type: "page",
    title: "about",
    subtitle: "LISTEN FIRST / まず聴く",
    text: "PeaceLand Records gives singular artists a world around their music: narrative, design, physical releases, community, direct-to-fan relationships, live experiences, and cultural placement.",
    href: "/#about",
  },
  {
    type: "page",
    title: "catalogue",
    subtitle: "PeaceLand Records",
    text: "Releases, catalogue numbers, physical editions, credits and archive entries.",
    href: "/catalog",
  },
  {
    type: "page",
    title: "artists",
    subtitle: "PeaceLand Records",
    text: "AshTreJinkins, Trip Shrubb, Swarvy.",
    href: "/artists",
  },
  {
    type: "page",
    title: "radio",
    subtitle: "Radio Al Haara Archive",
    text: "Mixes, selections and broadcasts from PeaceLand Records.",
    href: "/radio",
  },
  {
    type: "page",
    title: "tv",
    subtitle: "under construction",
    text: "PeaceLand TV.",
    href: "/tv",
  },
];

function normalize(value = "") {
  return value.toLowerCase().trim();
}

// ============================================================
// IMAGE WITH FALLBACKS
// ============================================================

function ImageWithFallback({
  sources = [],
  alt = "",
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  if (!sources || sources.length === 0 || failed) {
    return null;
  }

  return (
    <img
      src={sources[index]}
      alt={alt}
      className={className}
      onError={() => {
        if (index < sources.length - 1) {
          setIndex((current) => current + 1);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}

// ============================================================
// HEADER
// ============================================================

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
        <ImageWithFallback
          sources={[
            "/mondrian-grid.png",
            "/mondrian grey scale.png",
            "/mondrian-grey-scale.png",
          ]}
          alt="PeaceLand Records"
          className="h-full w-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-white/10" />
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

// ============================================================
// FOOTER
// ============================================================

function Footer() {
  return (
    <footer className="border-t-2 border-black py-5 text-[14px] lowercase">
      <div className="flex flex-col justify-between gap-5 sm:flex-row">
        <div>
          <p className="font-bold">© PeaceLand Records</p>
          <p>san francisco</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href="https://peaceland.bandcamp.com/"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-transparent underline-offset-4 hover:decoration-current"
          >
            bandcamp
          </a>

          <a
            href="https://www.instagram.com/peacelandrecords/"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-transparent underline-offset-4 hover:decoration-current"
          >
            instagram
          </a>

          <a
            href="mailto:hello@peacelandrecords.com"
            className="underline decoration-transparent underline-offset-4 hover:decoration-current"
          >
            email
          </a>
        </nav>
      </div>
    </footer>
  );
}

// ============================================================
// BASIC PAGE WRAPPER
// ============================================================

function PageShell({ children }) {
  return (
    <main className="min-h-screen bg-[#eeeeea] text-[#171717] selection:bg-black selection:text-white">
      <div className="mx-auto max-w-[1180px] px-5 py-7">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
}

// ============================================================
// CATALOGUE
// ============================================================

function CataloguePage() {
  return (
    <PageShell>
      <section className="mb-14 grid grid-cols-1 gap-8 border-b-2 border-black pb-14 md:grid-cols-3">
        <div className="text-[15px] font-bold leading-snug lowercase">
          <p>catalogue</p>
        </div>

        <div className="text-[22px] leading-snug md:col-span-2">
          <p>coming soon</p>
        </div>
      </section>
    </PageShell>
  );
}

// ============================================================
// ARTISTS
// ============================================================

function ArtistsPage() {
  return (
    <PageShell>
      <section className="mb-10 border-b-2 border-black pb-5">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-[15px] font-bold lowercase">
            artists
          </div>

          <div className="text-[22px] leading-snug md:col-span-2">
            <p>
              PeaceLand artists.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((artist) => (
          <article key={artist.name}>
            <div className="mb-4 aspect-square w-full overflow-hidden bg-black/10">
              <ImageWithFallback
                sources={artist.images}
                alt={artist.name}
                className="h-full w-full object-cover grayscale"
              />
            </div>

            <h2 className="text-[20px] font-bold leading-tight">
              {artist.name}
            </h2>
          </article>
        ))}
      </section>
    </PageShell>
  );
}

// ============================================================
// RADIO
// ============================================================

function RadioPage() {
  return (
    <PageShell>
      <section className="mb-10 border-b-2 border-black pb-5">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-[15px] font-bold lowercase">
            <p>radio</p>
          </div>

          <div className="text-[22px] leading-snug md:col-span-2">
            <p>Radio Al Haara Archive</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        {radioSets.map((set, index) => (
          <a
            key={`${set.title}-${index}`}
            href={set.href}
            target="_blank"
            rel="noreferrer"
            className="group grid grid-cols-1 gap-5 border-t border-black py-5 last:border-b sm:grid-cols-[90px_1fr_auto] sm:items-center"
          >
            <div className="text-[13px] tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="flex items-center gap-5">
              {set.images && (
                <div className="h-20 w-20 shrink-0 overflow-hidden bg-black/10">
                  <ImageWithFallback
                    sources={set.images}
                    alt={set.title}
                    className="h-full w-full object-cover grayscale"
                  />
                </div>
              )}

              <h2 className="text-[19px] font-bold leading-tight group-hover:underline group-hover:underline-offset-4">
                {set.title}
              </h2>
            </div>

            <div className="text-[13px] lowercase">
              listen ↗
            </div>
          </a>
        ))}
      </section>
    </PageShell>
  );
}

// ============================================================
// TV
// ============================================================

function TVPage() {
  return (
    <PageShell>
      <section className="mb-14 grid min-h-[300px] grid-cols-1 gap-8 border-b-2 border-black pb-14 md:grid-cols-3">
        <div className="text-[15px] font-bold leading-snug lowercase">
          <p>tv</p>
        </div>

        <div className="text-[22px] leading-snug md:col-span-2">
          <p>under construction</p>
        </div>
      </section>
    </PageShell>
  );
}

// ============================================================
// HOME
// ============================================================

function HomePage() {
  const [search, setSearch] = useState("");

  const searchItems = useMemo(() => {
    const journalItems = journal.map((entry) => ({
      type: "journal",
      title: entry.title,
      subtitle: entry.artist,
      text: entry.text,
      href: "/#journal",
    }));

    const artistItems = artists.map((artist) => ({
      type: "artist",
      title: artist.name,
      subtitle: "PeaceLand Records",
      text: `${artist.name} — PeaceLand Records artist.`,
      href: "/artists",
    }));

    const radioItems = radioSets.map((set) => ({
      type: "radio",
      title: set.title,
      subtitle: "Radio Al Haara",
      text: `${set.title} — PeaceLand Radio archive.`,
      href: set.href,
    }));

    return [
      ...journalItems,
      ...artistItems,
      ...radioItems,
      ...staticSearchItems,
    ];
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

  const filteredJournal = useMemo(() => {
    const query = normalize(search);

    if (!query) return journal;

    return journal.filter((entry) => {
      const haystack = normalize(
        `${entry.date} ${entry.title} ${entry.artist} ${entry.text}`,
      );

      return haystack.includes(query);
    });
  }, [search]);

  return (
    <PageShell>
      {/* SEARCH */}
      <section
        id="search"
        className="mb-10 border-b-2 border-black pb-4"
      >
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

          <label
            htmlFor="site-search"
            className="sr-only"
          >
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
              {results.length} result
              {results.length === 1 ? "" : "s"}
            </p>

            {results.length > 0 ? (
              <div className="border-t border-black/30">
                {results.map((result, index) => (
                  <a
                    key={`${result.type}-${result.title}-${index}`}
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
                no results.
              </p>
            )}
          </div>
        )}
      </section>

      {/* JOURNAL */}
      <section
        id="journal"
        className="mb-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3"
      >
        {filteredJournal.map((entry) => (
          <article
            key={entry.title}
            className="text-[15px] leading-snug"
          >
            <p className="mb-2 tabular-nums">
              {entry.date}
            </p>

            <h2 className="mb-2 text-[18px] font-bold leading-tight">
              {entry.title}
            </h2>

            <p className="mb-3 text-[14px] uppercase tracking-[0.12em]">
              {entry.artist}
            </p>

            <p className="mb-5">
              {entry.text}
            </p>

            {entry.image && (
              <div className="mb-3 aspect-[4/3] w-full overflow-hidden bg-black/10">
                <img
                  src={entry.image}
                  alt={`${entry.artist} – ${entry.title}`}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </article>
        ))}

        {filteredJournal.length === 0 && (
          <div className="text-[15px] leading-snug md:col-span-3">
            <p className="font-bold">
              no journal entries found.
            </p>

            <p>
              clear the search to see all entries.
            </p>
          </div>
        )}
      </section>

      {/* ABOUT */}
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
            PeaceLand Records gives singular artists a world around
            their music: narrative, design, physical releases,
            community, direct-to-fan relationships, live experiences,
            and cultural placement.
          </p>

          <p className="mt-5">
            The sound can move across beat music, ambient,
            left-field electronic, jazz-adjacent music, sample
            culture, experimental pop, quiet records, loud records,
            and any other form that feels human, soulful,
            experimental, and intentional.
          </p>
        </div>
      </section>
    </PageShell>
  );
}

// ============================================================
// APP / ROUTING
// ============================================================

export default function App() {
  const path =
    window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/catalog" || path === "/catalogue") {
    return <CataloguePage />;
  }

  if (path === "/artists") {
    return <ArtistsPage />;
  }

  if (path === "/radio") {
    return <RadioPage />;
  }

  if (path === "/tv") {
    return <TVPage />;
  }

  return <HomePage />;
}
