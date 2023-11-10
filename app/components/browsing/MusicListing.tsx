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
    <button onClick={() => postSong(song.id)} className='flex flex-col transition duration-150 ease-in delay-50 drop-shadow-lg bg-neutral-300 hover:bg-neutral-100 p-3 mt-4 rounded-lg w-[100%] justify-between'>
          <h2 className='text-sm text-black font-bold'>{song.name}</h2>
          <h2 className='text-sm text-black font-normal'>{song.artist}</h2>
    </button>
  );
}