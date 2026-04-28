import React, { useEffect, useState } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'
import Img5 from './iPhone 12 Pro-5.png'
import Img4 from './iPhone 12 Pro-4.png'
import Img3 from './iPhone 12 Pro-3.png'

export default function Page7() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="container mx-auto bg-[#21211e] pb-14 rounded-b-3xl px-4 md:px-0">
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0">
          <div className="w-full md:w-1/2 md:pl-158px">
            <p className="text-zinc-400 text-2xl pb-6 Regular">Solution</p>
            <p className="text-white text-xl Light" data-aos='fade-right' data-aos-duration='850'>
              This AR app then offer a solution of offering a<br />
              alternative experience of reading the information
              <br />
              display, by playing a game of finding and scanning
              <br />
              AR to gain access to info cards. This solution helps
              <br />
              kids and children to enjoy reading the info's on
              <br />
              the Teasure Hunt backgrounds of Kelly Tarlton's
              <br />
              career to the app.
            </p>
          </div>
          <div className="w-full md:w-1/2 md:pl-158px">
            <p className="text-zinc-400 text-2xl pb-6 Medium">
              Gap in the Market
            </p>
            <p className="text-white text-xl Light" data-aos='fade-left' data-aos-duration='850'>
              I fond that there's gap on Kelly Tarlton's Sea Life
              <br />
              current information display, as it outdated and
              <br />
              isn't quite appealing for the target consumer of
              <br />
              Kelly Tarlton.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center md:items-end justify-between space-y-10 md:space-y-0 pt-10'>
            <img className='w-2/3 md:w-xdd object-cover h-auto md:h-full md:ml-bo' src={Img5} data-aos='fade-left' data-aos-duration='850'/>
            <img className='w-full md:w-xddd object-cover h-auto md:h-full ' src={Img4} data-aos='fade-left' data-aos-duration='850'/>
            <img className='w-3/4 md:w-xdddd object-cover h-auto md:h-full md:mr-bo' src={Img3} data-aos='fade-left' data-aos-duration='850'/>
        </div>
      </div>
    </div>
  );
}
