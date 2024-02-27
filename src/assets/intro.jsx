import React, { useEffect, useState } from 'react';
import video1 from './0224.mp4';

export default function Intro() {
  return (
    <div className='container mx-auto'>
      <video autoPlay loop muted playsInline width="full" height="auto">
        <source src={video1} type="video/mp4" />
      </video>
    </div>
  );
};
