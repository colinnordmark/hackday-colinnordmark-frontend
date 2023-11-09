import { SongButton } from "..";
import { Song } from "../Browsing/Song"

type Props = {
    music: Song[];
}

export function Playlist({ music }:Props){

    return(
        <section className="flex flex-col items-center justify-start w-[60%] bg-red-600">
          {
            music.map((song) => 
            <SongButton
            name={song.name}
            artist={song.artist}
            source={song.source}
            key={song.id}
          />)
          }
        </section>
    )
}