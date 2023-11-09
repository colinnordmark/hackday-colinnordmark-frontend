'use client'

import { useState, FC } from 'react';
import React, { Component }  from 'react';

type Props = {
  name: string;
  artist: string;
  source: string;
  //deleteDev: (id: string) => void;
};

export function SongButton({
  name, artist, source,
}:Props) {
  const [selected, setSelected] = useState<boolean>(false);
  const unselectedStyle = 'flex grid border-2 grid-cols-3 border-white p-3 mb-4 rounded-lg w-[100%] justify-between';
  const selectedStyle = 'flex grid border-2 grid-cols-3 border-red-500 p-3 mb-4 rounded-lg w-[100%] justify-between';

  return (<article className='flex flex-row align-middle w-[100%]'>
    <button 
    type="button"
    onClick={() => setSelected((curr) => !curr)}
    className={selected ? selectedStyle : unselectedStyle}
    >
          <h2 className=' text-left'>{name}</h2>
          <h2 className=' text-center'>{artist}</h2>
          <h2 className=' text-right'>{source}</h2>
          
    </button>
    {selected && <h2 onClick={() => console.log('registered delete')} className=' p-3 text-right'>Delete</h2>}
    </article>);
}