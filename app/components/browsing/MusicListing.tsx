import { useState, FC } from 'react';
import React, { Component }  from 'react';

type Props = {
  name: string;
  artist: string;
  source: string;
  //deleteDev: (id: string) => void;
};

export function MusicListing({
  name, artist,
}:Props) {
  
  return (
    <button onClick={() => console.log('hello')} className='flex flex-col border-2 border-white p-3 mt-4 rounded-lg w-[100%] justify-between'>
          <h2>{name}</h2>
          <h2>{artist}</h2>
    </button>
  );
}