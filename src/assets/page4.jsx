import React, { useEffect, useState } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Page4() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto bg-[#21211e] flex">
      <div className="w-1/2 pl-158px">
        <p className="text-zinc-400 text-2xl pb-6 Regular">User Interview</p>
        <p className="text-white text-xl Light" data-aos='fade-right' data-aos-duration='850'>
          For the research process, I decided to go to Kelly
          <br />
          Tarlton's Sea Life with my friends and interviews
          <br />
          some of the guests there, to know what our user
          <br />
          needs. By going to the actual Kelly Tarlton's Sea
          <br />
          Life, this allow us to see the user environment.
          <br />
          interviews are good as it provide actual data from
          <br />
          our user.
        </p>
      </div>
      <div className="w-1/2 pl-158px">
        <p className="text-zinc-400 text-2xl pb-6 Medium">Understanding</p>
        <p className="text-white text-xl Light" data-aos='fade-left' data-aos-duration='850'>
          The most important findings from this interview are:
          <br />
          1. Most user think the current information
          <br />
          &emsp;display is outdated
          <br />
          2. Most user think that the overall experience is
          <br />
          &emsp;too short
          <br />
          3. Children's and kids isn't interested in the
          <br />
          &emsp;current information display
        </p>
      </div>
    </div>
  );
}
