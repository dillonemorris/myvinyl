"use client";

import useSWRMutation from "swr/mutation";

type Record = {
  title: string;
  artist: string;
  year: string;
  genre: string;
};

export const RecordList = ({ records }: { records: Record[] }) => {
  const { trigger: addRecord } = useSWRMutation("/api/record", createRecord);

  return records.map((record) => {
    return (
      <div>
        <h3>{record.title}</h3>
        <p>{record.artist}</p>
        <button
          className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => addRecord(record)}
        >
          Add to collection
        </button>
      </div>
    );
  });
};

const createRecord = async (url: string, { arg }: { arg: Record }) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  });

  return await res.json();
};
