import { MusicListing } from "./MusicListing";
import { Song } from "../../types/Song";

type Props = {
  music: Song[];
  postSong: (id: string) => void;
};
export function BrowsingList({ music, postSong }: Props) {
  return (
    <section className=" overflow-scroll h-[85%] mt-3">
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
