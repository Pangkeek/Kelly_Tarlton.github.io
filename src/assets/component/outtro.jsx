import React, { useEffect, useState } from 'react';

export default function Outtro() {
  return (
    <div className='container mx-auto'>
        <p className="text-zinc-400 text-2xl pb-6 Regular pl-158px">User Journey</p>
      <video autoPlay loop muted playsInline width="full" height="auto">
        <source src="./src/assets/media/0224(5).mp4" type="video/mp4" />
      </video>
    </div>
  );
};
