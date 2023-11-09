import { siteFromUrl } from "@/app/http/MusicUtilities";
import { SongButton } from "..";
import { Song } from "../../types/Song"
import { url } from "inspector";

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
            source={siteFromUrl(song.url)}
            key={song.id}
          />)
          }
        </section>
    )
}