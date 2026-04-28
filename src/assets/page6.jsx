import React, { useEffect, useState } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'
import bord1 from './bord1.png'
import bord2 from './bord2.png'

export default function Page6() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto bg-[#21211e] pb-5 px-4 md:px-0">
      <div>
        <p className="text-zinc-400 text-2xl pb-6 Regular md:pl-158px">Problem</p>
      </div>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0">
        <div className="w-full md:w-1/2 md:pl-158px">
          <p className="text-white text-xl Light pb-12" data-aos='fade-down' data-aos-duration='850'>
            Through my research i find that the current
            <br />
            information display in Kelly Tarlton's Sea Life is
            <br />
            outdated and overwhelming, the experience could
            <br />
            be improved upon for kids and children's interaction.
          </p>
          <img src={bord1}  data-aos='fade-right' data-aos-duration='850' data-aos-delay='200' className="w-full h-auto"/>
        </div>
        <div className="w-full md:w-1/2">
          <img src={bord2} data-aos='fade-right' data-aos-duration='850' className="w-full h-auto"/>
          <p className="text-zinc-400 text-xl Light md:text-right pr-4 md:pr-40 pt-3" data-aos='fade' data-aos-duration='500'>Current information display in Kelly Tarlton's Sea Life</p>
        </div>
      </div>
    </div>
  );
}
