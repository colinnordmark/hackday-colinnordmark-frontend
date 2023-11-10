import { siteFromUrl } from "@/app/http/MusicUtilities";
import { SongButton } from "..";
import { Song } from "../../types/Song"
import { url } from "inspector";
import { useRef, useState } from "react";

type Props = {
    music: Song[];
    deleteSong: (id: string) => void;
    getNewPlaylist: (id: string) => void;
}

//This is supposed to handle selection of playlist
export function PlaylistContainer({ music, deleteSong, getNewPlaylist}: Props){
    const playlistSelector = useRef<HTMLSelectElement>({} as HTMLSelectElement);

    return(<section>
      <h1 className=" text-lg m-1 mb-3 text-left">Saved music</h1>
          <form>
        <select
          id="source"
          name="sources"
          ref={playlistSelector}
          onChange={() => getNewPlaylist(playlistSelector.current.value)}
          className=' text-sm bg-black text-white w-[100%] p-2 rounded-xl'
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>
    </section>
        
    );
}