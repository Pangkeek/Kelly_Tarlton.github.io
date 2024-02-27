import React, { useEffect, useState } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Page7() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="container mx-auto bg-[#21211e] pb-14 rounded-b-3xl">
        <div className="flex">
          <div className="w-1/2 pl-158px">
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
          <div className="w-1/2 pl-158px">
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
        <div className='flex items-end justify-between'>
            <img className='w-xdd object-cover h-full ml-bo' src='.\src\assets\iPhone 12 Pro-5.png' data-aos='fade-left' data-aos-duration='850'/>
            <img className='w-xddd object-cover h-full ' src='.\src\assets\iPhone 12 Pro-4.png' data-aos='fade-left' data-aos-duration='850'/>
            <img className='w-xdddd object-cover h-full mr-bo' src='.\src\assets\iPhone 12 Pro-3.png' data-aos='fade-left' data-aos-duration='850'/>
        </div>
      </div>
    </div>
  );
}
