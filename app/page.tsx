"use client";

import { useSession } from "next-auth/react";
import { RecordList } from "./RecordList";

const records = [
  {
    title: "Aladdin Sane",
    artist: "David Bowie",
    year: "1974",
    genre: "Pop",
  },
  {
    title: "Thriller",
    artist: "Michael Jackson",
    year: "1984",
    genre: "Pop",
  },
  {
    title: "Bad",
    artist: "Michael Jackson",
    year: "1987",
    genre: "Pop",
  },
  {
    title: "AntiSocialites",
    artist: "Alvvays",
    year: "2019",
    genre: "Pop",
  },
];

export default function Home() {
  const isSignedIn = useIsSignedIn();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>MyVinyl</h2>
      <RecordList records={records} />
    </main>
  );
}

const useIsSignedIn = () => {
  const session = useSession();
  return session.status === "authenticated";
};
