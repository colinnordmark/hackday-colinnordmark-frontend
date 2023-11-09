import { MusicListing } from "./MusicListing";
import { Song } from "./Song";

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
          source={song.source}
          key={song.id}
        />
      ))}
    </section>
  );
}
