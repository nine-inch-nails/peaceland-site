import React, { useEffect, useMemo, useRef, useState } from "react";

const contactEmail = "peacelandrecords415@gmail.com";
const bandcampUrl = "https://peaceland.bandcamp.com/";
const instagramUrl = "https://www.instagram.com/peacelandrecords/";

const nav = ["journal", "artists", "catalogue", "radio", "tv", "about"];

const artists = [
  {
    name: "Ahwlee",
    location: "Long Beach, CA",
    image: "ahwlee_final.png",
    bio: "Killing Dante East",
  },
  {
    name: "AshTreJinkins",
    location: "Fresno, CA",
    image: "ashtrejinkins_cover.png",
    bio: "Killing Dante East",
  },
  {
    name: "LanceSkiiiwalker",
    location: "Los Angeles, CA",
    image: "Lance Skiiiwalkerinsta.png",
    bio: "Killing Dante East",
  },
  {
    name: "Linafornia",
    location: "Los Angeles, CA",
    image: "linafornia_cover.png",
    bio: "Killing Dante East",
  },
  {
    name: "Rnd1",
    location: "Tucson, AZ",
    image: "rnd1_cover.png",
    bio: "Killing Dante East",
  },
  {
    name: "Saib",
    location: "Casablanca, Morocco",
    image: "saib_cover.png",
    bio: "Killing Dante East",
  },
  {
    name: "Siifu",
    location: "Birmingham, AL",
    image: "siifu_cover.png",
    bio: "Killing Dante East",
  },
  {
    name: "Swarvy",
    location: "Los Angeles, CA",
    image: "swarvy-image.jpg",
    bio: "Killing Dante East",
  },
  {
    name: "Trip Shrubb",
    location: "Hillentrup, Germany",
    image: "michael_beckett_blackwhite.jpeg",
    bio: "Michael Beckett has a way of working that feels almost stubborn in the best sense. He commits early. He makes decisions while the sound is still warm. He lets the process leave fingerprints. The result is music that feels less like it was assembled and more like it was captured, shaped in real time, then released into the world without being overprotected.",
  },
];

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
      "PeaceLand exists to give singular artists a world around their music. Not just distribution. Not just a logo. Not just another post in the feed. The label is built to support the full life of a release: narrative, design, physical editions, direct fan relationships, live experiences, cultural placement, and the slower work of helping music find the people who will truly care for it.",
      "At the center of PeaceLand is the phrase LISTEN FIRST. It is both a slogan and a way of moving. Listen before speaking. Listen before deciding what something is. Listen deeply enough that the music tells you what it needs.",
      "PeaceLand Records is not built for scale at any cost. It is not a major-label imitation, a playlist company, a content farm, or a fake-viral marketing machine. It is a home for music that feels human, soulful, experimental, intentional, and difficult to place.",
      "The genre matters less than the feeling. The music has to have a pulse. It has to have a point of view.",
      "PeaceLand believes in records as worlds. In songs as places. In artists as people with histories, contradictions, obsessions, and futures. A release should feel like more than a file on a platform. It should have a room around it. A story. A physical trace. A sound system. A flyer on a wall. A record on the table. A tape in the bag. A liner note. A late-night email. A friend telling another friend, “you need to hear this.”",
      "PeaceLand exists to build those rooms.",
      "Rooted in California and open to everywhere, the label also imagines itself as a cultural bridge between California, Tokyo, and the wider underground. That bridge is not aesthetic decoration. It is a way of thinking about how music actually travels: through artists, record shops, listening bars, DJs, venues, writers, friends, and fans who still care enough to pay attention.",
      "In practice, PeaceLand will begin carefully. Small roster. High taste. Direct relationships. Releases that feel detailed enough to archive and alive enough to hit the street. The label will focus on artist-friendly release structures, transparent rights, meaningful physical objects, intentional design, editorial framing, and long-term trust.",
      "Alongside its catalog, PeaceLand will gradually develop a small media arm: PeaceLand Radio, mix series, artist notes, studio visits, record pulls, live sessions, liner note essays, and California ⇄ Tokyo dispatches. The point is not content for content’s sake. It is documentation, taste-making, and world-building. A label should not only release music; it should help preserve the conditions around the music.",
      "PeaceLand is anti-hype and pro-depth. It will avoid staged discovery narratives, fake grassroots marketing, manipulative scarcity, and the machinery that turns artists into content pipelines. Instead, it will move through real listening parties, real artist notes, real DJ support, real radio, real record-store relationships, real newsletters, real physical objects, and real community.",
      "The work is simple, but not small: make music feel less disposable. Give singular artists a world around their work. Press things into memory. Build community without pretending it is marketing. Move carefully, show up loudly, and leave behind a catalog that still feels alive years from now.",
      "LISTEN FIRST.",
    ],
  },
];

const releases = [];

const radioMixes = [
  {
    date: "11.24.2025",
    title: "Human Error: BluntsGiving Show",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/cCH4DXclqoZzfHcyUm",
    image: "/bluntsgiving%20show.png",
    synopsis:
      "We Smokin' REEFER",
  },
  {
    date: "12.24.2025",
    title: "Happy KNXmas",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/w0hNscmRMmiLodk6bi",
    image: "/Knxmas%20show.png",
    synopsis:
      "Beats, Beer, Baby Jesus...and Knxwledge.",
  },
  {
    date: "01.28.2026",
    title: "New Year Mix",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/Z2sP7uxckd5DEZVLqR",
    image: "/new%20year%20show.png",
    synopsis:
      "Happy 2026 ya'll",
  },
  {
    date: "02.07.2026",
    title: "Dilla Days | Nujabes Nights",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/EWU66sn8UTdB7MiiAL",
    image: "/nujabes%3Adilla.png",
    synopsis:
      "The goats. RIP forever",
  },
  {
    date: "02.25.2026",
    title: "Human Error: Pour Éliane",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/ign93075Oqdz2o3Rvn",
    image: "/radigue.png",
    synopsis:
      "I had a surreal experience of finishing Blank Forms' Alein Roots #10 on Eliane Radigue. The morning I finished was the morning she passed on. Et il est un jour arrivé. Marteler le ciel. Et marteler la mer. Et la mer avait embrassé moi. Et la délivré moi de ma caille. À rien ne peut m'arrêter maintenant",
  },
  {
    date: "03.27.2026",
    title: "Human Error: Beats to Kill Dante East To Vol. 1",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/auMPoknfgEDaFSfcLC",
    image: "/ashtre-release.png",
    synopsis:
      "Dante East is president. He's taking over the world through brainwashing over the airwaves. Will you succumb or join the resistance? Here's the antidote. Volume 1 of 8.",
  },
  {
    date: "04.04.2026",
    title: "Human Error: Ras G 404 Day Tribute",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/UPaa3koYwgDQNTb4RS",
    image: "/404%20day.png",
    synopsis:
      "A 404 Day tribute to Ras G and the Afrikan Space Program. RIP Ras and ケンジさん、ありがとうございます.",
  },
  {
    date: "04.20.2026",
    title: "Human Error: 420 BBs",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/AYVwc7XcXsTV2eqaox",
    image: "/420.png",
    synopsis:
      "Hey Hey Hey Hey....Smoke Weed Everyday!!",
  },
  {
    date: "04.22.2026",
    title: "Human Error: Madlib Jazz",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/1Vd5N3uO0XDaYd6uCQ",
    image: "/madlib%20jazz.png",
    synopsis:
      "Madlib is the GOAT. His jazz puts him in a lane of his own. Go deep.",
  },

  {
    date: "06.05.2026",
    title: "Human Error: Bebop Al Haara",
    artist: "w0rmw00d",
    url: "https://on.soundcloud.com/GbuC7IJBq3xrXU5z3B",
    image: "/bebop%20al%20haara.png",
    synopsis:
      "See You Space Cowboy",
  },

  {
    date: "08.26.2026",
    title: "Human Error: Adult Swim Bumps Edition",
    artist: "w0rmw00d",
    url: "https://soundcloud.com/user-242695785/bumps-al-hara-august-26",
    image: "bumps.png",
    synopsis: "bumps for life. i smoked a lot of weed and mixed this on the 404. it's not very good..."
];

const journalEntries = [...pressReleases];

const staticSearchItems = [
  {
    type: "page",
    title: "about",
    subtitle: "about",
    text: "PeaceLand Records gives singular artists a world around their music: narrative, design, physical releases, community, direct-to-fan relationships, live experiences, and cultural placement.",
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
    title: "radio",
    subtitle: "Radio Al Haara archive",
    text: "mixes and other random ephemera.",
    href: "/radio",
  },
  {
    type: "page",
    title: "tv",
    subtitle: "PeaceLand TV",
    text: "under construction",
    href: "/tv",
  },
  {
    type: "page",
    title: "artists",
    subtitle: "AshTreJinkins / Trip Shrubb",
    text: "Artist pages, bios, images, release histories, and longform notes.",
    href: "/artists",
  },
  ...artists.map((artist) => ({
    type: "artist",
    title: artist.name,
    subtitle: "PeaceLand artist",
    text: artist.bio,
    href: "/artists",
  })),
];

function getNavHref(item) {
  if (item === "journal") return "/#journal";
  if (item === "about") return "/#about";
  if (item === "catalog") return "/catalog";
  if (item === "radio") return "/radio";
  if (item === "tv") return "/tv";
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

function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="mb-8 grid grid-cols-1 gap-8 border-t-2 border-black pt-5 md:grid-cols-3"
    >
      <div className="font-bold leading-snug">
        <p>newsletter</p>
      </div>

      <div className="md:col-span-2">
        <p className="mb-4 max-w-3xl text-[16px] leading-snug normal-case">
          Join the PeaceLand mailing list for release notes, radio
          transmissions, physical editions, artist notes, and occasional
          dispatches from San Francisco.
        </p>

        <form
          action="https://buttondown.com/api/emails/embed-subscribe/peacelandrecords415"
          method="post"
          target="_blank"
          className="flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="bd-email" className="sr-only">
            Enter your email
          </label>

          <input
            type="email"
            name="email"
            id="bd-email"
            required
            placeholder="email"
            className="min-w-0 flex-1 border-2 border-black bg-transparent px-3 py-2 text-[14px] lowercase outline-none placeholder:text-black/45"
          />

          <input
            type="submit"
            value="subscribe"
            className="cursor-pointer border-2 border-black bg-transparent px-4 py-2 text-[14px] font-bold lowercase hover:bg-black hover:text-[#eeeeea]"
          />
        </form>
      </div>
    </section>
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
          <p>san francisco</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {["bandcamp", "instagram", "email"].map((item) => (
            <a
              key={item}
              href={
                item === "email"
                  ? `mailto:${contactEmail}`
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
              href={bandcampUrl}
              className="mt-5 inline-block border-2 border-black px-4 py-2 text-[14px] font-bold lowercase hover:bg-black hover:text-[#eeeeea]"
            >
              bandcamp
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
              <a href={bandcampUrl}>
                <img
                  src={press.image}
                  alt={press.title}
                  className="w-full object-cover"
                />
              </a>
            </div>

            <div className="space-y-5 text-[16px] leading-snug">
              {press.longText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 border-t-2 border-black pt-5 text-[15px] leading-snug">
              <p className="font-bold">PeaceLand Records</p>
              <p>San Francisco</p>
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
          className="mb-14 grid grid-cols-1 gap-8 border-b-2 border-black pb-14 md:grid-cols-3"
        >
          <div className="text-[15px] font-bold leading-snug lowercase">
            <p>catalog</p>
            <p>coming soon</p>
          </div>

          <div className="text-[22px] leading-snug md:col-span-2">
            <p>
              The catalog is being prepared. Future PeaceLand releases will live
              here with catalog numbers, credits, notes, links, and physical
              edition information.
            </p>

            <a
              href={bandcampUrl}
              className="mt-6 inline-block border-2 border-black px-4 py-2 text-[14px] font-bold lowercase hover:bg-black hover:text-[#eeeeea]"
            >
              bandcamp
            </a>
          </div>
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

        <section className="mb-10 grid grid-cols-1 gap-8 pb-8 md:grid-cols-3">
          <div className="text-[15px] font-bold leading-snug lowercase">
            <p>Radio Al Haara archive</p>
          </div>

          <div className="text-[18px] leading-snug md:col-span-2">
            <p>
              A running archive of Human Error transmissions for Radio Al Haara:
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

function ArtistsPage() {
  return (
    <main className="min-h-screen text-[#171717] selection:bg-black selection:text-white">
      <div className="mx-auto max-w-[1180px] px-5 py-7">
        <Header />

        <section className="mb-14 border-t-2 border-black">
          {artists.map((artist) => (
            <article
              key={artist.name}
              className="grid grid-cols-1 gap-8 border-b border-black/40 py-8 md:grid-cols-3"
            >
              <div>
                <p className="mb-2 text-[13px] lowercase opacity-70">artist</p>

                <h1 className="text-[24px] font-bold leading-tight">
                  {artist.name}
                </h1>

                {artist.location && (
                  <p className="mt-2 text-[14px] uppercase tracking-[0.12em]">
                    {artist.location}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                {artist.image ? (
                  <div className="mb-6 aspect-[4/3] w-full overflow-hidden bg-black/10">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="mb-6 flex aspect-[4/3] w-full items-center justify-center border-2 border-black bg-transparent text-[14px] lowercase opacity-60">
                    image coming soon
                  </div>
                )}

                <div className="space-y-5 text-[16px] leading-snug">
                  <p>{artist.bio}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={bandcampUrl}
                    className="inline-block border-2 border-black px-4 py-2 text-[14px] font-bold lowercase hover:bg-black hover:text-[#eeeeea]"
                  >
                    bandcamp
                  </a>
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

function HomePage() {
  const [search, setSearch] = useState("");

  const searchItems = useMemo(() => {
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

    const tvItems = tvTracks.map((track) => ({
      type: "tv",
      title: track.title,
      subtitle: track.artist,
      text: "PeaceLand TV score",
      href: "/tv",
    }));

    return [...pressItems, ...radioItems, ...tvItems, ...staticSearchItems];
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
        `${entry.date} ${entry.title} ${entry.artist} ${entry.text} ${entry.format || ""}`,
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
                  no results. try “madlib,” “ras g,” “radio,” “tv,” “artists,”
                  “launch,” or “catalog.”
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

        <NewsletterSection />
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

  if (path === "/tv") {
    return <TVPage />;
  }

  if (path === "/artists") {
    return <ArtistsPage />;
  }

  return <HomePage />;
}
