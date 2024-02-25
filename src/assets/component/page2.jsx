import React, { useEffect, useState } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Page2() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto bg-[#21211e]">
      <p className="pl-158px pb-8  text-xl sm:text-xs md:text-xl lg:text-2xl  text-zinc-400 Regular">About</p>
      <div className="text-white flex justify-around Light">
        <p className="text-white text-xl text-left" data-aos='fade-down' data-aos-duration='850'>
          I were given a task of
          <br />
          developing a<br />
          Augmented Reality
          <br />
          appliction inside Kelly
          <br />
          Tarlton's Sea Life
        </p>
        <p className="text-white text-xl text-center" data-aos='fade-down' data-aos-duration='850' data-aos-delay='150'>
          This app provide an
          <br />
          alternative experiance of <br />
          reading the information
          <br />
          displays inside Kelly
          <br />
          Tralton's Sea Life.
        </p>
        <p className="text-xl text-right" data-aos='fade-down' data-aos-duration='850' data-aos-delay='250'>
          Scanning AR posters
          <br />
          unlocks information
          <br />
          Cards.
        </p>
      </div>
      <div>
        <div className="flex h-auto gradiant-radial pt-28 pb-64">
          <img
            className="w-xd relative left-ha"
            src=".\src\assets\media\iPhone 12 Pro-1.png"
            data-aos='fade-down'
            data-aos-duration='850'
            data-aos-delay='200'
          />
          <img
            className="w-xd relative left-haaa top-40 z-10"
            src=".\src\assets\media\iPhone 12 Pro-2.png"
            data-aos='fade-up'
            data-aos-duration='850'
          />
          <img
            className="w-xd relative right-haa"
            src=".\src\assets\media\iPhone 12 Pro.png"
            data-aos='fade-down'
            data-aos-duration='850'
          />
        </div>
        <div className="pb-10">
          <h1 className="text-white text-center  text-base sm:text-xs md:text-xl lg:text-xl  Regular" data-aos='fade' data-aos-duration='2000'>
            Refine your experiance in Kelly Tarlton's Sea Life with a<br />
            interactive AR experiance.
          </h1>
        </div>
      </div>
    </div>
  );
}
