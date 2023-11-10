'use client';

import { useEffect, useRef, useState } from "react";
import { BrowsingList } from "./BrowsingList";
import { Song } from "../../types/Song";
import { siteFromUrl } from "@/app/http/MusicUtilities";

type Props = {
  music: Song[];
  postSong: (id: string) => void;
}

export function BrowsingGallery({ music, postSong }:Props) {
  const [filteredMusic, setFilteredMusic] = useState<Song[]>();
  const musicFilter = useRef<HTMLSelectElement>({} as HTMLSelectElement);

  
  
  useEffect(() => {
    setFilteredMusic(music.filter((song) => siteFromUrl(song.url) == musicFilter.current.value));
  }, [music]);

  return (
    <section className="transition duration-700 ease-in-out hover:bg-opacity-40 hover:bg-teal-900 w-[25%] bg-black bg-opacity-25 p-5 mr-8 rounded-3xl border-2 border-teal-500 border-opacity-30 drop-shadow-lg">
      <h1 className=" text-lg mb-3">Browser</h1>
      <form>
        <select
          id="source"
          name="sources"
          ref={musicFilter}
          onChange={() => setFilteredMusic(music.filter((song) => siteFromUrl(song.url) == musicFilter.current.value))}
          className=' text-sm bg-black bg-opacity-50 text-white w-[100%] p-2 rounded-lg'
        >
          <option value="Soundcloud">Soundcloud</option>
          <option value="Youtube">Youtube</option>
          <option value="Spotify">Spotify</option>
        </select>
      </form>
      <BrowsingList music={filteredMusic||[]} postSong={postSong} />
    </section>
  );
}


