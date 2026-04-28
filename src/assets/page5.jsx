import React, { useEffect, useState } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'
import Lui from './Rectangle 29.png'

export default function Page5() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto bg-[#21211e] pb-5 px-4 md:px-0">
      <div>
        <p className="text-zinc-400 text-2xl pb-6 Regular md:pl-158px">
          User Persona
        </p>
      </div>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0">
        <div className="w-full md:w-1/2 md:pl-158px">
          <img src={Lui} data-aos='fade-right' data-aos-duration='850' className="w-full h-auto"/>
        </div>
        <div className="w-full md:w-1/2 md:pl-158px pt-4 md:pt-14">
          <p className="text-zinc-400 text-2xl pb-6 Light">Personality</p>
          <p className="text-white text-xl Light pb-6" data-aos='fade-left' data-aos-duration='850'>
            Lui is 14, he's from Thailand and currently studying
            <br />
            in Rangitoto college. Lui live with a home-stay as
            <br />
            an international student in New Zealand. Lui is an
            <br />
            extrovert kid and he enjoyed exploration and
            <br />
            socialise. His exploration hobby can be seen as he
            <br />
            usually travels every weekends, going to public
            <br />
            places, like MOTAT, Auckland Museum Zoo, and
            <br />
            the CBD. He is also very technological and enjoys
            <br />
            using different devices and learning new
            <br />
            softwares.
          </p>
          <p className="text-zinc-400 text-2xl Light pb-6">Goals:</p>
          <p className="text-white text-xl Light pl-2" data-aos='fade-left' data-aos-duration='850'>
            &bull;&ensp;Exploring new places and finding new
            <br />
            &emsp;experiences in places
          </p>
          <p className="text-white text-xl Light pl-2" data-aos='fade-left' data-aos-duration='850' data-aos-delay='175'>
            &bull;&ensp;Wants to find a fun alternative to education
          </p>
          <p className="text-white text-xl Light pl-2" data-aos='fade-left' data-aos-duration='850' data-aos-delay='200'>
            &bull;&ensp;Wants to experience state of the arts
            <br />
            &emsp;technology.
          </p>
          <p className="text-white text-xl Regular md:pl-32 pt-6 italic text-center md:text-left" data-aos='fade' data-aos-duration='2000' >
            "It's a dream to explore"
          </p>
        </div>
      </div>
    </div>
  );
}
