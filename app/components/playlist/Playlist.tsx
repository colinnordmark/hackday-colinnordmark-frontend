import { siteFromUrl } from "@/app/http/MusicUtilities";
import { SongButton } from "..";
import { Song } from "../../types/Song"
import { url } from "inspector";
import { useRef } from "react";

type Props = {
    music: Song[];
    deleteSong: (id: string) => void;
    getNewPlaylist: (id: string) => void;
}

export function Playlist({ music, deleteSong }:Props){
  


    return(
        <section className="flex transition duration-700 ease-in-out hover:bg-opacity-40 hover:bg-teal-900 border-2 border-teal-500 border-opacity-30 bg-black bg-opacity-25 p-4 rounded-3xl flex-col items-left justify-start w-[60%] drop-shadow-lg">
          
          {
            music.map((song) => 
            <SongButton
            song={song}
            deleteSong={deleteSong}
            key={song.id}
          />)
          }
        </section>
    )
}