import React, { useMemo, useState } from "react";

const contactEmail = "peacelandrecords415@gmail.com";
const bandcampUrl = "https://peaceland.bandcamp.com/";
const instagramUrl = "https://www.instagram.com/peacelandrecords/";

const nav = ["journal", "catalogue", "artists", "radio", "tv", "about"];

const artists = [
  {
    name: "Ahwlee",
    location: "Long Beach, CA",
    image: "/ahwlee_final.png",
    bio: "Killing Dante East",
  },
  {
    name: "AshTreJinkins",
    location: "Fresno, CA",
    image: "/ashtrejinkins_cover.png",
    bio: "Killing Dante East",
  },
  {
    name: "LanceSkiiiwalker",
    location: "Los Angeles, CA",
    image: "/Lance Skiiiwalkerinsta.png",
    bio: "Killing Dante East",
  },
  {
    name: "Linafornia",
    location: "Los Angeles, CA",
    image: "/linafornia_cover.png",
    bio: "Killing Dante East",
  },
  {
    name: "Rnd1",
    location: "Tucson, AZ",
    image: "/rnd1_cover.png",
    bio: "Killing Dante East",
  },
  {
    name: "Saib",
    location: "Casablanca, Morocco",
    image: "/saib_cover.png",
    bio: "Killing Dante East",
  },
  {
    name: "Siifu",
    location: "Birmingham, AL",
    image: "/siifu_cover.png",
    bio: "Killing Dante East",
  },
  {
    name: "Swarvy",
    location: "Los Angeles, CA",
    image: "/swarvy-image.jpg",
    bio: "Killing Dante East",
  },
  {
    name: "Trip Shrubb",
    location: "Hillentrup, Germany",
    image: "/michael_beckett_blackwhite.jpeg",
    bio: "Michael Beckett has a way of working that feels almost stubborn in the best sense. He commits early. He makes decisions while the sound is still warm. He lets the process leave fingerprints. The result is music that feels less like it was assembled and more like it was captured, shaped in real time, then released into the world without being overprotected.",
  },
];

const releases = [
  {
    slug: "nujje",
    date: "11.06.2026",
    artist: "Trip Shrubb",
    title: "NÜJJE!",
    format: "Album",
    image: "/NÜJJE!_Cover_front_s.jpg",
    bandcamp: "https://peaceland.bandcamp.com/album/n-jje",
    stream: "https://go.mhe.fm/ts_njje",
    single: "https://go.mhe.fm/ts_leuwerhanning",
    youtube: "https://youtu.be/s5UrcKI6Xyg?si=YNAvq62doaTzRBYr",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/s5UrcKI6Xyg",
    text: "PeaceLand Records presents NÜJJE!, Trip Shrubb's reimagining of Neu!'s debut album. Out November 6, 2026.",
    longText: [
      "NÜJJE! is Trip Shrubb's reimagining of Neu!'s debut album: not a replica, not a restoration, but a record built from the feeling of encountering that music and carrying it somewhere else.",
      "Trip Shrubb is the project of Michael Beckett, whose work has previously appeared on Faitiche. Here, the repetition, momentum, looseness, and physicality associated with Neu! become material for a new record rather than instructions for imitation.",
      "The result feels handmade and immediate. Decisions remain audible. The process leaves fingerprints. NÜJJE! is less interested in polishing away those traces than in preserving the energy that made them worth recording in the first place.",
      "NÜJJE! arrives November 6, 2026 on PeaceLand Records.",
    ],
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
