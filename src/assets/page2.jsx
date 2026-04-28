import React, { useEffect, useState } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'
import Img1 from './iPhone 12 Pro-1.png'
import Img2 from './iPhone 12 Pro-2.png'
import Img0 from './iPhone 12 Pro.png'

export default function Page2() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto bg-[#21211e] px-4 md:px-0">
      <p className="md:pl-158px pb-8 text-xl sm:text-xs md:text-xl lg:text-2xl text-zinc-400 Regular">About</p>
      <div className="text-white flex flex-col md:flex-row justify-around Light space-y-6 md:space-y-0">
        <p className="text-white text-lg md:text-xl text-center md:text-left" data-aos='fade-down' data-aos-duration='850'>
          I were given a task of
          <br />
          developing an<br />
          Augmented Reality
          <br />
          application inside Kelly
          <br />
          Tarlton's Sea Life
        </p>
        <p className="text-white text-lg md:text-xl text-center" data-aos='fade-down' data-aos-duration='850' data-aos-delay='150'>
          This app provide an
          <br />
          alternative experience of <br />
          reading the information
          <br />
          displays inside Kelly
          <br />
          Tarlton's Sea Life.
        </p>
        <p className="text-lg md:text-xl text-center md:text-right" data-aos='fade-down' data-aos-duration='850' data-aos-delay='250'>
          Scanning AR posters
          <br />
          unlocks information
          <br />
          Cards.
        </p>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center md:items-start h-auto gradiant-radial pt-14 md:pt-28 pb-14 md:pb-64 space-y-8 md:space-y-0 overflow-hidden">
          <img
            className="w-1/2 md:w-xd relative md:left-ha"
            src={Img1}
            data-aos='fade-down'
            data-aos-duration='850'
            data-aos-delay='200'
          />
          <img
            className="w-1/2 md:w-xd relative md:left-haaa md:top-40 z-10"
            src={Img2}
            data-aos='fade-up'
            data-aos-duration='850'
          />
          <img
            className="w-1/2 md:w-xd relative md:right-haa"
            src={Img0}
            data-aos='fade-down'
            data-aos-duration='850'
          />
        </div>
        <div className="pb-10 px-4">
          <h1 className="text-white text-center text-lg md:text-xl lg:text-xl Regular" data-aos='fade' data-aos-duration='2000'>
            Refine your experience in Kelly Tarlton's Sea Life with an<br />
            interactive AR experience.
          </h1>
        </div>
      </div>
    </div>
  );
}
