import { MusicListing } from "./MusicListing";
import { Song } from "../../types/Song";

type Props = {
  music: Song[];
};
export function BrowsingList({ music }: Props) {
  return (
    <section>
      {music.map((song) => (
        <MusicListing
          name={song.name}
          artist={song.artist}
          source={song.url}
          key={song.id}
        />
      ))}
    </section>
  );
}
