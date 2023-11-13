"use client";

import Image from "next/image";
import { Head, BrowsingGallery, Playlist } from "./components";
import { useEffect, useState } from "react";
import { Song } from "./types/Song";
import axios from "axios";
import { PlaylistContainer } from "./components/playlist/PlaylistContainer";

export default function Home() {
  const [music, setMusic] = useState<Song[]>();
  const [activePlaylist, setActivePlaylist] = useState<Song[]>();
  const [selectedPlaylist, setSelectedPlaylist] = useState<string>();
  

  const fetchBackend = async () => {
    const response = await axios.get("http://localhost:4000/api/songs");
    const data = response.data;
    console.log(data);
    setMusic(data);
  };

  const fetchPlaylist = async (id: string) => {
    const response = await axios.get(`http://localhost:4000/api/playlists/${id}`);
    const data = response.data;
    console.log(data);
    setActivePlaylist(data);
    setSelectedPlaylist(id);
  };

  const handlePost = async (id: string) => {
    console.log("you tried to post " + id);

    const data = await axios({
      method: "post",
      url: `http://localhost:4000/api/playlists/${selectedPlaylist}`,
      data: { songId: id },
    });

    console.log(data);
    setActivePlaylist(data.data);
  };

  const handleDelete = async (idToDelete: string) => {
    console.log("you tried to delete " + idToDelete);

    if(confirm('Are you sure you want to delete this song?')) {
      const data = await axios({
        method: "delete",
        url: `http://localhost:4000/api/playlists/${selectedPlaylist}`,
        data: { songId: idToDelete },
      });
      console.log(data);
      fetchPlaylist(selectedPlaylist || "1");
    }
    

    
};


  useEffect(() => {
    fetchBackend();
    fetchPlaylist("1");
  }, []);

  return (
    <main className="pb-10 bg-gradient-to-b from-teal-900 to-transparent">
        <Head />
      <section className=" flex h-[calc(100vh-8rem)] flex-row justify-center p-4 items-top  mx-auto w-full max-w-screen-2xl overflow-hidden">
        <BrowsingGallery music={music || []} postSong={handlePost} />
        <PlaylistContainer getNewPlaylist={fetchPlaylist} music={activePlaylist || []} deleteSong={handleDelete}/>
      </section>
    </main>
  );
}

/*        <PlaylistContainer music={activePlaylist || []} deleteSong={handleDelete}/>
 */
