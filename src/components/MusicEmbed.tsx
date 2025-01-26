"use client";

import { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";

export default function MusicEmbed() {
  const [loading, setLoading] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // this forces a rerender
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // this returns null on first render, so the client and server match
    return null;
  }
  return (
    <div
      suppressHydrationWarning
      className="bg-[#295875] w-full md:w-3/4 rounded-[12px] h-[152px] relative"
    >
      <iframe
        suppressHydrationWarning
        className="roxunded-[12px] mt-3 w-full"
        src="https://open.spotify.com/embed/track/0lzNXoZINVBLHWNIxKxWOo?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        onLoad={() => {
          setLoading(false);
        }}
      ></iframe>
      {loading ? (
        <div
          suppressHydrationWarning
          className="flex items-center justify-center h-full absolute left-0 top-0 w-full"
        >
          <GridLoader color="#003550" />
        </div>
      ) : (
        <div suppressHydrationWarning></div>
      )}
    </div>
  );
}
