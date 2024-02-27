import React, { useEffect, useState } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'
import Lui from './Rectangle 29.png'

export default function Page5() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto bg-[#21211e] pb-5">
      <div>
        <p className="text-zinc-400 text-2xl pb-6 Regular pl-158px">
          User Persona
        </p>
      </div>
      <div className="flex">
        <div className="w-1/2 pl-158px">
          <img src={Lui} data-aos='fade-right' data-aos-duration='850'/>
        </div>
        <div className="w-1/2 pl-158px pt-14">
          <p className="text-zinc-400 text-2xl pb-6 Light">Personality</p>
          <p className="text-white text-xl Light pb-6" data-aos='fade-left' data-aos-duration='850'>
            Lui is 14, he's from Thailand and currently studying
            <br />
            in Rangitoto college. Lui live with a home-stay as
            <br />
            an international student in New Zealand. Lui is ans
            <br />
            extrovert kid and he enjoyed exploration ands
            <br />
            socialise. His exploration hobby can be seen as he
            <br />
            usually travels every weekends, going to public
            <br />
            places, like MOTAT, Auckland Museum Zoo, ands
            <br />
            the CBD. He is also vary technological and enjoys
            <br />
            using different devices and learning news
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
          <p className="text-white text-xl Regular pl-32 pt-6" data-aos='fade' data-aos-duration='2000' >
            "It's a dream to explore"
          </p>
        </div>
      </div>
    </div>
  );
}
