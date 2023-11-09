'use client'

import Image from 'next/image'
import {Head, BrowsingGallery, Playlist } from "./components";
import { useEffect, useState } from 'react';
import { Song } from './types/Song';
import axios from 'axios';

export default function Home() {
  const [music, setMusic] = useState<Song[]>();

  const fetchBackend = async () => {
    const response = await axios.get("http://localhost:4000/api/songs");
    const data = response.data;
    console.log (data);
    setMusic(data); 
}


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

  useEffect(() => {
    fetchBackend()
  
  }, [])
  

  return (
    <>
      <Head/>
      <main className="flex h-[calc(100vh-4rem)] flex-row justify-around items-top p-4 w-screen">
        <BrowsingGallery music={music || []}/>
        <Playlist music={music || []}/>
      </main>
    </>
  );
    
}
