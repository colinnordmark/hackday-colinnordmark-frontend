'use client'

import { useState, FC } from 'react';
import React, { Component }  from 'react';
import { siteFromUrl } from '../http/MusicUtilities';
import { Song } from '../types/Song';
import { redirect } from 'next/navigation';

type Props = {
  song: Song,
  deleteSong: (id: string) => void;
};

export function SongButton({
  song, deleteSong
}:Props) {
  const [selected, setSelected] = useState<boolean>(false);
  const selectedStyle = 'bg-neutral-800 transition duration-150 ease-in delay-50 hover:bg-emerald-800 flex grid grid-cols-3 p-3 mb-3 rounded-lg w-[100%] justify-between';

  return (<article className='flex flex-row align-middle w-[100%]'>
    <button 
    type="button"
    onClick={() => setSelected((curr) => !curr)}
    className={selectedStyle}
    >
          <h2 className=' text-sm text-left'>{song.name}</h2>
          <h2 className=' text-sm text-center'>{song.artist}</h2>
          <h2 className=' text-sm text-right'>{siteFromUrl(song.url)}</h2>
          
    </button>
    {selected && <a href={song.url} target="_blank" className=' text-sm bg-neutral-900 transition duration-150 ease-in delay-50 hover:bg-emerald-700 p-3 mb-3 ml-2 rounded-lg w-[10%] justify-between text-center'>Play</a>}
    {selected && <button onClick={() => deleteSong(song.id)} className=' text-sm bg-red-900 transition duration-150 ease-in delay-50 hover:bg-red-700 p-3 mb-3 ml-2 rounded-lg w-[10%] justify-between text-center'>Delete</button>}
    </article>);
}