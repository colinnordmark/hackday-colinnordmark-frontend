import Image from 'next/image'
import { SongButton, Head, BrowsingGallery, Playlist } from "./components";

export default function Home() {
  const temp = [
    {
      name: "Chattermax",
      artist: "Some bird",
      id: "1",
      source: "Soundcloud",
    },
    {
      name: "Fireplace 10 hours",
      artist: "Fireplace",
      id: "2",
      source: "Youtube",
    },
    {
      name: "Podcast #10,000",
      artist: "Joe Rogan",
      id: "3",
      source: "Spotify",
    },
  ];

  return (
    <>
      <Head/>
      <main className="flex h-[calc(100vh-4rem)] flex-row justify-around items-top p-4 w-screen">
        <BrowsingGallery music={temp}/>
        <Playlist music={temp}/>
      </main>
    </>
  );
    
}
