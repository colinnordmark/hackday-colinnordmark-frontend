import { Song } from '@/app/types/Song';
import { useState, FC } from 'react';
import React, { Component }  from 'react';

type Props = {
  song:Song;
  postSong: (id: string) => void;
  //deleteDev: (id: string) => void;
};

export function MusicListing({
  song, postSong
}:Props) {
  
  return (
    <button onClick={() => postSong(song.id)} className='flex flex-col border-2 border-white p-3 mt-4 rounded-lg w-[100%] justify-between'>
          <h2>{song.name}</h2>
          <h2>{song.artist}</h2>
    </button>
  );
}