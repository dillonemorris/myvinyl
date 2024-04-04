"use client";

import useSWR from "swr";
import { RecordList } from "../RecordList";

export default function MyVinyl() {
  const { data } = useSWR("/api/record", (url) =>
    fetch(url).then((r) => r.json())
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>MyVinyl</h2>
      {data?.length ? <RecordList records={data} /> : null}
    </main>
  );
}
