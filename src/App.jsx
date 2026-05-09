import React, { useMemo, useState } from "react";

const nav = ["journal", "catalog", "radio", "artists", "about"];

const journal = [
  {
    date: "09.05.2026",
    title: "PeaceLand Records Launch",
    artist: "w0rmw00d",
    image: "/peaceland-logo.png",
    text: "I'm excited to announce the launch of PeaceLand Records. Lots in store, lots of works and things coming soon. LISTEN FIRST.",
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
    subtitle: "coming soon",
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
          {["bandcamp", "youtube", "instagram", "email"].map((item) => (
            <a
              key={item}
              href={item === "email" ? "mailto:hello@peacelandrecords.com" : "#"}
              className="underline decoration-transparent underline-offset-4 hover:decoration-current"
            >
              {item}
            </a>
          ))}
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

export default function App() {
  const [search, setSearch] = useState("");
  const path = window.location.pathname;

  if (path === "/catalog") {
    return <ComingSoonPage pageTitle="catalog" />;
  }

  if (path === "/radio") {
    return <ComingSoonPage pageTitle="radio" />;
  }

  if (path === "/artists") {
    return <ComingSoonPage pageTitle="artists" />;
  }

  const searchItems = useMemo(() => {
    const journalItems = journal.map((entry) => ({
      type: "journal",
      title: entry.title,
      subtitle: entry.artist,
      text: entry.text,
      href: "/#journal",
    }));

    return [...journalItems, ...staticSearchItems];
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
                  no results. try “launch,” “radio,” “tokyo,” “physical,” or
                  “about.”
                </p>
              )}
            </div>
          )}
        </section>

        <section
          id="journal"
          className="mb-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3"
        >
          {filteredJournal.map((entry) => (
            <article key={entry.title} className="text-[15px] leading-snug">
              <p className="mb-2 tabular-nums">{entry.date}</p>

              <h2 className="mb-2 text-[18px] font-bold leading-tight">
                <a
                  href="#"
                  className="underline decoration-transparent underline-offset-4 hover:decoration-current"
                >
                  {entry.title}
                </a>
              </h2>

              <p className="mb-3 text-[14px] uppercase tracking-[0.12em]">
                {entry.artist}
              </p>

              <p className="mb-5">{entry.text}</p>

              <div className="mb-3 aspect-[4/3] w-full overflow-hidden bg-black/10">
                <img
                  src={entry.image}
                  alt={`${entry.artist} – ${entry.title}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </article>
          ))}

          {filteredJournal.length === 0 && (
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
