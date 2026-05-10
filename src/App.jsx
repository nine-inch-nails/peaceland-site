import React, { useMemo, useState } from "react";

const contactEmail = "peacelandrecords415@gmail.com";
const subvertUrl = "https://www.subvert.fm/peaceland/pour-eliane-plr-000";
const bandcampUrl = "https://peaceland.bandcamp.com/";
const instagramUrl = "https://www.instagram.com/peacelandrecords/";

const nav = ["journal", "catalog", "radio", "artists", "about"];

const pressReleases = [
  {
    date: "05.11.2026",
    title: "PeaceLand Records Launch",
    artist: "PeaceLand Records",
    image: "/mondrian%20grey%20scale.png",
    href: "/press/peaceland-records-launch",
    format: "Press Release",
    text: "PeaceLand Records announces its launch as a small, artist-first independent label built around deep listening, physical culture, direct-to-fan relationships, and cultural exchange between California, Tokyo, and the global underground.",
    longText: [
      "PeaceLand Records announces its launch as a small, artist-first independent label built around deep listening, physical culture, direct-to-fan relationships, and cultural exchange between California, Tokyo, and the global underground.",
      "The label begins with a simple belief: music deserves more than being uploaded, scrolled past, and forgotten.",
      "PeaceLand exists to give singular artists a world around their music. Not just distribution. Not just a logo. Not just another post in the feed. The label is built to support the full life of a release: narrative, design, physical editions, community, direct fan relationships, live experiences, cultural placement, and the slower work of helping music find the people who will truly care for it.",
      "At the center of PeaceLand is the phrase LISTEN FIRST. It is both a slogan and a way of moving. Listen before speaking. Listen before deciding what something is. Listen deeply enough that the music tells you what it needs.",
      "PeaceLand Records is not built for scale at any cost. It is not a major-label imitation, a playlist company, a content farm, or a fake-viral marketing machine. It is a home for music that feels human, soulful, experimental, intentional, and difficult to place. The sound can move through beat music, ambient music, left-field electronic work, jazz-adjacent forms, sample-based records, experimental pop, quiet records, loud records, private worlds, and strange songs that do not fit cleanly into a genre.",
      "The genre matters less than the feeling. The music has to have a pulse. It has to have a point of view.",
      "PeaceLand believes in records as worlds. In songs as places. In artists as people with histories, contradictions, obsessions, and futures. A release should feel like more than a file on a platform. It should have a room around it. A story. A physical trace. A sound system. A flyer on a wall. A record on the table. A tape in the bag. A liner note. A late-night email. A friend telling another friend, “you need to hear this.”",
      "PeaceLand exists to build those rooms.",
      "Rooted in California and open to everywhere, the label also imagines itself as a cultural bridge between California, Tokyo, and the wider underground. That bridge is not aesthetic decoration. It is a way of thinking about how music actually travels: through artists, record shops, listening bars, DJs, venues, writers, friends, and fans who still care enough to pay attention.",
      "In practice, PeaceLand will begin carefully. Small roster. High taste. Direct relationships. Releases that feel detailed enough to archive and alive enough to hit the street. The label will focus on artist-friendly release structures, transparent rights, meaningful physical objects, intentional design, editorial framing, and long-term trust.",
      "PeaceLand’s first release, PLR 000: Pour Éliane Radigue by w0rmw00d, sets the tone for the label’s opening gesture. Created as an homage to Éliane Radigue, the EP reimagines two of her works through loop-based edits, Neutone VSTs, FX pedals, and subtle processing. It is a quiet act of remembrance; a release shaped by patience, resonance, and gratitude. As an opening catalog number, Pour Éliane Radigue reflects the label’s interest in music as attention, not spectacle.",
      "Alongside its catalog, PeaceLand will gradually develop a small media arm: PeaceLand Radio, mix series, artist notes, studio visits, record pulls, live sessions, liner note essays, and California ⇄ Tokyo dispatches. The point is not content for content’s sake. It is documentation, taste-making, and world-building. A label should not only release music; it should help preserve the conditions around the music.",
      "PeaceLand is anti-hype and pro-depth. It will avoid staged discovery narratives, fake grassroots marketing, manipulative scarcity, and the machinery that turns artists into content pipelines. Instead, it will move through real listening parties, real artist notes, real DJ support, real radio, real record-store relationships, real newsletters, real physical objects, and real community.",
      "The work is simple, but not small: make music feel less disposable. Give singular artists a world around their work. Press things into memory. Build community without pretending it is marketing. Move carefully, show up loudly, and leave behind a catalog that still feels alive years from now.",
      "LISTEN FIRST.",
    ],
  },
];

const releases = [
  {
    date: "05.11.2026",
    title: "Pour Éliane Radigue",
    artist: "w0rmw00d",
    catalog: "PLR 000",
    format: "Digital Download",
    image: "/pour-eliane.png",
    tracks: ["islas", "anologique"],
    subvert: subvertUrl,
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

const radioMixes = [
  {
    date: "11.24.2025",
    title: "Human Error: BluntsGiving Show",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/cCH4DXclqoZzfHcyUm",
    image: "/bluntsgiving%20show.png",
    synopsis:
      "Happy BluntsGiving",
  },
  {
    date: "12.24.2025",
    title: "Happy KNXmas",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/w0hNscmRMmiLodk6bi",
    image: "/Knxmas%20show.png",
    synopsis:
      "A winter dedication to the swing, looseness, and emotional grammar of the LA beat scene, with KNXwledge energy at the center.",
  },
  {
    date: "01.28.2026",
    title: "New Year Mix",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/Z2sP7uxckd5DEZVLqR",
    image: "/new%20year%20show.png",
    synopsis:
      "A reflective turn-of-year session of jazz textures, soft loops, private moods, and records for beginning again.",
  },
  {
    date: "02.07.2026",
    title: "Dilla Days | Nujabes Nights",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/EWU66sn8UTdB7MiiAL",
    image: "/nujabes%3Adilla.png",
    synopsis:
      "A tribute to two architects of feeling in beat music: Dilla’s drum language and Nujabes’ melodic, drifting sense of memory.",
  },
  {
    date: "02.25.2026",
    title: "Human Error: Pour Éliane",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/ign93075Oqdz2o3Rvn",
    image: "/radigue.png",
    synopsis:
      "Rest in Peace to the one and only, Éliane Radigue. A mix for all the feelings.",
  },
  {
    date: "03.27.2026",
    title: "Human Error: Beats to Kill Dante East To Vol. 1",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/auMPoknfgEDaFSfcLC",
    image: "/ashtre-release.png",
    synopsis:
      "A beattape collection scoring the upcoming graphic novel, 'The Killing of Dante East'.",
  },
  {
    date: "04.04.2026",
    title: "Human Error: Ras G 404 Day Tribute",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/UPaa3koYwgDQNTb4RS",
    image: "/404%20day.png",
    synopsis:
      "A 404 Day tribute to Ras G and the Afrikan Space Program: cosmic debris, SP-404 pressure, raw rhythm, and low-end memory.",
  },
  {
    date: "04.20.2026",
    title: "Human Error: 420 BBs",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/AYVwc7XcXsTV2eqaox",
    image: "/420.png",
    synopsis:
      "A hazy 420 transmission of smoked-out beat music, low-slung loops, strange grooves, and altered-room selections.",
  },
  {
    date: "04.22.2026",
    title: "Human Error: Madlib Jazz",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/1Vd5N3uO0XDaYd6uCQ",
    image: "/madlib%20jazz.png",
    synopsis:
      "A trip through Madlib’s jazz universe: cracked swing, deep crates, aliases, fragments, and the looseness that turns records into language.",
  },
];

const journalEntries = [
  ...pressReleases,
  ...releases.map((release) => ({
    ...release,
    href: "/catalog",
  })),
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
    subtitle: "PeaceLand Radio archive",
    text: "Mixes, record pulls, studio notes, live sessions, Radio Al Hara transmissions, and California ⇄ Tokyo dispatches.",
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
          {["subvert", "bandcamp", "instagram", "email"].map((item) => (
            <a
              key={item}
              href={
                item === "email"
                  ? `mailto:${contactEmail}`
                  : item === "subvert"
                  ? subvertUrl
                  : item === "bandcamp"
                  ? bandcampUrl
                  : item === "instagram"
                  ? instagramUrl
                  : "#"
              }
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
    <main className="min-h-screen text-[#171717] selection:bg-black selection:text-white">
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

function PressReleasePage() {
  const press = pressReleases[0];

  return (
    <main className="min-h-screen text-[#171717] selection:bg-black selection:text-white">
      <div className="mx-auto max-w-[1180px] px-5 py-7">
        <Header />

        <article className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          <aside className="text-[15px] leading-snug">
            <p className="mb-2 tabular-nums">{press.date}</p>
            <p className="font-bold">{press.format}</p>
            <p>{press.artist}</p>

            <a
              href={subvertUrl}
              className="mt-5 inline-block border-2 border-black px-4 py-2 text-[14px] font-bold lowercase hover:bg-black hover:text-[#eeeeea]"
            >
              listen / download
            </a>

            <a
              href={`mailto:${contactEmail}`}
              className="mt-3 inline-block border-2 border-black px-4 py-2 text-[14px] font-bold lowercase hover:bg-black hover:text-[#eeeeea]"
            >
              contact
            </a>
          </aside>

          <div className="md:col-span-2">
            <h1 className="mb-5 text-[28px] font-bold leading-tight sm:text-[34px]">
              {press.title}
            </h1>

            <p className="mb-8 max-w-3xl text-[20px] leading-snug">
              PeaceLand Records launches with a simple belief: LISTEN FIRST.
            </p>

            <div className="mb-8 w-full overflow-hidden bg-black/10">
              <a href={subvertUrl}>
                <img
                  src={press.image}
                  alt={press.title}
                  className="w-full object-cover"
                />
              </a>
            </div>

            <div className="space-y-5 text-[16px] leading-snug">
              {press.longText.map((paragraph, index) => (
                <p key={paragraph}>
                  {index === 10 ? (
                    <>
                      PeaceLand’s first release,{" "}
                      <a
                        href={subvertUrl}
                        className="font-bold underline underline-offset-4"
                      >
                        PLR 000: Pour Éliane Radigue by w0rmw00d
                      </a>
                      , sets the tone for the label’s opening gesture. Created
                      as an homage to Éliane Radigue, the EP reimagines two of
                      her works through loop-based edits, Neutone VSTs, FX
                      pedals, and subtle processing. It is a quiet act of
                      remembrance; a release shaped by patience, resonance, and
                      gratitude. As an opening catalog number, Pour Éliane
                      Radigue reflects the label’s interest in music as
                      attention, not spectacle.
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            <div className="mt-8 border-t-2 border-black pt-5 text-[15px] leading-snug">
              <p className="font-bold">PeaceLand Records</p>
              <p>San Francisco / Tokyo / Global Underground</p>
              <p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="underline underline-offset-4"
                >
                  {contactEmail}
                </a>
              </p>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  );
}

function CatalogPage() {
  return (
    <main className="min-h-screen text-[#171717] selection:bg-black selection:text-white">
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

function RadioPage() {
  return (
    <main className="min-h-screen text-[#171717] selection:bg-black selection:text-white">
      <div className="mx-auto max-w-[1180px] px-5 py-7">
        <Header />

        <section className="mb-10 grid grid-cols-1 gap-8 border-b-2 border-black pb-8 md:grid-cols-3">
          <div className="text-[15px] font-bold leading-snug lowercase">
            <p>radio</p>
            <p>Radio Al Hara archive</p>
          </div>

          <div className="text-[18px] leading-snug md:col-span-2">
            <p>
              A running archive of Human Error transmissions for Radio Al Hara:
              beat tapes, tribute sets, dusty jazz, private moods, and records
              pulled for late-night listening.
            </p>
          </div>
        </section>

        <section className="mb-14 border-t-2 border-black">
          {radioMixes.map((mix, index) => (
            <article
              key={mix.url}
              className="grid grid-cols-1 gap-4 border-b border-black/40 py-5 text-[15px] leading-snug md:grid-cols-[70px_120px_130px_1fr_120px]"
            >
              <p className="tabular-nums opacity-70">
                {String(index + 1).padStart(2, "0")}
              </p>

              <div className="h-[90px] w-[90px] overflow-hidden bg-black/10">
                <img
                  src={mix.image}
                  alt={mix.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="tabular-nums">{mix.date}</p>

              <div>
                <h1 className="text-[18px] font-bold leading-tight">
                  {mix.title}
                </h1>

                <p className="mt-1 text-[14px] uppercase tracking-[0.12em]">
                  {mix.artist}
                </p>

                <p className="mt-3 max-w-3xl">{mix.synopsis}</p>
              </div>

              <div className="md:text-right">
                <a
                  href={mix.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border-2 border-black px-4 py-2 text-[14px] font-bold lowercase hover:bg-black hover:text-[#eeeeea]"
                >
                  soundcloud
                </a>
              </div>
            </article>
          ))}
        </section>

        <Footer />
      </div>
    </main>
  );
}

function HomePage() {
  const [search, setSearch] = useState("");

  const searchItems = useMemo(() => {
    const releaseItems = releases.map((release) => ({
      type: "journal",
      title: release.title,
      subtitle: release.artist,
      text: `${release.text} ${release.longText.join(" ")} ${release.catalog} ${release.format} ${release.tracks.join(" ")}`,
      href: "/#journal",
    }));

    const pressItems = pressReleases.map((press) => ({
      type: "journal",
      title: press.title,
      subtitle: press.artist,
      text: `${press.text} ${press.longText.join(" ")} ${press.format}`,
      href: press.href,
    }));

    const radioItems = radioMixes.map((mix) => ({
      type: "radio",
      title: mix.title,
      subtitle: mix.artist,
      text: `${mix.date} ${mix.synopsis}`,
      href: "/radio",
    }));

    return [...pressItems, ...releaseItems, ...radioItems, ...staticSearchItems];
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

  const filteredJournalEntries = useMemo(() => {
    const query = normalize(search);

    if (!query) return journalEntries;

    return journalEntries.filter((entry) => {
      const haystack = normalize(
        `${entry.date} ${entry.title} ${entry.artist} ${entry.text} ${entry.catalog || ""} ${entry.format || ""}`,
      );

      return haystack.includes(query);
    });
  }, [search]);

  return (
    <main className="min-h-screen text-[#171717] selection:bg-black selection:text-white">
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
                  no results. try “éliane,” “madlib,” “ras g,” “radio,” “launch,”
                  “plr 000,” or “catalog.”
                </p>
              )}
            </div>
          )}
        </section>

        <section
          id="journal"
          className="mb-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3"
        >
          {filteredJournalEntries.map((entry) => (
            <article
              key={`${entry.date}-${entry.title}`}
              className="text-[15px] leading-snug"
            >
              <p className="mb-2 tabular-nums">{entry.date}</p>

              <h2 className="mb-2 text-[18px] font-bold leading-tight">
                <a
                  href={entry.href}
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

              <div className="flex justify-between border-t border-black/40 pt-2 text-[13px]">
                <span>{entry.format}</span>
                {entry.catalog && <span>{entry.catalog}</span>}
              </div>
            </article>
          ))}

          {filteredJournalEntries.length === 0 && (
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

export default function App() {
  const path = window.location.pathname;

  if (path === "/catalog") {
    return <CatalogPage />;
  }

  if (path === "/press/peaceland-records-launch") {
    return <PressReleasePage />;
  }

  if (path === "/radio") {
    return <RadioPage />;
  }

  if (path === "/artists") {
    return <ComingSoonPage pageTitle="artists" />;
  }

  return <HomePage />;
}
