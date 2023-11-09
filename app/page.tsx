"use client";

import Image from "next/image";
import { Head, BrowsingGallery, Playlist } from "./components";
import { useEffect, useState } from "react";
import { Song } from "./types/Song";
import axios from "axios";

export default function Home() {
  const [music, setMusic] = useState<Song[]>();
  const [activePlaylist, setActivePlaylist] = useState<Song[]>();

  const fetchBackend = async () => {
    const response = await axios.get("http://localhost:4000/api/songs");
    const data = response.data;
    console.log(data);
    setMusic(data);
  };

  const fetchPlaylist = async () => {
    const response = await axios.get("http://localhost:4000/api/playlists/1");
    const data = response.data;
    console.log(data);
    setActivePlaylist(data);
  };

  const postToApi = async (id: string) => {
    console.log("you tried to post " + id);

    const data = await axios({
      method: "post",
      url: "http://localhost:4000/api/playlists/1",
      data: { songId: id },
    });

    console.log(data);
    setActivePlaylist(data.data);
  };

  function postToPlaylist(id: string) {
    postToApi(id);
  }

  useEffect(() => {
    fetchBackend();
    fetchPlaylist();
  }, []);

  return (
    <>
      <Head />
      <main className="flex h-[calc(100vh-4rem)] flex-row justify-around items-top p-4 w-screen">
        <BrowsingGallery music={music || []} postSong={postToApi} />
        <Playlist music={activePlaylist || []} />
      </main>
    </>
  );
}
