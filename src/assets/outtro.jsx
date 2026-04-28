import React, { useEffect, useState } from 'react';
import video2 from './0224(5).mp4';

export default function Outtro() {
  return (
    <div className='container mx-auto bg-[#21211e] py-8'>
        <p className="text-zinc-400 text-2xl pb-6 Regular px-4 md:pl-158px">User Journey</p>
      <video autoPlay loop muted playsInline className="w-full h-auto">
        <source src={video2} type="video/mp4" />
      </video>
    </div>
  );
};
