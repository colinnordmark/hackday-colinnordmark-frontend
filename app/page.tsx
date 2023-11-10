"use client";

import Image from "next/image";
import { Head, BrowsingGallery, Playlist } from "./components";
import { useEffect, useState } from "react";
import { Song } from "./types/Song";
import axios from "axios";

export default function Home() {
  const [music, setMusic] = useState<Song[]>();
  const [activePlaylist, setActivePlaylist] = useState<Song[]>();
  const [selectedPlaylist, setSelectedPlaylist] = useState<String>();
  

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

  const handlePost = async (id: string) => {
    console.log("you tried to post " + id);

    const data = await axios({
      method: "post",
      url: "http://localhost:4000/api/playlists/1",
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
        url: "http://localhost:4000/api/playlists/1",
        data: { songId: idToDelete },
      });
      console.log(data);
      fetchPlaylist();
    }
    

    
};


  useEffect(() => {
    fetchBackend();
    fetchPlaylist();
  }, []);

  return (
    <>
      <Head />
      <main className=" pb-10 bg-gradient-to-b from-teal-900 to-transparent flex h-[calc(100vh-4rem)] flex-row justify-around items-top p-4 w-screen">
        <BrowsingGallery music={music || []} postSong={handlePost} />
      
        <Playlist music={activePlaylist || []} deleteSong={handleDelete}/>
      </main>
    </>
  );
}
