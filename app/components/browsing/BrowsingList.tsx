import { MusicListing } from "./MusicListing";
import { Song } from "../../types/Song";

type Props = {
  music: Song[];
  postSong: (id: string) => void;
};
export function BrowsingList({ music, postSong }: Props) {
  return (
    <section>
      {music.map((song) => (
        <MusicListing
          postSong={postSong}
          song={song}
          key={song.id}
        />
      ))}
    </section>
  );
}
