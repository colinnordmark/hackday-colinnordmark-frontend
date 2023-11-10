import { siteFromUrl } from "@/app/http/MusicUtilities";
import { SongButton } from "..";
import { Song } from "../../types/Song"
import { url } from "inspector";
import { useRef } from "react";

type Props = {
    music: Song[];
    deleteSong: (id: string) => void;
}

export function Playlist({ music, deleteSong }:Props){
  


    return(
        <> 
          {
            music.map((song) => 
            <SongButton
            song={song}
            deleteSong={deleteSong}
            key={song.id}
          />)
          }
        </>
    )
}