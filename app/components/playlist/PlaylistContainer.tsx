import { siteFromUrl } from "@/app/http/MusicUtilities";
import { Playlist, SongButton } from "..";
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

    return(<section className="flex transition duration-700 ease-in-out hover:bg-opacity-40 hover:bg-teal-900 border-2 border-teal-500 border-opacity-30 bg-black bg-opacity-25 p-4 rounded-3xl flex-col items-left justify-start w-[60%] drop-shadow-lg">
      <h1 className=" text-lg m-1 mb-3 text-left">Saved music</h1>
          <form>
        <select
          id="source"
          name="sources"
          ref={playlistSelector}
          onChange={() => getNewPlaylist(playlistSelector.current.value)}
          className=' text-sm mb-3 bg-black bg-opacity-50 text-white w-[100%] p-2 rounded-lg'
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>
      <Playlist music={music} deleteSong={deleteSong}/>
    </section>
        
    );
}