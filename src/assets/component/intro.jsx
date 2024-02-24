import React from "react";

export default function Intro() {
  return (
    <div className='container mx-auto'>
      <video autoPlay loop muted playsInline width="full" height="auto">
        <source src="./src/assets/media/0224.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
