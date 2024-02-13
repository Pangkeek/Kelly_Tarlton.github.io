import React from "react";

export default function Page2() {
  return (
    <div className="container mx-auto bg-neutral-900">
      <p className="pl-170px pb-8 text-xl text-zinc-400">About</p>
      <div className="text-white flex justify-around">
        <p className="text-white text-xl text-left">
          i were given a task of
          <br />
          developing a<br />
          Augmented Reality
          <br />
          appliction inside Kelly
          <br />
          Tarlton's Sea Life
        </p>
        <p className="text-white text-xl text-center">
          This app provide an
          <br />
          alternative experiance of <br />
          reading the information
          <br />
          displays inside Kelly
          <br />
          Tralton's Sea Life.
        </p>
        <p className="text-white text-xl text-right">
          Scanning AR posters
          <br />
          unlocks information
          <br />
          Cards.
        </p>
      </div>
      <div className='flex h-auto gradiant-radial'>
        <img className='w-80 relative left-' src='.\src\assets\media\iPhone 12 Pro-1.png'/>
        <img className='w-80 relative' src='.\src\assets\media\iPhone 12 Pro-2.png'/>
        <img className='w-80 relative' src='.\src\assets\media\iPhone 12 Pro.png'/>
      </div>
    </div>
  );
}
