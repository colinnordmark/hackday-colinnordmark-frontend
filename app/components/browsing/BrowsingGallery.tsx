'use client';

import { useEffect, useRef, useState } from "react";
import { BrowsingList } from "./BrowsingList";
import { Song } from "./Song";

type Props = {
  music: Song[];
}

export function BrowsingGallery({ music }:Props) {
  const [filteredMusic, setFilteredMusic] = useState<Song[]>();
  const musicFilter = useRef<HTMLSelectElement>({} as HTMLSelectElement);


  
  useEffect(() => {
    setFilteredMusic(music.filter((song) => song.source == musicFilter.current.value));
  }, []);

  return (
    <section className="w-[25%] bg-gray-800 p-5 rounded-xl">
      <form>
        <select
          id="source"
          name="sources"
          ref={musicFilter}
          onChange={() => setFilteredMusic(music.filter((song) => song.source == musicFilter.current.value))}
          className="bg-black text-white w-[100%] p-2 rounded-lg"
        >
          <option value="Soundcloud">Soundcloud</option>
          <option value="Youtube">Youtube</option>
          <option value="Spotify">Spotify</option>
        </select>
      </form>
      <BrowsingList music={filteredMusic||[]} />
    </section>
  );
}


